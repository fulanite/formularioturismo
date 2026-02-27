# Tótem Turístico Offline - Fray Mamerto Esquiú

Aplicación tipo kiosco (pantalla táctil) para registrar visitantes de forma local, sin internet.

## Características
- Flujo guiado en 8 pantallas (bienvenida, procedencia, edad, primera vez, motivos, lugares, satisfacción, gracias).
- Modo offline total (sin APIs externas, sin CDN).
- Selección de provincia con mapa SVG local de Argentina.
- Persistencia local en SQLite (`data/tourism_kiosk.db`).
- Panel admin protegido por PIN:
  - Exportar CSV.
  - Exportar JSON.
  - Ver métricas rápidas.
  - Borrar datos con doble confirmación.
- Auto-retorno a inicio tras finalizar (10 segundos por defecto).

## Estructura
- `app.py`: backend Flask + API + SQLite.
- `templates/index.html`: interfaz kiosco.
- `static/css/styles.css`: estilos táctiles de alto contraste.
- `static/js/app.js`: lógica del flujo y admin.
- `static/maps/argentina.svg`: mapa local clickeable por provincia.
- `static/data/countries.json`: listado local de países.
- `config.json`: configuración local (`admin_pin`, `kiosk_id`, etc.).
- `data/`: base de datos SQLite (se crea automáticamente).

## Requisitos
- Python 3.10+ (recomendado)

## Instalación y ejecución
1. Crear entorno virtual:
   ```bash
   python -m venv venv
   ```
2. Activar entorno:
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - Windows (PowerShell):
     ```powershell
     .\venv\Scripts\Activate.ps1
     ```
3. Instalar dependencias:
   ```bash
   pip install -r requirements.txt
   ```
4. Iniciar servidor:
   ```bash
   python app.py
   ```
5. Abrir en navegador:
   - `http://localhost:5000`

## Configuración
Editar `config.json`:
```json
{
  "admin_pin": "1234",
  "kiosk_id": "FME-001",
  "age_min": 0,
  "age_max": 110,
  "countdown_seconds": 10
}
```

## Uso del panel admin
- En pantalla inicial, tocar el título 5 veces seguidas o usar el botón `Admin` en la esquina superior derecha.
- Ingresar PIN de `config.json`.
- Acciones disponibles:
  - `Exportar CSV`
  - `Exportar JSON`
  - `Ver métricas rápidas`
  - `Borrar datos`

## Modo kiosco (Chrome)
Ejemplo en macOS:
```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --kiosk --app=http://localhost:5000 --incognito --disable-pinch
```

## Verificación manual (criterios)
1. Completar una respuesta sin internet.
2. Seleccionar provincia desde el mapa y confirmar resaltado.
3. Verificar que edad vacía no permite continuar.
4. Finalizar y comprobar guardado en SQLite + retorno en 10 segundos.
5. Entrar a admin y exportar CSV.
6. Revisar métricas rápidas en admin.
7. Confirmar que no hay recursos remotos (todo servido localmente).
