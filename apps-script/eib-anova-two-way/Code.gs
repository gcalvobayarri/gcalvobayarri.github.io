const TWO_WAY_ANOVA_QUESTIONS = [
  {
    question: '¿Qué permite estudiar un ANOVA de dos vías en un diseño factorial?',
    options: [
      'El efecto conjunto de dos factores sobre una respuesta, incluyendo si el efecto de uno depende del nivel del otro.',
      'Únicamente la correlación entre dos variables numéricas explicativas.',
      'La diferencia entre dos medias calculada con observaciones emparejadas.',
      'El efecto de un solo factor después de transformar la respuesta en una variable binaria.'
    ],
    correctIndex: 0,
    rationale: 'El diseño factorial permite evaluar los efectos principales de A y B y, si el modelo lo incluye, su interacción.',
    hint: 'Piensa en qué se gana al estudiar simultáneamente dos factores y sus combinaciones.'
  },
  {
    question: 'En un diseño con factores A y B, ¿qué significa que exista interacción entre ambos?',
    options: [
      'Que las varianzas de A y B son necesariamente iguales.',
      'Que el efecto de A sobre la respuesta cambia según el nivel de B (y viceversa).',
      'Que los niveles de A están anidados dentro de los niveles de B.',
      'Que ambos factores tienen efectos principales estadísticamente significativos.'
    ],
    correctIndex: 1,
    rationale: 'La interacción expresa que la diferencia asociada a un factor no es constante en todos los niveles del otro factor.',
    hint: 'Si las diferencias entre niveles de A no son iguales para cada nivel de B, ¿qué término lo recoge?'
  },
  {
    question: '¿Cuál de estos modelos representa un ANOVA de dos vías con interacción?',
    options: [
      '$Y_{ijk}=\\mu+\\alpha_i+\\beta_j+\\varepsilon_{ijk}$',
      '$Y_{ijk}=\\mu+\\alpha_i+\\beta_j+(\\alpha\\beta)_{ij}+\\varepsilon_{ijk}$',
      '$Y_{ijk}=\\beta_0+\\beta_1X_{ijk}+\\varepsilon_{ijk}$',
      '$Y_{ijk}=\\mu+(\\alpha\\beta)_{ijk}$'
    ],
    correctIndex: 1,
    rationale: 'El modelo incluye la media general, los dos efectos principales, el término de interacción A×B y el error aleatorio.',
    hint: 'Busca el modelo que incluye, además de A y B, un término específico para cada combinación de sus niveles.'
  },
  {
    question: 'En un diseño con 3 niveles de A y 4 niveles de B, ¿cuántos grados de libertad tiene el término de interacción A×B?',
    options: ['$3+4=7$', '$(3-1)+(4-1)=5$', '$(3-1)(4-1)=6$', '$3\\cdot4-1=11$'],
    correctIndex: 2,
    rationale: 'Los grados de libertad de la interacción son el producto de los grados de libertad de los dos factores: $(a-1)(b-1)$.',
    hint: 'Para una interacción se multiplican los grados de libertad de A y B.'
  },
  {
    question: 'Hay 3 niveles de A, 4 niveles de B y 5 observaciones independientes por cada combinación. En el modelo con interacción, ¿cuántos grados de libertad corresponden al error?',
    options: ['$3\\cdot4\\cdot(5-1)=48$', '$3\\cdot4\\cdot5-1=59$', '$(3-1)(4-1)=6$', '$3+4-2=5$'],
    correctIndex: 0,
    rationale: 'Con replicación en cada celda, los grados de libertad residuales son $ab(n-1)$: hay $ab$ combinaciones y $n-1$ grados de libertad dentro de cada una.',
    hint: 'Cuenta primero las combinaciones de niveles y después los grados de libertad dentro de cada combinación.'
  },
  {
    question: 'En un diseño factorial con una sola observación por cada combinación de A y B, ¿qué dificultad aparece al incluir la interacción?',
    options: [
      'No se pueden estimar los efectos principales de A y B.',
      'La interacción queda confundida con el error y no se puede contrastar separadamente sin supuestos adicionales.',
      'El número de grados de libertad del error aumenta.',
      'El diseño se convierte automáticamente en un diseño de medidas repetidas.'
    ],
    correctIndex: 1,
    rationale: 'Sin replicación dentro de las celdas, no hay variación interna de celda para separar el error de la interacción; hace falta imponer restricciones o supuestos adicionales.',
    hint: 'Pregunta si hay observaciones repetidas dentro de cada combinación para estimar el error por separado.'
  },
  {
    question: 'El contraste de interacción A×B resulta significativo. ¿Cuál es la interpretación y el paso posterior más adecuados?',
    options: [
      'Los efectos de A y B son iguales; se deben interpretar solo sus efectos principales.',
      'El efecto de un factor depende del nivel del otro; conviene estudiar efectos simples o comparaciones dentro de niveles relevantes.',
      'La respuesta es normal; no hacen falta comparaciones adicionales.',
      'Todos los pares de medias difieren significativamente entre sí.'
    ],
    correctIndex: 1,
    rationale: 'Una interacción significativa indica que los efectos no son constantes entre niveles. Las comparaciones simples ayudan a describir dónde aparecen las diferencias; si se hacen muchas, se debe controlar la multiplicidad.',
    hint: 'Una interacción señala dependencia entre efectos; desglósala comparando un factor dentro de niveles del otro.'
  },
  {
    question: '¿Qué conjunto describe los supuestos habituales del ANOVA de dos vías con errores independientes?',
    options: [
      'Independencia de las observaciones, normalidad aproximada de los errores dentro de las celdas y varianza común.',
      'Normalidad de los dos factores y correlación perfecta entre las observaciones.',
      'Igual número de observaciones en cada celda y ausencia de interacción.',
      'Distribución normal de la respuesta conjunta, independientemente del diseño.'
    ],
    correctIndex: 0,
    rationale: 'Los supuestos se formulan sobre los errores del modelo: independencia, normalidad aproximada y homogeneidad de varianzas. Un diseño balanceado no es un requisito general del ANOVA.',
    hint: 'Los supuestos se refieren a los errores, no a que los factores sean normales.'
  },
  {
    question: 'En un diseño no balanceado, ¿por qué los resultados de `anova()` secuencial en R pueden cambiar al cambiar el orden de A y B en la fórmula?',
    options: [
      'Porque las sumas de cuadrados de Tipo I asignan secuencialmente la variabilidad explicada a los términos según el orden en que entran.',
      'Porque R cambia automáticamente la respuesta al invertir el orden de los factores.',
      'Porque los grados de libertad del error dependen del orden de los términos.',
      'Porque un diseño no balanceado invalida necesariamente el modelo lineal.'
    ],
    correctIndex: 0,
    rationale: 'En diseños no balanceados los términos pueden no ser ortogonales. Las sumas de cuadrados secuenciales dependen de qué términos se incluyan antes; conviene elegir el contraste acorde con la pregunta científica.',
    hint: 'Recuerda que las sumas de cuadrados de Tipo I son secuenciales.'
  },
  {
    question: 'Para un contraste F de un efecto, se obtiene $p=0{,}03$ con nivel de significación $\\alpha=0{,}05$. ¿Qué conclusión es correcta?',
    options: [
      'La probabilidad de que la hipótesis nula sea cierta es 0,03.',
      'Se rechaza la hipótesis nula al 5%; el resultado aporta evidencia contra ella, sin cuantificar la probabilidad de que sea cierta.',
      'El efecto es necesariamente importante desde el punto de vista biológico.',
      'Hay un 97% de probabilidad de que todas las medias sean distintas.'
    ],
    correctIndex: 1,
    rationale: 'El p-valor es una probabilidad calculada bajo la hipótesis nula y los supuestos del modelo. Al ser menor que $\\alpha$, se rechaza esa hipótesis; el resultado no mide su probabilidad posterior ni la relevancia práctica.',
    hint: 'Compara $p$ con $\\alpha$ y recuerda qué probabilidad condicionada representa un p-valor.'
  }
];

const QUIZ_TITLE = 'ANOVA de dos vías';
const QUIZ_DESCRIPTION = 'Practica la interpretación de los efectos principales y la interacción, los grados de libertad y la evaluación del modelo.';
const RESPONSE_BOOK_KEY = 'EIB_TWO_WAY_ANOVA_RESPONSE_SHEET_ID';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle('Cuestionario de práctica: ANOVA de dos vías')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupTwoWayANOVAQuiz_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(RESPONSE_BOOK_KEY);
  if (savedId) return SpreadsheetApp.openById(savedId).getUrl();

  const spreadsheet = SpreadsheetApp.create('Resultados — EIB — ANOVA de dos vías');
  const bank = spreadsheet.getSheets()[0];
  bank.setName('Preguntas');
  const bankHeaders = ['Pregunta', 'Opción A', 'Opción B', 'Opción C', 'Opción D', 'Respuesta correcta', 'Explicación', 'Pista'];
  bank.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
  const bankRows = TWO_WAY_ANOVA_QUESTIONS.map(question => [question.question, ...question.options,
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
  TWO_WAY_ANOVA_QUESTIONS.forEach((_, index) => headers.push('P' + (index + 1) + ' respuesta', 'P' + (index + 1) + ' correcta'));
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
  TWO_WAY_ANOVA_QUESTIONS.forEach((question, index) => {
    const row = 6 + index;
    const responseColumn = 5 + index * 2;
    const correctColumn = responseColumn + 1;
    summary.getRange(row, 1).setValue((index + 1) + '. ' + plainText_(question.question));
    summary.getRange(row, 2).setFormula('=COUNTA(Respuestas!' + columnLetter_(responseColumn) + '2:' + columnLetter_(responseColumn) + ')');
    summary.getRange(row, 3).setFormula('=IFERROR(COUNTIF(Respuestas!' + columnLetter_(correctColumn) + '2:' + columnLetter_(correctColumn) + ';TRUE)/B' + row + ';0)');
  });
  summary.getRange('A1:C1').setFontWeight('bold').setFontColor('#2b5876');
  summary.getRange('A5:C5').setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  summary.getRange(6, 3, TWO_WAY_ANOVA_QUESTIONS.length, 1).setNumberFormat('0%');
  summary.setFrozenRows(5);
  summary.setColumnWidth(1, 680);
  summary.setColumnWidth(2, 120);
  summary.setColumnWidth(3, 180);

  properties.setProperty(RESPONSE_BOOK_KEY, spreadsheet.getId());
  Logger.log('Hoja de respuestas: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
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
  if (!id) throw new Error('Primero ejecuta setupTwoWayANOVAQuiz_ para crear la hoja de respuestas.');
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
