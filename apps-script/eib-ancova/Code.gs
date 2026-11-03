const ANCOVA_QUESTIONS = [
  {
    "question": "¿Cuál de las siguientes afirmaciones describe mejor la naturaleza estadística del Análisis de la Covarianza (ANCOVA) según el texto?",
    "options": [
      "Es un modelo aplicable únicamente cuando las variables explicativas son exclusivamente categóricas de múltiples niveles.",
      "Es un modelo completamente diferente al ANOVA y a la regresión lineal que requiere nuevos métodos de estimación de parámetros.",
      "Es un método no paramétrico diseñado para evitar la descomposición de la variabilidad mediante sumas de cuadrados.",
      "Se puede interpretar como una extensión del ANOVA que incluye covariables numéricas o como una regresión lineal múltiple con variables explicativas categóricas."
    ],
    "correctIndex": 3,
    "rationale": "El texto establece explícitamente que el ANCOVA se puede entender como ANOVA con covariables o regresión múltiple con factores categóricos.",
    "hint": "Piensa en cómo se relacionan los modelos lineales continuos y categóricos vistos en temas anteriores."
  },
  {
    "question": "En el modelo ANCOVA básico sin interacción $Y_{ij} = \\mu + \\tau_i + \\beta X_{ij} + \\varepsilon_{ij}$, ¿qué supuesto clave se asume respecto a la relación entre la covariable $X$ y la respuesta $Y$?",
    "options": [
      "La relación lineal entre $X$ e $Y$ tiene la misma pendiente $\\beta$ para todos los niveles del factor.",
      "El término independiente $\\mu + \\tau_i$ es idéntico para todos los niveles del factor.",
      "La pendiente $\\beta$ varía libremente según el nivel $i$ del factor.",
      "La covariable $X$ no influye en la variabilidad de la variable respuesta $Y$."
    ],
    "correctIndex": 0,
    "rationale": "El modelo ANCOVA simple supone la homogeneidad de pendientes, lo que se traduce en rectas paralelas para cada nivel del factor.",
    "hint": "Considera la representación gráfica de las rectas ajustadas bajo este modelo."
  },
  {
    "question": "A partir de la salida de R-Commander para el consumo de oxígeno en salmones (Figura 1.1), el modelo ajustado es $\\hat{\\text{logO2}} = 0{,}0871 + 0{,}6531 \\text{logWeight} - 0{,}1554 \\text{Envir[T.FreshWater]}$. ¿Cuál es la recta estimada ajustada específicamente para el grupo de agua dulce (`FreshWater`)?",
    "options": [
      "$\\hat{\\text{logO2}} = -0{,}1554 + 0{,}6531 \\text{logWeight}$",
      "$\\hat{\\text{logO2}} = 0{,}0871 + 0{,}4977 \\text{logWeight}$",
      "$\\hat{\\text{logO2}} = -0{,}0683 + 0{,}6531 \\text{logWeight}$",
      "$\\hat{\\text{logO2}} = 0{,}0871 + 0{,}6531 \\text{logWeight}$"
    ],
    "correctIndex": 2,
    "rationale": "Se calcula sumando el intercepto del nivel de referencia ($0{,}0871$) al coeficiente de `FreshWater` ($-0{,}1554$), manteniendo la misma pendiente ($0{,}6531$).",
    "hint": "Recuerda sumar el coeficiente de la variable indicadora al término independiente de referencia."
  },
  {
    "question": "En la salida del modelo para los salmones, el contraste asociado al coeficiente de $\\text{logWeight}$ presenta un p-valor de $0{,}0001$. ¿Qué conclusión estadística se deriva de este resultado al nivel $\\alpha = 0{,}05$?",
    "options": [
      "Las rectas asociadas a los dos ambientes son perpendiculares entre sí.",
      "El efecto del ambiente sobre el consumo de oxígeno no depende del peso del salmón.",
      "No existe evidencia suficiente para afirmar que el peso esté relacionado con el consumo de oxígeno.",
      "Existe evidencia significativa de una relación lineal entre el peso y el consumo de oxígeno, manteniendo constante el ambiente."
    ],
    "correctIndex": 3,
    "rationale": "El rechazo de $H_0: \\beta_{\\text{logWeight}} = 0$ confirma la existencia de una relación lineal estadísticamente significativa entre el peso y el consumo de oxígeno.",
    "hint": "Evalúa qué hipótesis nula se somete a contraste al analizar el coeficiente de una covariable continua."
  },
  {
    "question": "En un modelo ANCOVA con una covariable $X$ y un factor de dos niveles ($f_1$ nivel de referencia, $f_2$), expresado como $Y_i = \\beta_0 + \\beta_1 D_i + \\beta_2 X_i + \\beta_3 D_i X_i + \\varepsilon_i$, ¿qué representa geométricamente el parámetro $\\beta_3$?",
    "options": [
      "La pendiente de la recta de regresión ajustada para el nivel de referencia $f_1$.",
      "La diferencia entre las pendientes de las rectas asociadas a los dos niveles del factor.",
      "El término independiente correspondiente al nivel de referencia $f_1$.",
      "La diferencia entre los términos independientes de los dos niveles del factor."
    ],
    "correctIndex": 1,
    "rationale": "En la formulación con variables indicadoras, $\\beta_3$ cuantifica el cambio o ajuste en la pendiente del segundo nivel respecto a la del nivel de referencia.",
    "hint": "Compara las ecuaciones obtenidas evaluando $D_i = 0$ y $D_i = 1$."
  },
  {
    "question": "En el estudio del control de la población de conejos (Figura 1.3), el modelo ajustado es $\\hat{\\text{densidad}} = 2{,}4271 + 0{,}0991 \\text{Año} + 1{,}5048 \\text{region[T.R2]} - 0{,}3140 \\text{Año}\\cdot\\text{region[T.R2]}$. ¿Cuál es la tasa de cambio media anual estimada de la densidad de conejos en la Región 2 (`R2`)?",
    "options": [
      "Disminuye $0{,}2149$ unidades por año.",
      "Disminuye $0{,}3140$ unidades por año.",
      "Aumenta $1{,}5048$ unidades por año.",
      "Aumenta $0{,}0991$ unidades por año."
    ],
    "correctIndex": 0,
    "rationale": "La pendiente de la Región 2 se obtiene sumando la pendiente de referencia ($0{,}0991$) y el coeficiente de interacción ($-0{,}3140$), lo que resulta en $-0{,}2149$.",
    "hint": "Combina los coeficientes asociados a la covariable principal y al término de interacción para la categoría deseada."
  },
  {
    "question": "En el ejemplo de los conejos con interacción entre `Año` y `region`, el contraste para la interacción $\\text{Año:region[T.R2]}$ dio un p-valor $p < 2 \\cdot 10^{-16}$. ¿Qué implica biológicamente este resultado en el contexto del experimento?",
    "options": [
      "Las dos rectas ajustadas son perfectamente paralelas a lo largo de los años.",
      "La densidad inicial de conejos era idéntica en ambas regiones antes de la introducción de depredadores.",
      "La evolución temporal de la densidad de conejos difiere significativamente entre ambas regiones.",
      "El programa de introducción de depredadores no tuvo ningún impacto observable en la región 2."
    ],
    "correctIndex": 2,
    "rationale": "El rechazo de la hipótesis nula de interacción confirma que la pendiente (evolución en el tiempo) es significativamente distinta entre ambas regiones.",
    "hint": "Piensa en lo que refleja el cambio de pendiente entre las regiones con respecto al tiempo."
  },
  {
    "question": "En el modelo con interacción del ejemplo de los conejos, ¿cómo se interpreta el término independiente estimado para la Región 2, que equivale a $2{,}4271 + 1{,}5048 = 3{,}9319$?",
    "options": [
      "La densidad máxima teórica que puede alcanzar la población de conejos en la Región 1.",
      "La tasa media de reducción anual de la población en la Región 2.",
      "La densidad estimada de conejos en la Región 2 al inicio del estudio (Año = 0).",
      "La diferencia de densidad promedio entre regiones al cabo del último año del estudio."
    ],
    "correctIndex": 2,
    "rationale": "Al evaluar la ecuación en $\\text{Año} = 0$, los términos con la variable continua se anulan, quedando únicamente el intercepto específico de la Región 2.",
    "hint": "Analiza el valor predicho por la ecuación ajustada cuando la variable temporal es igual a cero."
  },
  {
    "question": "Si un factor en un modelo ANCOVA tuviera más de dos niveles (por ejemplo, tres ambientes distintos en lugar de dos), ¿por qué no sería suficiente interpretar separadamente los p-valores t individuales de los coeficientes de cada nivel?",
    "options": [
      "Porque al tener más de dos niveles, el modelo deja de ser un modelo lineal.",
      "Porque los coeficientes $t$ individuales solo evalúan diferencias respecto al nivel de referencia y no el efecto global del factor.",
      "Porque los contrastes $t$ pierden validez probabilística cuando la covariable es numérica.",
      "Porque el software R-Commander no permite calcular coeficientes individuales para más de dos niveles."
    ],
    "correctIndex": 1,
    "rationale": "Para evaluar si un factor con múltiples niveles tiene un efecto global significativo, es necesario realizar un contraste simultáneo mediante herramientas como `drop1` o sumas de cuadrados.",
    "hint": "Considera la función de la categoría base y el procedimiento alternativo mencionado en el texto (como `drop1`)."
  },
  {
    "question": "Según los comentarios finales del texto, ¿qué tipo de modelo lineal se obtiene si en un ANCOVA la estructura del estudio requiere incorporar efectos aleatorios?",
    "options": [
      "Un modelo ANOVA no paramétrico.",
      "Un modelo de regresión lineal simple ponderado.",
      "Un modelo de regresión logística multivariante.",
      "Un modelo lineal mixto."
    ],
    "correctIndex": 3,
    "rationale": "Al combinar variables explicativas de un ANCOVA con efectos aleatorios asociados al diseño muestral o experimental, se obtiene un modelo lineal mixto.",
    "hint": "Identifica la familia de modelos que combina efectos fijos (factores/covariables) y efectos aleatorios."
  }
];

const QUIZ_TITLE = 'ANCOVA';
const QUIZ_DESCRIPTION = 'Practica la interpretación de covariables, factores, pendientes e interacciones en el análisis de la covarianza.';
const RESPONSE_BOOK_KEY = 'EIB_ANCOVA_RESPONSE_SHEET_ID';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Cuestionario de práctica: ANCOVA')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupANCOVAQuiz_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(RESPONSE_BOOK_KEY);
  if (savedId) return SpreadsheetApp.openById(savedId).getUrl();

  const spreadsheet = SpreadsheetApp.create('Resultados — EIB — ANCOVA');
  const bank = spreadsheet.getSheets()[0];
  bank.setName('Preguntas');
  const bankHeaders = ['Pregunta', 'Opción A', 'Opción B', 'Opción C', 'Opción D', 'Respuesta correcta', 'Explicación', 'Pista'];
  bank.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
  const bankRows = ANCOVA_QUESTIONS.map(question => [question.question, ...question.options,
    String.fromCharCode(65 + question.correctIndex), question.rationale, question.hint]);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setValues(bankRows);
  bank.setFrozenRows(1);
  bank.getRange(1, 1, 1, bankHeaders.length).setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  bank.setColumnWidth(1, 540);
  bank.setColumnWidths(2, 4, 340);
  bank.setColumnWidth(6, 160);
  bank.setColumnWidth(7, 540);
  bank.setColumnWidth(8, 420);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setWrap(true).setVerticalAlignment('top');

  const responses = spreadsheet.insertSheet('Respuestas');
  const headers = ['Fecha y hora', 'Nombre y apellidos', 'Puntuación', 'Aciertos'];
  ANCOVA_QUESTIONS.forEach((_, index) => headers.push('P' + (index + 1) + ' respuesta', 'P' + (index + 1) + ' correcta'));
  responses.getRange(1, 1, 1, headers.length).setValues([headers]);
  responses.setFrozenRows(1);
  responses.getRange(1, 1, 1, headers.length).setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  responses.setColumnWidth(1, 160);
  responses.setColumnWidth(2, 220);
  responses.setColumnWidths(3, headers.length - 2, 120);

  const summary = spreadsheet.insertSheet('Resumen');
  summary.getRange('A1:B3').setValues([['Cuestionario', QUIZ_TITLE], ['Intentos recibidos', ''], ['Puntuación media', '']]);
  summary.getRange('B2').setFormula('=COUNTA(Respuestas!B2:B)');
  summary.getRange('B3').setFormula('=IFERROR(AVERAGE(Respuestas!C2:C);0)');
  summary.getRange('A5:C5').setValues([['Pregunta', 'Respuestas', 'Porcentaje de acierto']]);
  ANCOVA_QUESTIONS.forEach((question, index) => {
    const row = 6 + index;
    const responseColumn = 5 + index * 2;
    const correctColumn = responseColumn + 1;
    summary.getRange(row, 1).setValue((index + 1) + '. ' + plainText_(question.question));
    summary.getRange(row, 2).setFormula('=COUNTA(Respuestas!' + columnLetter_(responseColumn) + '2:' + columnLetter_(responseColumn) + ')');
    summary.getRange(row, 3).setFormula('=IFERROR(COUNTIF(Respuestas!' + columnLetter_(correctColumn) + '2:' + columnLetter_(correctColumn) + ';TRUE)/B' + row + ';0)');
  });
  summary.getRange('A1:C1').setFontWeight('bold').setFontColor('#2b5876');
  summary.getRange('A5:C5').setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  summary.getRange(6, 3, ANCOVA_QUESTIONS.length, 1).setNumberFormat('0%');
  summary.setFrozenRows(5);
  summary.setColumnWidth(1, 680);
  summary.setColumnWidth(2, 120);
  summary.setColumnWidth(3, 180);

  properties.setProperty(RESPONSE_BOOK_KEY, spreadsheet.getId());
  Logger.log('Hoja de respuestas: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

/**
 * Rewrites only the question bank with the canonical question text.
 * Existing student responses in the Respuestas sheet are left untouched.
 * Run once after updating the source if the Preguntas sheet contains malformed TeX.
 */
function repairANCOVAQuestionBank_() {
  const sheet = openResponseBook_().getSheetByName('Preguntas');
  if (!sheet) throw new Error('No se ha encontrado la hoja Preguntas.');
  const rows = ANCOVA_QUESTIONS.map(question => [question.question, ...question.options,
    String.fromCharCode(65 + question.correctIndex), question.rationale, question.hint]);
  sheet.getRange(2, 1, rows.length, 8).setValues(rows);
  return 'Banco de preguntas ANCOVA actualizado; las respuestas guardadas se han conservado.';
}

function getQuiz() {
  return {title: QUIZ_TITLE, description: QUIZ_DESCRIPTION, questions: loadQuestions_().map((question, index) => ({
    number: index + 1, question: mathText_(question.question), options: question.options.map(mathText_)
  }))};
}

function submitQuiz(payload) {
  if (!payload || typeof payload.name !== 'string' || !Array.isArray(payload.answers)) throw new Error('No se han recibido las respuestas completas. Recarga el cuestionario e inténtalo de nuevo.');
  const name = payload.name.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!name || name.length > 100) throw new Error('Escribe tu nombre y apellidos (máximo 100 caracteres).');
  const questions = loadQuestions_();
  if (payload.answers.length !== questions.length) throw new Error('Falta alguna respuesta.');
  const answers = payload.answers.map((answer, index) => {
    const value = Number(answer);
    if (!Number.isInteger(value) || value < 0 || value >= questions[index].options.length) throw new Error('Hay una respuesta no válida en la pregunta ' + (index + 1) + '.');
    return value;
  });
  const results = questions.map((question, index) => ({
    number:index + 1, question:mathText_(question.question), selectedIndex:answers[index], correctIndex:question.correctIndex,
    selectedText:mathText_(question.options[answers[index]]), correctText:mathText_(question.options[question.correctIndex]),
    correct:answers[index] === question.correctIndex, rationale:mathText_(question.rationale), hint:mathText_(question.hint)
  }));
  const score = results.filter(item => item.correct).length;
  const lock = LockService.getScriptLock();
  lock.waitLock(15000);
  try {
    const sheet = openResponseBook_().getSheetByName('Respuestas');
    const row = [new Date(), safeSheetText_(name), score, score];
    results.forEach(item => row.push(String.fromCharCode(65 + item.selectedIndex), item.correct));
    sheet.appendRow(row);
  } finally { lock.releaseLock(); }
  return {score, total:questions.length, results};
}

function loadQuestions_() {
  const sheet = openResponseBook_().getSheetByName('Preguntas');
  if (!sheet || sheet.getLastRow() < 2) throw new Error('No se han encontrado preguntas en la hoja Preguntas.');
  return sheet.getRange(2, 1, sheet.getLastRow() - 1, 8).getValues().filter(row => String(row[0] || '').trim()).map((row, index) => {
    const options = row.slice(1, 5).map(value => String(value || ''));
    const correctIndex = String(row[5] || '').trim().toUpperCase().charCodeAt(0) - 65;
    if (options.some(option => !option.trim()) || correctIndex < 0 || correctIndex >= options.length) throw new Error('Revisa las opciones y la respuesta correcta de la pregunta ' + (index + 1) + '.');
    return {question:String(row[0]), options, correctIndex, rationale:String(row[6] || ''), hint:String(row[7] || '')};
  });
}

function openResponseBook_() {
  const id = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!id) throw new Error('Primero ejecuta setupANCOVAQuiz_ para crear la hoja de respuestas.');
  return SpreadsheetApp.openById(id);
}

function mathText_(value) { return String(value || '').replace(/(?:\t|\\)text\{/g, '\\text{'); }
function plainText_(value) { return String(value || '').replace(/\$([^$]+)\$/g, '$1').replace(/\\text\{([^}]*)\}/g, '$1'); }
function safeSheetText_(value) { return /^[=+\-@]/.test(value) ? "'" + value : value; }
function columnLetter_(column) {
  let letter = '';
  while (column > 0) { const remainder = (column - 1) % 26; letter = String.fromCharCode(65 + remainder) + letter; column = Math.floor((column - 1) / 26); }
  return letter;
}
