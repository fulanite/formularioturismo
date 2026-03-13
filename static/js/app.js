const config = window.APP_CONFIG || {};

const MOTIVES = [
  { value: "Turismo religioso (Beato Mamerto Esquiú)", es: "Turismo religioso (Beato Mamerto Esquiú)", en: "Religious tourism (Blessed Mamerto Esquiú)" },
  { value: "Naturaleza / paisaje", es: "Naturaleza / paisaje", en: "Nature / landscape" },
  { value: "Evento o fiesta", es: "Evento o fiesta", en: "Event or festival" },
  { value: "Visita a familiares / amigos", es: "Visita a familiares / amigos", en: "Visiting family / friends" },
  { value: "Paseo de cercanía", es: "Paseo de cercanía", en: "Local getaway" },
  { value: "Actividad deportiva", es: "Actividad deportiva", en: "Sport activity" },
  { value: "Otro", es: "Otro", en: "Other" },
];

const PLACES = [
  { value: "Santuario/ iglesia", es: "Santuario/ iglesia", en: "Santuario/ iglesia" },
  { value: "Ntra. Sra del Valle. Pirquitas", es: "Ntra. Sra del Valle. Pirquitas", en: "Ntra. Sra del Valle. Pirquitas" },
  { value: "Templo de San José", es: "Templo de San José", en: "Templo de San José" },
  { value: "Nuestra Sra del Rosario. Campanas del rosario", es: "Nuestra Sra del Rosario. Campanas del rosario", en: "Nuestra Sra del Rosario. Campanas del rosario" },
  { value: "Iglesia de San Antonio de Padua", es: "Iglesia de San Antonio de Padua", en: "Iglesia de San Antonio de Padua" },
  { value: "Feria /evento", es: "Feria /evento", en: "Feria /evento" },
  { value: "Festival del tamal", es: "Festival del tamal", en: "Festival del tamal" },
  { value: "Veranos culturales", es: "Veranos culturales", en: "Veranos culturales" },
  { value: "Cumpleaños del departamento", es: "Cumpleaños del departamento", en: "Cumpleaños del departamento" },
  { value: "carnaval", es: "carnaval", en: "carnaval" },
  { value: "ferias en Parque chacarero", es: "ferias en Parque chacarero", en: "ferias en Parque chacarero" },
  { value: "ferias en Las Moras", es: "ferias en Las Moras", en: "ferias en Las Moras" },
  { value: "Ferias en Piedra blanca", es: "Ferias en Piedra blanca", en: "Ferias en Piedra blanca" },
  { value: "La tercena", es: "La tercena", en: "La tercena" },
  { value: "Santuario Sr de Los Milagros", es: "Santuario Sr de Los Milagros", en: "Santuario Sr de Los Milagros" },
  { value: "San José (Piedra Blanca)", es: "San José (Piedra Blanca)", en: "San José (Piedra Blanca)" },
  { value: "Casa Natal del Beato Esquiú", es: "Casa Natal del Beato Esquiú", en: "Casa Natal del Beato Esquiú" },
  { value: "Trapiche azucarero", es: "Trapiche azucarero", en: "Trapiche azucarero" },
  { value: "Tienda de artesanías del trapiche", es: "Tienda de artesanías del trapiche", en: "Tienda de artesanías del trapiche" },
  { value: "Sitio Histórico de Campanas del Rosario", es: "Sitio Histórico de Campanas del Rosario", en: "Sitio Histórico de Campanas del Rosario" },
  { value: "Pirquitas", es: "Pirquitas", en: "Pirquitas" },
  { value: "Hostería municipal", es: "Hostería municipal", en: "Hostería municipal" },
  { value: "Camping municipal", es: "Camping municipal", en: "Camping municipal" },
  { value: "Dique", es: "Dique", en: "Dique" },
  { value: "Murallón", es: "Murallón", en: "Murallón" },
  { value: "Complejo cultural Las moras", es: "Complejo cultural Las moras", en: "Complejo cultural Las moras" },
  { value: "Sala de exposición de Malvinas", es: "Sala de exposición de Malvinas", en: "Sala de exposición de Malvinas" },
  { value: "Circuito rural", es: "Circuito rural", en: "Circuito rural" },
  { value: "El Gracián", es: "El Gracián", en: "El Gracián" },
  { value: "Casa de piedra", es: "Casa de piedra", en: "Casa de piedra" },
  { value: "Cara de piedra", es: "Cara de piedra", en: "Cara de piedra" },
  { value: "Trekking por los canales", es: "Trekking por los canales", en: "Trekking por los canales" },
  { value: "Bicisenda", es: "Bicisenda", en: "Bicisenda" },
  { value: "Camino Real", es: "Camino Real", en: "Camino Real" },
  { value: "Club de campo municipal", es: "Club de campo municipal", en: "Club de campo municipal" },
  { value: "Polideportivo Evita", es: "Polideportivo Evita", en: "Polideportivo Evita" },
  { value: "Polideportivo Maradona", es: "Polideportivo Maradona", en: "Polideportivo Maradona" },
  { value: "Otro", es: "Otro", en: "Other" },
];

const SATISFACTION = [
  { value: 1, es: "1 Muy mala", en: "1 Very bad", emoji: "😟" },
  { value: 2, es: "2 Mala", en: "2 Bad", emoji: "🙁" },
  { value: 3, es: "3 Regular", en: "3 Fair", emoji: "😐" },
  { value: 4, es: "4 Buena", en: "4 Good", emoji: "🙂" },
  { value: 5, es: "5 Excelente", en: "5 Excellent", emoji: "😄" },
];

const QUICK_COUNTRIES = ["Chile", "Brasil", "Uruguay", "Bolivia", "Paraguay", "Perú", "España", "Estados Unidos"];
const ARG_PROVINCES = [
  "Buenos Aires", "CABA", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy",
  "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz",
  "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán",
];

const I18N = {
  es: {
    welcomeTitle: "¡Bienvenido/a a Fray Mamerto Esquiú!",
    welcomeSubtitle: "Nos ayuda si respondés esta encuesta. Tarda 1 minuto.",
    start: "Comenzar",
    s1: "¿De dónde nos visitás?",
    ar: "Argentina",
    int: "Otro país",
    provinceTitle: "Seleccioná tu provincia",
    resetMap: "Ver mapa completo",
    provinceLabel: "Provincia:",
    noneProvince: "Ninguna",
    countryTitle: "Seleccioná tu país",
    countryLabel: "País:",
    noneCountry: "Ninguno",
    countrySearch: "Buscar país...",
    continue: "Continuar",
    s2: "¿Qué edad tenés?",
    s3: "¿Es tu primera vez en Fray?",
    yes: "Sí",
    no: "No",
    s4: "¿Qué te motivó a visitarnos?",
    motiveOther: "Especificá otro motivo (opcional)",
    s5: "¿Qué lugares visitaste o pensás visitar?",
    placeOther: "Especificá otro lugar (opcional)",
    s6: "¿Cómo calificarías tu experiencia?",
    improve: "¿Qué mejorarías? (opcional, máx. 120 caracteres)",
    finish: "Finalizar",
    space: "Espacio",
    done: "Listo",
    thanks: "¡Gracias por tu visita!",
    countdown: "Volviendo al inicio en {n}...",
    newResponse: "Nueva respuesta",
    adminTitle: "Panel Admin",
    adminPinLabel: "Ingresá PIN",
    adminEnter: "Entrar",
    adminClose: "Cerrar",
    metricsTitle: "Métricas rápidas",
    fromDate: "Desde",
    toDate: "Hasta",
    applyFilter: "Aplicar filtro",
    clearFilter: "Limpiar",
    thDate: "Fecha",
    thOrigin: "Procedencia",
    thAge: "Edad",
    thFirst: "Primera vez",
    thSat: "Satisfacción",
    yesShort: "Sí",
    noShort: "No",
    noRows: "Sin respuestas para el rango seleccionado",
    exportCsv: "Exportar CSV",
    exportJson: "Exportar JSON",
    clearData: "Borrar datos",
    logout: "Salir",
    adminBtn: "Admin",
    alertSelectOrigin: "Seleccioná si venís de Argentina u otro país.",
    alertSelectProvince: "Seleccioná una provincia en el mapa o en la lista.",
    alertSelectCountry: "Seleccioná un país.",
    alertAgeRequired: "La edad es obligatoria.",
    alertAgeRange: "La edad debe estar entre {min} y {max}.",
    alertFirstTime: "Seleccioná si es tu primera vez.",
    alertSatisfaction: "Seleccioná un nivel de satisfacción.",
    saveError: "No se pudo guardar la respuesta.",
    mapUnavailable: "Mapa no disponible. Usá los botones de provincias.",
    mapUnavailableOpen: "Mapa no disponible en este navegador. Seleccioná provincia con los botones de abajo.",
    pinRequired: "Ingresá el PIN.",
    metricsError: "No se pudieron cargar métricas",
    confirmClear1: "¿Seguro que querés borrar todos los datos?",
    confirmClear2: "Esta acción es irreversible. ¿Confirmás borrar?",
    clearError: "No se pudo borrar la base.",
    clearOk: "Datos borrados correctamente.",
    mTotal: "Total de respuestas:",
    mToday: "Respuestas hoy:",
    mTopProv: "Top 5 provincias:",
    mTopMot: "Top 5 motivos:",
    mAvgSat: "Promedio de satisfacción:",
    mAge: "Rangos de edad:",
    noData: "Sin datos",
    vizSat: "Satisfacción",
    vizProv: "Top provincias",
    vizMot: "Top motivos",
    vizAge: "Edades",
    sat1: "1 Muy mala",
    sat2: "2 Mala",
    sat3: "3 Regular",
    sat4: "4 Buena",
    sat5: "5 Excelente",
  },
  en: {
    welcomeTitle: "Welcome to Fray Mamerto Esquiú!",
    welcomeSubtitle: "Please help us by answering this survey. It takes 1 minute.",
    start: "Start",
    s1: "Where are you visiting us from?",
    ar: "Argentina",
    int: "Another country",
    provinceTitle: "Select your province",
    resetMap: "View full map",
    provinceLabel: "Province:",
    noneProvince: "None",
    countryTitle: "Select your country",
    countryLabel: "Country:",
    noneCountry: "None",
    countrySearch: "Search country...",
    continue: "Continue",
    s2: "How old are you?",
    s3: "Is this your first time in Fray?",
    yes: "Yes",
    no: "No",
    s4: "What motivated your visit?",
    motiveOther: "Specify another reason (optional)",
    s5: "Which places did you visit or plan to visit?",
    placeOther: "Specify another place (optional)",
    s6: "How would you rate your experience?",
    improve: "What would you improve? (optional, max 120 characters)",
    finish: "Finish",
    space: "Space",
    done: "Done",
    thanks: "Thank you for your visit!",
    countdown: "Returning to start in {n}...",
    newResponse: "New response",
    adminTitle: "Admin Panel",
    adminPinLabel: "Enter PIN",
    adminEnter: "Enter",
    adminClose: "Close",
    metricsTitle: "Quick metrics",
    fromDate: "From",
    toDate: "To",
    applyFilter: "Apply filter",
    clearFilter: "Clear",
    thDate: "Date",
    thOrigin: "Origin",
    thAge: "Age",
    thFirst: "First time",
    thSat: "Satisfaction",
    yesShort: "Yes",
    noShort: "No",
    noRows: "No responses for selected range",
    exportCsv: "Export CSV",
    exportJson: "Export JSON",
    clearData: "Delete data",
    logout: "Logout",
    adminBtn: "Admin",
    alertSelectOrigin: "Select Argentina or another country.",
    alertSelectProvince: "Select a province on the map or list.",
    alertSelectCountry: "Select a country.",
    alertAgeRequired: "Age is required.",
    alertAgeRange: "Age must be between {min} and {max}.",
    alertFirstTime: "Select whether this is your first visit.",
    alertSatisfaction: "Select a satisfaction level.",
    saveError: "Could not save the response.",
    mapUnavailable: "Map unavailable. Use province buttons.",
    mapUnavailableOpen: "Map unavailable in this browser. Select province with the buttons below.",
    pinRequired: "Enter PIN.",
    metricsError: "Could not load metrics",
    confirmClear1: "Are you sure you want to delete all data?",
    confirmClear2: "This action cannot be undone. Confirm delete?",
    clearError: "Could not clear the database.",
    clearOk: "Data deleted successfully.",
    mTotal: "Total responses:",
    mToday: "Responses today:",
    mTopProv: "Top 5 provinces:",
    mTopMot: "Top 5 motives:",
    mAvgSat: "Average satisfaction:",
    mAge: "Age ranges:",
    noData: "No data",
    vizSat: "Satisfaction",
    vizProv: "Top provinces",
    vizMot: "Top motives",
    vizAge: "Ages",
    sat1: "1 Very bad",
    sat2: "2 Bad",
    sat3: "3 Fair",
    sat4: "4 Good",
    sat5: "5 Excellent",
  },
};

const state = {
  currentScreen: 0,
  origin_type: null,
  province: null,
  country: null,
  age: null,
  first_time: null,
  motives: [],
  motive_other_text: "",
  places: [],
  places_other_text: "",
  satisfaction: null,
  improvement_comment: "",
};

let currentLang = "es";
let countries = [];
let ageDraft = "";
let mapReady = false;
let mapSvg = null;
let mapBaseViewBox = "";
let mapPathIndex = new Map();
let countdownTimer = null;
let adminPin = "";
let adminLastMetrics = null;
let adminLastRows = [];
let titleTapCount = 0;
let titleTapTimeout = null;
let keyboardTarget = null;

const screens = [...document.querySelectorAll(".screen")];
const startBtn = document.getElementById("startBtn");
const originArBtn = document.getElementById("originArBtn");
const originIntBtn = document.getElementById("originIntBtn");
const originButtons = [...document.querySelectorAll("[data-origin]")];
const toScreen2 = document.getElementById("toScreen2");
const toScreen3 = document.getElementById("toScreen3");
const toScreen4 = document.getElementById("toScreen4");
const toScreen5 = document.getElementById("toScreen5");
const toScreen6 = document.getElementById("toScreen6");
const finishBtn = document.getElementById("finishBtn");
const newResponseBtn = document.getElementById("newResponseBtn");
const argentinaSelector = document.getElementById("argentinaSelector");
const countrySelector = document.getElementById("countrySelector");
const selectedProvince = document.getElementById("selectedProvince");
const mapStatus = document.getElementById("mapStatus");
const resetMapBtn = document.getElementById("resetMapBtn");
const provinceList = document.getElementById("provinceList");
const selectedCountry = document.getElementById("selectedCountry");
const countrySearch = document.getElementById("countrySearch");
const countryList = document.getElementById("countryList");
const countryQuickPicks = document.getElementById("countryQuickPicks");
const ageInput = document.getElementById("ageInput");
const ageKeypad = document.getElementById("ageKeypad");
const ageMinus = document.getElementById("ageMinus");
const agePlus = document.getElementById("agePlus");
const firstTimeYesBtn = document.getElementById("firstTimeYesBtn");
const firstTimeNoBtn = document.getElementById("firstTimeNoBtn");
const firstTimeButtons = [...document.querySelectorAll("[data-first-time]")];
const motivesGrid = document.getElementById("motivesGrid");
const placesGrid = document.getElementById("placesGrid");
const motiveOtherText = document.getElementById("motiveOtherText");
const placeOtherText = document.getElementById("placeOtherText");
const satisfactionRow = document.getElementById("satisfactionRow");
const improvementComment = document.getElementById("improvementComment");
const textKeyboard = document.getElementById("textKeyboard");
const textKeyboardKeys = document.getElementById("textKeyboardKeys");
const textSpaceBtn = document.getElementById("textSpaceBtn");
const textBackspaceBtn = document.getElementById("textBackspaceBtn");
const textDoneBtn = document.getElementById("textDoneBtn");
const countdownText = document.getElementById("countdownText");
const langEsBtn = document.getElementById("langEsBtn");
const langEnBtn = document.getElementById("langEnBtn");

const adminModal = document.getElementById("adminModal");
const adminPinInput = document.getElementById("adminPinInput");
const adminPinKeyboard = document.getElementById("adminPinKeyboard");
const adminUnlockBtn = document.getElementById("adminUnlockBtn");
const adminCloseBtn = document.getElementById("adminCloseBtn");
const adminPinError = document.getElementById("adminPinError");
const adminPanel = document.getElementById("adminPanel");
const pinStep = document.getElementById("pinStep");
const filterFromDate = document.getElementById("filterFromDate");
const filterToDate = document.getElementById("filterToDate");
const applyFilterBtn = document.getElementById("applyFilterBtn");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const visualDashboard = document.getElementById("visualDashboard");
const metricsBox = document.getElementById("metricsBox");
const dashboardRows = document.getElementById("dashboardRows");
const exportCsvBtn = document.getElementById("exportCsvBtn");
const exportJsonBtn = document.getElementById("exportJsonBtn");
const clearDataBtn = document.getElementById("clearDataBtn");
const adminLogoutBtn = document.getElementById("adminLogoutBtn");
const adminActionMsg = document.getElementById("adminActionMsg");
const welcomeTapTarget = document.getElementById("welcomeTapTarget");
const adminCornerBtn = document.getElementById("adminCornerBtn");

function t(key) {
  return I18N[currentLang][key] || I18N.es[key] || key;
}

function showScreen(number) {
  screens.forEach((screen) => {
    const isActive = Number(screen.dataset.screen) === number;
    screen.classList.toggle("active", isActive);
  });
  state.currentScreen = number;
  closeTextKeyboard();
}

function setSelectedProvince(province) {
  state.province = province || null;
  selectedProvince.textContent = state.province || t("noneProvince");
  provinceList.querySelectorAll("button").forEach((btn) => {
    btn.classList.toggle("selected", btn.dataset.value === state.province);
  });
}

function provinceNameFromPath(path) {
  return path?.dataset?.name || path?.getAttribute("name") || path?.id || "";
}

function normalizeName(name) {
  return (name || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function provinceDisplayName(rawName) {
  const norm = normalizeName(rawName);
  if (norm === "ciudad de buenos aires") return "CABA";
  return rawName;
}

function mapLookupName(province) {
  if (province === "CABA") return "Ciudad de Buenos Aires";
  return province;
}

function resetMapView() {
  if (!mapSvg || !mapBaseViewBox) return;
  mapSvg.setAttribute("viewBox", mapBaseViewBox);
}

function zoomToPath(path) {
  if (!mapSvg || !path) return;
  const bbox = path.getBBox();
  const pad = 22;
  const vb = mapBaseViewBox.split(" ").map(Number);
  const [baseX, baseY, baseW, baseH] = vb.length === 4 ? vb : [0, 0, 1000, 1000];

  const x = Math.max(baseX, bbox.x - pad);
  const y = Math.max(baseY, bbox.y - pad);
  const maxW = baseX + baseW - x;
  const maxH = baseY + baseH - y;
  const w = Math.min(maxW, bbox.width + pad * 2);
  const h = Math.min(maxH, bbox.height + pad * 2);
  mapSvg.setAttribute("viewBox", `${x} ${y} ${Math.max(w, 1)} ${Math.max(h, 1)}`);
}

function focusProvinceOnMap(province) {
  if (!mapSvg) return;
  const key = normalizeName(mapLookupName(province));
  const path = mapPathIndex.get(key);
  if (!path) return;
  mapSvg.querySelectorAll("path").forEach((p) => p.classList.remove("selected"));
  path.classList.add("selected");
  zoomToPath(path);
}

function setSelectedCountry(country) {
  state.country = country || null;
  selectedCountry.textContent = state.country || t("noneCountry");
}

function syncAgeInput() {
  ageInput.value = ageDraft;
}

function resetState() {
  state.origin_type = null;
  setSelectedProvince(null);
  setSelectedCountry(null);
  state.age = null;
  state.first_time = null;
  state.motives = [];
  state.motive_other_text = "";
  state.places = [];
  state.places_other_text = "";
  state.satisfaction = null;
  state.improvement_comment = "";

  clearInterval(countdownTimer);
  countdownTimer = null;

  argentinaSelector.classList.add("hidden");
  countrySelector.classList.add("hidden");

  originButtons.forEach((btn) => btn.classList.remove("selected"));
  firstTimeButtons.forEach((btn) => btn.classList.remove("selected"));
  motivesGrid.querySelectorAll("button").forEach((btn) => btn.classList.remove("selected"));
  placesGrid.querySelectorAll("button").forEach((btn) => btn.classList.remove("selected"));
  satisfactionRow.querySelectorAll("button").forEach((btn) => btn.classList.remove("selected"));

  motiveOtherText.value = "";
  placeOtherText.value = "";
  improvementComment.value = "";
  motiveOtherText.classList.add("hidden");
  placeOtherText.classList.add("hidden");

  ageDraft = "";
  syncAgeInput();
  countrySearch.value = "";
  renderCountryList(countries);

  const map = document.getElementById("argentina-map");
  if (map) map.querySelectorAll("path").forEach((p) => p.classList.remove("selected"));
  resetMapView();

  showScreen(0);
}

function openTextKeyboard(field) {
  keyboardTarget = field;
  textKeyboard.classList.remove("hidden");
}

function closeTextKeyboard() {
  textKeyboard.classList.add("hidden");
  if (keyboardTarget) keyboardTarget.blur();
  keyboardTarget = null;
}

function insertTextKey(char) {
  if (!keyboardTarget) return;
  const maxLen = Number(keyboardTarget.getAttribute("maxlength") || 120);
  if (keyboardTarget.value.length >= maxLen) return;
  keyboardTarget.value += char;
  keyboardTarget.dispatchEvent(new Event("input", { bubbles: true }));
}

function backspaceTextKey() {
  if (!keyboardTarget) return;
  keyboardTarget.value = keyboardTarget.value.slice(0, -1);
  keyboardTarget.dispatchEvent(new Event("input", { bubbles: true }));
}

function renderTextKeyboard() {
  if (textKeyboardKeys.childElementCount > 0) return;
  const rows = ["QWERTYUIOP", "ASDFGHJKLÑ", "ZXCVBNM"];
  rows.join("").split("").forEach((char) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn text-key";
    btn.textContent = char;
    btn.addEventListener("click", () => insertTextKey(char));
    textKeyboardKeys.appendChild(btn);
  });
}

function renderToggleGroup(container, items, selectedValues, clickHandler) {
  container.innerHTML = "";
  items.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn toggle-btn";
    btn.dataset.value = item.value;
    btn.textContent = item[currentLang];
    if (selectedValues.includes(item.value)) btn.classList.add("selected");
    btn.addEventListener("click", () => clickHandler(item.value));
    container.appendChild(btn);
  });
}

function renderMotives() {
  renderToggleGroup(motivesGrid, MOTIVES, state.motives, (value) => {
    if (state.motives.includes(value)) state.motives = state.motives.filter((m) => m !== value);
    else state.motives.push(value);
    renderMotives();
    if (value === "Otro") motiveOtherText.classList.toggle("hidden", !state.motives.includes("Otro"));
  });
}

function renderPlaces() {
  renderToggleGroup(placesGrid, PLACES, state.places, (value) => {
    if (state.places.includes(value)) state.places = state.places.filter((p) => p !== value);
    else state.places.push(value);
    renderPlaces();
    if (value === "Otro") placeOtherText.classList.toggle("hidden", !state.places.includes("Otro"));
  });
}

function renderSatisfaction() {
  satisfactionRow.innerHTML = "";
  SATISFACTION.forEach((entry) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn sat-btn";
    btn.dataset.value = String(entry.value);
    btn.innerHTML = `<div style="font-size:34px">${entry.emoji}</div><div>${entry[currentLang]}</div>`;
    if (state.satisfaction === entry.value) btn.classList.add("selected");
    btn.addEventListener("click", () => {
      state.satisfaction = entry.value;
      renderSatisfaction();
    });
    satisfactionRow.appendChild(btn);
  });
}

function renderProvinceList() {
  provinceList.innerHTML = "";
  ARG_PROVINCES.forEach((province) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn province-item";
    btn.dataset.value = province;
    btn.textContent = province;
    if (state.province === province) btn.classList.add("selected");
    btn.addEventListener("click", () => {
      setSelectedProvince(province);
      focusProvinceOnMap(province);
    });
    provinceList.appendChild(btn);
  });
}

function renderCountryQuickPicks() {
  countryQuickPicks.innerHTML = "";
  QUICK_COUNTRIES.filter((c) => countries.includes(c)).forEach((country) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn chip-btn";
    btn.textContent = country;
    btn.addEventListener("click", () => {
      setSelectedCountry(country);
      renderCountryList(countries);
    });
    countryQuickPicks.appendChild(btn);
  });
}

function renderCountryList(list) {
  countryList.innerHTML = "";
  list.forEach((country) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn country-item";
    if (state.country === country) btn.classList.add("selected");
    btn.textContent = country;
    btn.addEventListener("click", () => {
      setSelectedCountry(country);
      renderCountryList(list);
    });
    countryList.appendChild(btn);
  });
}

function renderAgeKeypad() {
  if (ageKeypad.childElementCount > 0) return;
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"];
  keys.forEach((key) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn key-btn";
    btn.textContent = key;
    btn.addEventListener("click", () => {
      if (key === "C") ageDraft = "";
      else if (key === "⌫") ageDraft = ageDraft.slice(0, -1);
      else if (ageDraft.length < 3) ageDraft += key;
      syncAgeInput();
    });
    ageKeypad.appendChild(btn);
  });
}

function renderAdminPinKeyboard() {
  if (adminPinKeyboard.childElementCount > 0) return;
  const keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"];
  keys.forEach((key) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "btn pin-key";
    btn.textContent = key;
    btn.addEventListener("click", () => {
      const current = adminPinInput.value;
      if (key === "C") adminPinInput.value = "";
      else if (key === "⌫") adminPinInput.value = current.slice(0, -1);
      else if (current.length < Number(adminPinInput.maxLength || 12)) adminPinInput.value += key;
    });
    adminPinKeyboard.appendChild(btn);
  });
}

function getAdminFilterQuery() {
  const params = new URLSearchParams();
  params.set("pin", adminPin);
  if (filterFromDate.value) params.set("date_from", filterFromDate.value);
  if (filterToDate.value) params.set("date_to", filterToDate.value);
  return params.toString();
}

function formatOrigin(row) {
  if (row.origin_type === "AR") return row.province || "AR";
  return row.country || "INT";
}

function renderDashboardRows(rows) {
  adminLastRows = rows || [];
  dashboardRows.innerHTML = "";
  if (!rows || !rows.length) {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.colSpan = 5;
    td.textContent = t("noRows");
    tr.appendChild(td);
    dashboardRows.appendChild(tr);
    return;
  }

  adminLastRows.forEach((row) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.created_at || ""}</td>
      <td>${formatOrigin(row)}</td>
      <td>${row.age ?? ""}</td>
      <td>${row.first_time ? t("yesShort") : t("noShort")}</td>
      <td>${row.satisfaction ?? ""}</td>
    `;
    dashboardRows.appendChild(tr);
  });
}

function buildVizRows(items) {
  if (!items.length) return `<div class="viz-row">${t("noData")}</div>`;
  const maxCount = Math.max(...items.map((x) => Number(x.count || 0)), 1);
  return items
    .map((item) => {
      const pct = Math.round((Number(item.count || 0) / maxCount) * 100);
      return `
        <div class="viz-row">
          <span>${item.label}</span>
          <strong>${item.count}</strong>
          <div class="viz-bar-track"><div class="viz-bar-fill" style="width:${pct}%"></div></div>
        </div>
      `;
    })
    .join("");
}

function renderVisualDashboard(metrics) {
  if (!metrics) {
    visualDashboard.innerHTML = "";
    return;
  }
  const satDist = metrics.satisfaction_distribution || { "1": 0, "2": 0, "3": 0, "4": 0, "5": 0 };
  const satItems = ["1", "2", "3", "4", "5"].map((key) => ({ label: t(`sat${key}`), count: Number(satDist[key] || 0) }));
  const provItems = (metrics.top_provinces || []).map((x) => ({ label: x.name, count: x.count }));
  const motiveItems = (metrics.top_motives || []).map((x) => ({ label: x.name, count: x.count }));
  const ageItems = Object.entries(metrics.age_distribution || {}).map(([label, count]) => ({ label, count }));

  visualDashboard.innerHTML = `
    <div class="viz-card"><h4>${t("vizSat")}</h4>${buildVizRows(satItems)}</div>
    <div class="viz-card"><h4>${t("vizProv")}</h4>${buildVizRows(provItems)}</div>
    <div class="viz-card"><h4>${t("vizMot")}</h4>${buildVizRows(motiveItems)}</div>
    <div class="viz-card"><h4>${t("vizAge")}</h4>${buildVizRows(ageItems)}</div>
  `;
}

function applyLanguage() {
  document.documentElement.lang = currentLang;
  document.getElementById("welcomeTapTarget").textContent = t("welcomeTitle");
  document.getElementById("welcomeSubtitle").textContent = t("welcomeSubtitle");
  startBtn.textContent = t("start");
  document.getElementById("screen1Title").textContent = t("s1");
  originArBtn.textContent = t("ar");
  originIntBtn.textContent = t("int");
  document.getElementById("provinceTitle").textContent = t("provinceTitle");
  resetMapBtn.textContent = t("resetMap");
  document.getElementById("provinceLabel").textContent = t("provinceLabel");
  document.getElementById("countryTitle").textContent = t("countryTitle");
  document.getElementById("countryLabel").textContent = t("countryLabel");
  countrySearch.placeholder = t("countrySearch");
  document.getElementById("screen2Title").textContent = t("s2");
  document.getElementById("screen3Title").textContent = t("s3");
  firstTimeYesBtn.textContent = t("yes");
  firstTimeNoBtn.textContent = t("no");
  document.getElementById("screen4Title").textContent = t("s4");
  motiveOtherText.placeholder = t("motiveOther");
  document.getElementById("screen5Title").textContent = t("s5");
  placeOtherText.placeholder = t("placeOther");
  document.getElementById("screen6Title").textContent = t("s6");
  improvementComment.placeholder = t("improve");
  finishBtn.textContent = t("finish");
  textSpaceBtn.textContent = t("space");
  textDoneBtn.textContent = t("done");
  document.getElementById("thanksTitle").textContent = t("thanks");
  newResponseBtn.textContent = t("newResponse");
  document.getElementById("adminTitle").textContent = t("adminTitle");
  document.getElementById("adminPinLabel").textContent = t("adminPinLabel");
  adminUnlockBtn.textContent = t("adminEnter");
  adminCloseBtn.textContent = t("adminClose");
  document.getElementById("metricsTitle").textContent = t("metricsTitle");
  document.getElementById("fromDateLabel").textContent = t("fromDate");
  document.getElementById("toDateLabel").textContent = t("toDate");
  document.getElementById("thDate").textContent = t("thDate");
  document.getElementById("thOrigin").textContent = t("thOrigin");
  document.getElementById("thAge").textContent = t("thAge");
  document.getElementById("thFirst").textContent = t("thFirst");
  document.getElementById("thSat").textContent = t("thSat");
  applyFilterBtn.textContent = t("applyFilter");
  clearFilterBtn.textContent = t("clearFilter");
  exportCsvBtn.textContent = t("exportCsv");
  exportJsonBtn.textContent = t("exportJson");
  clearDataBtn.textContent = t("clearData");
  adminLogoutBtn.textContent = t("logout");
  adminCornerBtn.textContent = t("adminBtn");

  toScreen2.textContent = t("continue");
  toScreen3.textContent = t("continue");
  toScreen4.textContent = t("continue");
  toScreen5.textContent = t("continue");
  toScreen6.textContent = t("continue");

  if (!state.province) selectedProvince.textContent = t("noneProvince");
  if (!state.country) selectedCountry.textContent = t("noneCountry");
  if (state.currentScreen === 7) {
    const seconds = Number(countdownText.dataset.seconds || config.countdown_seconds || 10);
    countdownText.textContent = t("countdown").replace("{n}", String(seconds));
  }

  if (!mapReady && state.origin_type === "AR") {
    mapStatus.textContent = t("mapUnavailableOpen");
    mapStatus.classList.remove("hidden");
  }

  renderMotives();
  renderPlaces();
  renderSatisfaction();
  if (!adminPanel.classList.contains("hidden")) renderDashboardRows(adminLastRows);
  if (!adminPanel.classList.contains("hidden")) renderVisualDashboard(adminLastMetrics);
}

async function loadCountries() {
  const response = await fetch("/static/data/countries.json");
  countries = await response.json();
  renderCountryQuickPicks();
  renderCountryList(countries);
}

async function loadArgentinaMap() {
  const container = document.getElementById("argentinaMapContainer");
  const response = await fetch("/static/maps/argentina.svg");
  if (!response.ok) throw new Error("No map");
  const svgText = await response.text();
  container.innerHTML = svgText;

  const map = container.querySelector("svg");
  const paths = map ? map.querySelectorAll("path") : [];
  if (!map || !paths.length) throw new Error("Invalid map");
  if (!map.id) map.id = "argentina-map";
  mapSvg = map;
  mapBaseViewBox = map.getAttribute("viewBox") || "0 0 1000 1000";
  if (!map.getAttribute("viewBox")) map.setAttribute("viewBox", mapBaseViewBox);

  const points = map.querySelector("#points");
  const labels = map.querySelector("#label_points");
  if (points) points.remove();
  if (labels) labels.remove();

  mapReady = true;
  mapPathIndex = new Map();
  mapStatus.textContent = "";
  mapStatus.classList.add("hidden");

  paths.forEach((path) => {
    const pname = provinceNameFromPath(path);
    if (pname) path.dataset.name = pname;
    mapPathIndex.set(normalizeName(pname), path);
    path.addEventListener("click", () => {
      map.querySelectorAll("path").forEach((p) => p.classList.remove("selected"));
      path.classList.add("selected");
      const selected = provinceDisplayName(provinceNameFromPath(path));
      setSelectedProvince(selected);
      zoomToPath(path);
    });
  });
}

function validateScreen1() {
  if (!state.origin_type) {
    alert(t("alertSelectOrigin"));
    return false;
  }
  if (state.origin_type === "AR" && !state.province) {
    alert(t("alertSelectProvince"));
    return false;
  }
  if (state.origin_type === "INT" && !state.country) {
    alert(t("alertSelectCountry"));
    return false;
  }
  return true;
}

function validateAge() {
  const raw = ageDraft.trim();
  if (raw === "") {
    alert(t("alertAgeRequired"));
    return false;
  }
  const value = Number(raw);
  const min = Number(config.age_min ?? 0);
  const max = Number(config.age_max ?? 110);
  if (Number.isNaN(value) || value < min || value > max) {
    alert(t("alertAgeRange").replace("{min}", String(min)).replace("{max}", String(max)));
    return false;
  }
  state.age = value;
  return true;
}

function validateFirstTime() {
  if (state.first_time === null) {
    alert(t("alertFirstTime"));
    return false;
  }
  return true;
}

function collectMulti() {
  state.motive_other_text = motiveOtherText.value.trim();
  state.places_other_text = placeOtherText.value.trim();
  state.improvement_comment = improvementComment.value.trim();
}

async function submitResponse() {
  collectMulti();
  if (!state.satisfaction) {
    alert(t("alertSatisfaction"));
    return;
  }

  const payload = {
    origin_type: state.origin_type,
    province: state.origin_type === "AR" ? state.province : null,
    country: state.origin_type === "INT" ? state.country : null,
    age: state.age,
    first_time: state.first_time,
    motives: state.motives,
    motive_other_text: state.motives.includes("Otro") ? state.motive_other_text : "",
    places: state.places,
    places_other_text: state.places.includes("Otro") ? state.places_other_text : "",
    satisfaction: state.satisfaction,
    improvement_comment: state.improvement_comment,
  };

  const response = await fetch("/api/responses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    const msg = (error.errors || [t("saveError")]).join("\n");
    alert(msg);
    return;
  }

  showThanksScreen();
}

function showThanksScreen() {
  showScreen(7);
  let seconds = Number(config.countdown_seconds ?? 10);
  countdownText.dataset.seconds = String(seconds);
  countdownText.textContent = t("countdown").replace("{n}", String(seconds));

  clearInterval(countdownTimer);
  countdownTimer = setInterval(() => {
    seconds -= 1;
    countdownText.dataset.seconds = String(seconds);
    countdownText.textContent = t("countdown").replace("{n}", String(seconds));
    if (seconds <= 0) {
      clearInterval(countdownTimer);
      resetState();
    }
  }, 1000);
}

function openAdminModal() {
  closeTextKeyboard();
  adminModal.classList.remove("hidden");
  adminModal.setAttribute("aria-hidden", "false");
  adminPinInput.value = "";
  adminPinError.textContent = "";
  adminActionMsg.textContent = "";
  filterFromDate.value = "";
  filterToDate.value = "";
  dashboardRows.innerHTML = "";
  visualDashboard.innerHTML = "";
  adminLastMetrics = null;
  adminLastRows = [];
  metricsBox.innerHTML = "";
  adminPanel.classList.add("hidden");
  pinStep.classList.remove("hidden");
  adminPin = "";
}

function closeAdminModal() {
  adminModal.classList.add("hidden");
  adminModal.setAttribute("aria-hidden", "true");
}

async function loadAdminMetrics() {
  const query = getAdminFilterQuery();
  const res = await fetch(`/api/admin/dashboard?${query}`);
  const data = await res.json();
  if (!res.ok || !data.ok) throw new Error(data.error || t("metricsError"));

  const m = data.metrics;
  adminLastMetrics = m;
  const topProvinces = (m.top_provinces || []).map((x) => `${x.name}: ${x.count}`).join(", ") || t("noData");
  const topMotives = (m.top_motives || []).map((x) => `${x.name}: ${x.count}`).join(", ") || t("noData");
  const ageText = Object.entries(m.age_distribution || {}).map(([k, v]) => `${k}: ${v}`).join(" | ");

  metricsBox.innerHTML = `
    <p><strong>${t("mTotal")}</strong> ${m.total_responses}</p>
    <p><strong>${t("mToday")}</strong> ${m.responses_today}</p>
    <p><strong>${t("mTopProv")}</strong> ${topProvinces}</p>
    <p><strong>${t("mTopMot")}</strong> ${topMotives}</p>
    <p><strong>${t("mAvgSat")}</strong> ${m.average_satisfaction}</p>
    <p><strong>${t("mAge")}</strong> ${ageText}</p>
  `;
  renderVisualDashboard(m);
  renderDashboardRows(data.rows || []);
}

async function refreshAdminDashboard() {
  try {
    await loadAdminMetrics();
    adminActionMsg.textContent = "";
  } catch (error) {
    adminActionMsg.textContent = error.message || t("metricsError");
  }
}

async function unlockAdmin() {
  const pin = adminPinInput.value.trim();
  if (!pin) {
    adminPinError.textContent = t("pinRequired");
    return;
  }

  try {
    adminPin = pin;
    await loadAdminMetrics();
    pinStep.classList.add("hidden");
    adminPanel.classList.remove("hidden");
    adminPinError.textContent = "";
  } catch (error) {
    adminPinError.textContent = error.message;
    adminPanel.classList.add("hidden");
  }
}

function downloadAdmin(path) {
  if (!adminPin) return;
  window.location.href = `${path}?${getAdminFilterQuery()}`;
}

async function clearData() {
  if (!adminPin) return;
  if (!window.confirm(t("confirmClear1"))) return;
  if (!window.confirm(t("confirmClear2"))) return;

  const response = await fetch("/api/admin/clear", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ pin: adminPin, confirm: true }),
  });
  const data = await response.json();

  if (!response.ok || !data.ok) {
    adminActionMsg.textContent = data.error || t("clearError");
    return;
  }

  adminActionMsg.textContent = t("clearOk");
  await refreshAdminDashboard();
}

function setLanguage(lang) {
  currentLang = lang;
  langEsBtn.classList.toggle("selected", lang === "es");
  langEnBtn.classList.toggle("selected", lang === "en");
  applyLanguage();
}

function bindTextFieldKeyboard(field) {
  field.addEventListener("click", () => openTextKeyboard(field));
  field.addEventListener("focus", () => openTextKeyboard(field));
}

function bootstrap() {
  renderProvinceList();
  renderCountryQuickPicks();
  renderCountryList(countries);
  renderAgeKeypad();
  renderAdminPinKeyboard();
  renderMotives();
  renderPlaces();
  renderSatisfaction();
  renderTextKeyboard();
  syncAgeInput();
  applyLanguage();

  startBtn.addEventListener("click", () => showScreen(1));

  originButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      originButtons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");

      state.origin_type = btn.dataset.origin;
      setSelectedProvince(null);
      setSelectedCountry(null);

      if (state.origin_type === "AR") {
        argentinaSelector.classList.remove("hidden");
        countrySelector.classList.add("hidden");
        resetMapView();
        if (!mapReady) {
          mapStatus.textContent = t("mapUnavailableOpen");
          mapStatus.classList.remove("hidden");
        }
      } else {
        countrySelector.classList.remove("hidden");
        argentinaSelector.classList.add("hidden");
        renderCountryList(countries);
      }
    });
  });

  countrySearch.addEventListener("input", () => {
    const needle = countrySearch.value.trim().toLowerCase();
    renderCountryList(countries.filter((country) => country.toLowerCase().includes(needle)));
  });

  resetMapBtn.addEventListener("click", resetMapView);

  toScreen2.addEventListener("click", () => {
    if (validateScreen1()) showScreen(2);
  });

  ageMinus.addEventListener("click", () => {
    const current = Number(ageDraft || 0);
    ageDraft = String(Math.max(Number(config.age_min ?? 0), current - 1));
    syncAgeInput();
  });

  agePlus.addEventListener("click", () => {
    const current = Number(ageDraft || 0);
    ageDraft = String(Math.min(Number(config.age_max ?? 110), current + 1));
    syncAgeInput();
  });

  toScreen3.addEventListener("click", () => {
    if (validateAge()) showScreen(3);
  });

  firstTimeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      firstTimeButtons.forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      state.first_time = btn.dataset.firstTime === "true";
    });
  });

  toScreen4.addEventListener("click", () => {
    if (validateFirstTime()) showScreen(4);
  });

  toScreen5.addEventListener("click", () => showScreen(5));
  toScreen6.addEventListener("click", () => showScreen(6));
  finishBtn.addEventListener("click", submitResponse);
  newResponseBtn.addEventListener("click", resetState);
  bindTextFieldKeyboard(countrySearch);
  bindTextFieldKeyboard(motiveOtherText);
  bindTextFieldKeyboard(placeOtherText);
  bindTextFieldKeyboard(improvementComment);
  textSpaceBtn.addEventListener("click", () => insertTextKey(" "));
  textBackspaceBtn.addEventListener("click", backspaceTextKey);
  textDoneBtn.addEventListener("click", closeTextKeyboard);

  langEsBtn.addEventListener("click", () => setLanguage("es"));
  langEnBtn.addEventListener("click", () => setLanguage("en"));

  welcomeTapTarget.addEventListener("click", () => {
    titleTapCount += 1;
    clearTimeout(titleTapTimeout);
    titleTapTimeout = setTimeout(() => { titleTapCount = 0; }, 1600);
    if (titleTapCount >= 5) {
      titleTapCount = 0;
      openAdminModal();
    }
  });

  adminCornerBtn.addEventListener("click", openAdminModal);
  adminUnlockBtn.addEventListener("click", unlockAdmin);
  adminCloseBtn.addEventListener("click", closeAdminModal);
  adminLogoutBtn.addEventListener("click", closeAdminModal);
  applyFilterBtn.addEventListener("click", refreshAdminDashboard);
  clearFilterBtn.addEventListener("click", async () => {
    filterFromDate.value = "";
    filterToDate.value = "";
    await refreshAdminDashboard();
  });
  exportCsvBtn.addEventListener("click", () => downloadAdmin("/api/admin/export/csv"));
  exportJsonBtn.addEventListener("click", () => downloadAdmin("/api/admin/export/json"));
  clearDataBtn.addEventListener("click", clearData);
}

Promise.allSettled([loadCountries(), loadArgentinaMap()]).then((results) => {
  const mapResult = results[1];
  if (mapResult && mapResult.status === "rejected") {
    mapReady = false;
    mapStatus.textContent = t("mapUnavailable");
    mapStatus.classList.remove("hidden");
  }
  bootstrap();
});
