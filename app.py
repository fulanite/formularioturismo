import csv
import io
import json
import os
import sqlite3
import uuid
from collections import Counter
from datetime import date, datetime
from pathlib import Path

from flask import Flask, Response, jsonify, render_template, request, send_file

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
DB_PATH = DATA_DIR / "tourism_kiosk.db"
CONFIG_PATH = BASE_DIR / "config.json"

DEFAULT_CONFIG = {
    "admin_pin": "1234",
    "kiosk_id": "FME-001",
    "age_min": 0,
    "age_max": 110,
    "countdown_seconds": 10,
}


def load_config():
    if not CONFIG_PATH.exists():
        with CONFIG_PATH.open("w", encoding="utf-8") as f:
            json.dump(DEFAULT_CONFIG, f, ensure_ascii=False, indent=2)
        return DEFAULT_CONFIG.copy()

    with CONFIG_PATH.open("r", encoding="utf-8") as f:
        user_cfg = json.load(f)

    merged = DEFAULT_CONFIG.copy()
    merged.update(user_cfg)
    return merged


CONFIG = load_config()

app = Flask(__name__)


def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    with get_db_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS responses (
                id TEXT PRIMARY KEY,
                created_at TEXT NOT NULL,
                origin_type TEXT NOT NULL CHECK(origin_type IN ('AR', 'INT')),
                province TEXT,
                country TEXT,
                age INTEGER NOT NULL,
                first_time INTEGER NOT NULL CHECK(first_time IN (0, 1)),
                motives TEXT NOT NULL,
                motive_other_text TEXT,
                places TEXT NOT NULL,
                places_other_text TEXT,
                satisfaction INTEGER NOT NULL CHECK(satisfaction BETWEEN 1 AND 5),
                improvement_comment TEXT,
                kiosk_id TEXT NOT NULL
            )
            """
        )
        conn.execute(
            "CREATE INDEX IF NOT EXISTS idx_responses_created_at ON responses(created_at)"
        )
        conn.commit()


def is_valid_pin(pin: str) -> bool:
    return bool(pin) and pin == str(CONFIG.get("admin_pin", ""))


def parse_json_list(raw):
    if not isinstance(raw, list):
        return None
    cleaned = [str(item).strip() for item in raw if str(item).strip()]
    return cleaned


def validate_response(payload):
    errors = []

    origin_type = payload.get("origin_type")
    if origin_type not in ("AR", "INT"):
        errors.append("origin_type inválido")

    province = payload.get("province")
    country = payload.get("country")

    if origin_type == "AR" and not province:
        errors.append("province es obligatorio cuando origin_type=AR")
    if origin_type == "INT" and not country:
        errors.append("country es obligatorio cuando origin_type=INT")

    try:
        age = int(payload.get("age"))
    except (TypeError, ValueError):
        age = None

    age_min = int(CONFIG.get("age_min", 0))
    age_max = int(CONFIG.get("age_max", 110))
    if age is None:
        errors.append("age es obligatorio")
    elif age < age_min or age > age_max:
        errors.append(f"age fuera de rango ({age_min}-{age_max})")

    first_time = payload.get("first_time")
    if not isinstance(first_time, bool):
        errors.append("first_time debe ser boolean")

    motives = parse_json_list(payload.get("motives"))
    if motives is None:
        errors.append("motives debe ser un array")

    places = parse_json_list(payload.get("places"))
    if places is None:
        errors.append("places debe ser un array")

    try:
        satisfaction = int(payload.get("satisfaction"))
    except (TypeError, ValueError):
        satisfaction = None
    if satisfaction is None or not (1 <= satisfaction <= 5):
        errors.append("satisfaction debe estar entre 1 y 5")

    improvement_comment = (payload.get("improvement_comment") or "").strip()
    if len(improvement_comment) > 120:
        errors.append("improvement_comment excede 120 caracteres")

    if errors:
        return None, errors

    response_data = {
        "id": str(uuid.uuid4()),
        "created_at": datetime.now().isoformat(timespec="seconds"),
        "origin_type": origin_type,
        "province": province.strip() if isinstance(province, str) else None,
        "country": country.strip() if isinstance(country, str) else None,
        "age": age,
        "first_time": 1 if first_time else 0,
        "motives": json.dumps(motives, ensure_ascii=False),
        "motive_other_text": (payload.get("motive_other_text") or "").strip() or None,
        "places": json.dumps(places, ensure_ascii=False),
        "places_other_text": (payload.get("places_other_text") or "").strip() or None,
        "satisfaction": satisfaction,
        "improvement_comment": improvement_comment or None,
        "kiosk_id": str(CONFIG.get("kiosk_id", "FME-001")),
    }
    return response_data, None


def fetch_all_responses():
    with get_db_connection() as conn:
        rows = conn.execute("SELECT * FROM responses ORDER BY created_at DESC").fetchall()
    return [dict(row) for row in rows]


def parse_iso_date(value):
    if not value:
        return None
    try:
        return date.fromisoformat(str(value))
    except ValueError:
        return None


def filter_rows_by_date(rows, date_from=None, date_to=None):
    start_date = parse_iso_date(date_from)
    end_date = parse_iso_date(date_to)
    if not start_date and not end_date:
        return rows

    filtered = []
    for row in rows:
        created_raw = str(row.get("created_at") or "")
        try:
            created_date = datetime.fromisoformat(created_raw).date()
        except ValueError:
            continue

        if start_date and created_date < start_date:
            continue
        if end_date and created_date > end_date:
            continue
        filtered.append(row)
    return filtered


def calculate_metrics(rows):
    total = len(rows)
    today_str = datetime.now().date().isoformat()
    today_count = sum(1 for row in rows if str(row["created_at"]).startswith(today_str))

    provinces = [row["province"] for row in rows if row["origin_type"] == "AR" and row["province"]]
    top_provinces = Counter(provinces).most_common(5)

    motives_counter = Counter()
    satisfaction_values = []
    age_ranges = {
        "0-12": 0,
        "13-17": 0,
        "18-30": 0,
        "31-45": 0,
        "46-60": 0,
        "61+": 0,
    }
    satisfaction_distribution = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0}

    for row in rows:
        try:
            motives = json.loads(row["motives"] or "[]")
            for m in motives:
                motives_counter[str(m)] += 1
        except json.JSONDecodeError:
            pass

        if row["satisfaction"] is not None:
            sat = int(row["satisfaction"])
            satisfaction_values.append(sat)
            if str(sat) in satisfaction_distribution:
                satisfaction_distribution[str(sat)] += 1

        age = row["age"]
        if age is None:
            continue
        age = int(age)
        if age <= 12:
            age_ranges["0-12"] += 1
        elif age <= 17:
            age_ranges["13-17"] += 1
        elif age <= 30:
            age_ranges["18-30"] += 1
        elif age <= 45:
            age_ranges["31-45"] += 1
        elif age <= 60:
            age_ranges["46-60"] += 1
        else:
            age_ranges["61+"] += 1

    avg_satisfaction = round(sum(satisfaction_values) / len(satisfaction_values), 2) if satisfaction_values else 0

    return {
        "total_responses": total,
        "responses_today": today_count,
        "top_provinces": [{"name": name, "count": count} for name, count in top_provinces],
        "top_motives": [{"name": name, "count": count} for name, count in motives_counter.most_common(5)],
        "average_satisfaction": avg_satisfaction,
        "satisfaction_distribution": satisfaction_distribution,
        "age_distribution": age_ranges,
    }


init_db()


@app.route("/")
def index():
    public_config = {
        "age_min": int(CONFIG.get("age_min", 0)),
        "age_max": int(CONFIG.get("age_max", 110)),
        "countdown_seconds": int(CONFIG.get("countdown_seconds", 10)),
        "kiosk_id": str(CONFIG.get("kiosk_id", "FME-001")),
    }
    return render_template("index.html", app_config=public_config)


@app.route("/api/responses", methods=["POST"])
def create_response():
    payload = request.get_json(silent=True) or {}
    response_data, errors = validate_response(payload)
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    with get_db_connection() as conn:
        conn.execute(
            """
            INSERT INTO responses (
                id, created_at, origin_type, province, country, age, first_time,
                motives, motive_other_text, places, places_other_text, satisfaction,
                improvement_comment, kiosk_id
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            (
                response_data["id"],
                response_data["created_at"],
                response_data["origin_type"],
                response_data["province"],
                response_data["country"],
                response_data["age"],
                response_data["first_time"],
                response_data["motives"],
                response_data["motive_other_text"],
                response_data["places"],
                response_data["places_other_text"],
                response_data["satisfaction"],
                response_data["improvement_comment"],
                response_data["kiosk_id"],
            ),
        )
        conn.commit()

    return jsonify({"ok": True, "id": response_data["id"]}), 201


@app.route("/api/admin/metrics", methods=["GET"])
def admin_metrics():
    pin = request.args.get("pin", "")
    if not is_valid_pin(pin):
        return jsonify({"ok": False, "error": "PIN inválido"}), 401

    date_from = request.args.get("date_from", "")
    date_to = request.args.get("date_to", "")
    rows = filter_rows_by_date(fetch_all_responses(), date_from, date_to)
    metrics = calculate_metrics(rows)
    return jsonify({"ok": True, "metrics": metrics})


@app.route("/api/admin/dashboard", methods=["GET"])
def admin_dashboard():
    pin = request.args.get("pin", "")
    if not is_valid_pin(pin):
        return jsonify({"ok": False, "error": "PIN inválido"}), 401

    date_from = request.args.get("date_from", "")
    date_to = request.args.get("date_to", "")
    limit_raw = request.args.get("limit", "50")
    try:
        limit = max(1, min(int(limit_raw), 300))
    except ValueError:
        limit = 50

    rows = filter_rows_by_date(fetch_all_responses(), date_from, date_to)
    metrics = calculate_metrics(rows)

    recent_rows = []
    for row in rows[:limit]:
        parsed = dict(row)
        parsed["motives"] = json.loads(parsed.get("motives") or "[]")
        parsed["places"] = json.loads(parsed.get("places") or "[]")
        parsed["first_time"] = bool(parsed.get("first_time"))
        recent_rows.append(parsed)

    return jsonify(
        {
            "ok": True,
            "date_from": date_from or None,
            "date_to": date_to or None,
            "metrics": metrics,
            "rows": recent_rows,
        }
    )


@app.route("/api/admin/export/json", methods=["GET"])
def admin_export_json():
    pin = request.args.get("pin", "")
    if not is_valid_pin(pin):
        return jsonify({"ok": False, "error": "PIN inválido"}), 401

    date_from = request.args.get("date_from", "")
    date_to = request.args.get("date_to", "")
    rows = filter_rows_by_date(fetch_all_responses(), date_from, date_to)
    for row in rows:
        row["motives"] = json.loads(row.get("motives") or "[]")
        row["places"] = json.loads(row.get("places") or "[]")
        row["first_time"] = bool(row.get("first_time"))

    memory_file = io.BytesIO()
    memory_file.write(json.dumps(rows, ensure_ascii=False, indent=2).encode("utf-8"))
    memory_file.seek(0)
    filename = f"responses_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    return send_file(memory_file, as_attachment=True, download_name=filename, mimetype="application/json")


@app.route("/api/admin/export/csv", methods=["GET"])
def admin_export_csv():
    pin = request.args.get("pin", "")
    if not is_valid_pin(pin):
        return jsonify({"ok": False, "error": "PIN inválido"}), 401

    date_from = request.args.get("date_from", "")
    date_to = request.args.get("date_to", "")
    rows = filter_rows_by_date(fetch_all_responses(), date_from, date_to)

    output = io.StringIO()
    writer = csv.writer(output)
    headers = [
        "id",
        "created_at",
        "origin_type",
        "province",
        "country",
        "age",
        "first_time",
        "motives",
        "motive_other_text",
        "places",
        "places_other_text",
        "satisfaction",
        "improvement_comment",
        "kiosk_id",
    ]
    writer.writerow(headers)

    for row in rows:
        writer.writerow(
            [
                row["id"],
                row["created_at"],
                row["origin_type"],
                row["province"],
                row["country"],
                row["age"],
                bool(row["first_time"]),
                row["motives"],
                row["motive_other_text"],
                row["places"],
                row["places_other_text"],
                row["satisfaction"],
                row["improvement_comment"],
                row["kiosk_id"],
            ]
        )

    csv_content = output.getvalue()
    filename = f"responses_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
    return Response(
        csv_content,
        mimetype="text/csv",
        headers={"Content-Disposition": f"attachment; filename={filename}"},
    )


@app.route("/api/admin/clear", methods=["POST"])
def admin_clear():
    payload = request.get_json(silent=True) or {}
    pin = payload.get("pin", "")
    confirm = payload.get("confirm", False)

    if not is_valid_pin(pin):
        return jsonify({"ok": False, "error": "PIN inválido"}), 401
    if confirm is not True:
        return jsonify({"ok": False, "error": "Confirmación requerida"}), 400

    with get_db_connection() as conn:
        conn.execute("DELETE FROM responses")
        conn.commit()

    return jsonify({"ok": True})


if __name__ == "__main__":
    init_db()
    app.run(host="0.0.0.0", port=5000, debug=False)
