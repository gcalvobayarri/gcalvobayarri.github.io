const ANOVA_QUESTIONS = [
  {
    "question": "¿Por qué no resulta adecuado realizar múltiples contrastes de hipótesis independientes por parejas (como pruebas $t$ de Student) para comparar las medias de tres o más grupos en lugar de aplicar un ANOVA?",
    "options": [
      "Porque reduce la potencia estadística del estudio al no considerar el tamaño muestral total $N$ en el cálculo de cada media.",
      "Porque invalida el supuesto de homocedasticidad al calcular varianzas muestrales separadas para cada pareja de grupos.",
      "Porque exige estrictamente que todos los grupos analizados tengan exactamente el mismo número de observaciones ($n_1 = n_2 = \\dots = n_k$).",
      "Porque incrementa sustancialmente la probabilidad global de cometer al menos un error de Tipo I al detectar diferencias falsamente significativas por azar."
    ],
    "correctIndex": 3,
    "rationale": "Realizar múltiples contrastes acumula el nivel de significación individual, lo que eleva el riesgo global de cometer al menos un error de Tipo I en el conjunto del experimento.",
    "hint": "Piensa en lo que le ocurre a la tasa global de error cuando se realizan varios contrastes estadísticos simultáneos."
  },
  {
    "question": "En el contexto del diseño de experimentos para un ANOVA de una vía, ¿cuál es la diferencia fundamental entre una réplica y una medición repetida?",
    "options": [
      "Una réplica sirve para calcular la variabilidad entre grupos, mientras que la medición repetida cuantifica únicamente la variabilidad intra-grupos.",
      "Una réplica aplica el tratamiento a distintas unidades experimentales independientes, mientras que una medición repetida toma múltiples datos de la misma unidad experimental.",
      "Una réplica requiere que el factor tenga al menos tres niveles, mientras que una medición repetida se aplica solo en diseños de dos niveles.",
      "La réplica incrementa los grados de libertad del denominador, mientras que la medición repetida solo modifica los del numerador."
    ],
    "correctIndex": 1,
    "rationale": "La réplica garantiza unidades independientes para estimar la variabilidad aleatoria pura, a diferencia de medir varias veces la misma unidad.",
    "hint": "Considera la independencia de las unidades experimentales frente a tomar múltiples observaciones sobre un mismo elemento."
  },
  {
    "question": "En la descomposición de la variabilidad del ANOVA de una vía ($SC_{\\text{Total}} = SC_{\text{Entre}} + SC_{\text{Intra}}$), ¿qué cuantifica concretamente la Suma de Cuadrados Entre grupos ($SC_{\text{Entre}}$)?",
    "options": [
      "La diferencia al cuadrado entre la media muestral de cada grupo y la media global, ponderada por el tamaño del grupo $n_i$.",
      "La variabilidad del término de error aleatorio $\\varepsilon_{ij}$ común a todas las unidades experimentales del modelo.",
      "La dispersión cuadrática de cada observación individual $Y_{ij}$ respecto a la media estimada de su propio grupo $\\bar{Y}_{i\\cdot}$.",
      "La varianza muestral total observada en la variable respuesta multiplicada por el número total de grupos $k$."
    ],
    "correctIndex": 0,
    "rationale": "Esta magnitud mide cuánto se alejan las medias de los grupos respecto a la media general del conjunto de observaciones.",
    "hint": "Fíjate en las desviaciones que utiliza esta suma de cuadrados: distancias entre las medias del grupo y una media central de todo el conjunto de datos."
  },
  {
    "question": "Al formular un ANOVA de un factor con $k$ niveles como un modelo lineal $Y_i = \\beta_0 + \\beta_1 X_{1i} + \\dots + \\beta_{k-1} X_{(k-1)i} + \\varepsilon_i$ usando variables indicadoras (dummy), ¿cómo se interpreta el coeficiente $\\beta_j$?",
    "options": [
      "Representa la media poblacional directa y absoluta de las observaciones pertenecientes al grupo $j+1$.",
      "Representa la diferencia entre la media poblacional del grupo $j+1$ y la media poblacional del grupo de referencia.",
      "Representa la desviación estándar intra-grupo asociada a las unidades del nivel $j+1$.",
      "Representa el cociente entre la media muestral del grupo $j+1$ y la media global de todas las observaciones."
    ],
    "correctIndex": 1,
    "rationale": "En la codificación con variables indicadoras, la constante es la media del grupo de referencia y cada coeficiente mide el incremento o decremento respecto a ella.",
    "hint": "Recuerda que la categoría que no tiene variable indicadora asociada actúa como nivel de referencia."
  },
  {
    "question": "En la inferencia del ANOVA, ¿cuál es la interpretación formal del $p$-valor asociado al estadístico de contraste $F_{\\text{obs}}$?",
    "options": [
      "Es la probabilidad de que la hipótesis nula $H_0: \\mu_1 = \\mu_2 = \\dots = \\mu_k$ sea falsa dados los datos observados.",
      "Es la probabilidad de cometer un error de Tipo II al rechazar que al menos una media es diferente de las demás.",
      "Es la probabilidad de obtener un estadístico $F$ igual o mayor que $F_{\\text{obs}}$, asumiendo que la hipótesis nula de igualdad de medias es cierta.",
      "Es la proporción de variabilidad total que queda explicada por las diferencias existentes entre las medias de los grupos."
    ],
    "correctIndex": 2,
    "rationale": "El $p$-valor mide la cola derecha de la distribución $F_{k-1, N-k}$ a partir del valor observado bajo el supuesto de que $H_0$ es verdadera.",
    "hint": "Recuerda que se evalúa la probabilidad de observar una discrepancia igual o mayor bajo la hipótesis nula."
  },
  {
    "question": "Si al comprobar los supuestos de un ANOVA de un factor con $k = 5$ grupos se detecta una desviación significativa de la normalidad en uno de los grupos mediante Shapiro-Wilk, pero cada grupo cuenta con un tamaño muestral de $n_i = 30$ observaciones, ¿por qué es metodológicamente razonable mantener el análisis paramétrico?",
    "options": [
      "Porque al estar el diseño balanceado, las desviaciones de la normalidad se compensan restando la varianza dentro de los grupos.",
      "Porque la hipótesis nula de la prueba de Shapiro-Wilk establece la ausencia de homocedasticidad y no de normalidad.",
      "Porque el test de Shapiro-Wilk queda automáticamente invalidado cuando el tamaño muestral total supera $N = 100$.",
      "Por el Teorema Central del Límite, que garantiza que la distribución de la media muestral es aproximadamente normal para tamaños muestrales suficientemente grandes."
    ],
    "correctIndex": 3,
    "rationale": "Con $n_i \\ge 30$, las medias muestrales se comportan de forma robusta respecto a la distribución normal necesaria para el ANOVA.",
    "hint": "Piensa en el teorema probabilístico que describe el comportamiento de la distribución de las medias muestrales cuando el tamaño muestral aumenta."
  },
  {
    "question": "Si en un estudio se verifica el supuesto de normalidad en todos los grupos, pero el test de Levene presenta un $p$-valor inferior al nivel de significación $\\alpha = 0.05$, ¿cuál es la alternativa paramétrica indicada para efectuar el contraste global?",
    "options": [
      "El test no paramétrico de Kruskal-Wallis.",
      "El ANOVA de Welch.",
      "El modelo lineal simple excluyendo el término de intercepto $\\beta_0$.",
      "El test de comparaciones múltiples de Tukey."
    ],
    "correctIndex": 1,
    "rationale": "El ANOVA de Welch ajusta los grados de libertad del estadístico $F$ permitiendo realizar la comparación sin asumir varianzas iguales.",
    "hint": "Busca la modificación del test $F$ diseñada específicamente para situaciones donde no se sostiene la condición de varianzas iguales."
  },
  {
    "question": "Tras rechazar la hipótesis nula en un ANOVA clásico de una vía, ¿qué procedimiento de comparaciones múltiples permite comparar todas las parejas de medias controlando la tasa de error familiar del conjunto de pruebas?",
    "options": [
      "La prueba de normalidad de Shapiro-Wilk por pares.",
      "La prueba de la $t$ de Student estándar para muestras independientes.",
      "El test de Tukey.",
      "El test de homogeneidad de varianzas de Levene."
    ],
    "correctIndex": 2,
    "rationale": "El método de Tukey ajusta las diferencias por parejas para controlar la probabilidad de cometer errores de Tipo I en el conjunto de comparaciones.",
    "hint": "Considera el procedimiento específico diseñado para mantener el control del error Tipo I en modelos ANOVA cuando se cumplen normalidad y homocedasticidad."
  },
  {
    "question": "En un reporte de comparaciones múltiples formateado mediante grupos homogéneos con letras (por ejemplo, grupo $a$ y grupo $b$), ¿qué indica el hecho de que dos tratamientos compartan la letra $a$?",
    "options": [
      "Que la varianza interna de ambos tratamientos es igual a la variabilidad total observada en los residuos.",
      "Que ambos tratamientos presentan evidencias significativas de ser distintos de todos los demás niveles evaluados.",
      "Que las medias poblacionales de ambos tratamientos son numéricamente iguales a cero.",
      "Que no existen diferencias estadísticamente significativas entre la media de respuesta de ambos tratamientos al nivel de significación fijado."
    ],
    "correctIndex": 3,
    "rationale": "La pertenencia al mismo grupo homogéneo señala que el contraste entre esos dos tratamientos particulares no resulta significativo.",
    "hint": "Recuerda la condición necesaria para considerar que dos niveles del factor pertenecen al mismo grupo homogéneo."
  },
  {
    "question": "Si el supuesto de normalidad no se sostiene en un estudio con muestras pequeñas ($n_i < 30$), ¿cuál es el procedimiento global no paramétrico adecuado y qué función de R se utiliza para estudiar posteriormente las diferencias por parejas?",
    "options": [
      "El test de Levene como test global y la función `summary.lm` para las comparaciones dos a dos.",
      "El contraste de Kruskal-Wallis como test global y la función `pairwise.wilcox.test` para las comparaciones dos a dos.",
      "El ANOVA de Welch como test global y la función `pairwise.t.test` con `pool.sd=FALSE` para las comparaciones dos a dos.",
      "El test de Tukey como test global y la función `shapiro.test` para las comparaciones dos a dos."
    ],
    "correctIndex": 1,
    "rationale": "Kruskal-Wallis es la alternativa no paramétrica al ANOVA y las comparaciones de Wilcoxon analizan posteriormente los rangos por parejas.",
    "hint": "Busca la prueba no paramétrica equivalente al ANOVA de un factor y su correspondiente prueba de rangos/Wilcoxon por parejas."
  },
  {
    "question": "En un modelo lineal equivalente al ANOVA para comparar 5 repelentes donde 'Odomos' es el grupo de referencia, el coeficiente estimado para el repelente 'C+O' es $\\hat{\\beta}_{\\text{C+O}} = -2.5337$ ($p = 0.00266$). ¿Qué concluye esta estimación respecto al tratamiento de referencia?",
    "options": [
      "La tasa media estimada de picaduras para el repelente C+O es significativamente menor que la de Odomos en aproximadamente 2.53 unidades.",
      "La media global de picaduras de todas las observaciones disminuye $2.53$ unidades al incorporar la variable explicativa C+O.",
      "No existen diferencias significativas entre C+O y Odomos porque los coeficientes negativos no modifican el ajuste global.",
      "El tratamiento C+O es un $2.53\\%$ menos efectivo que el tratamiento Odomos en la muestra analizada."
    ],
    "correctIndex": 0,
    "rationale": "El coeficiente negativo mide el decremento directo de la media del nivel considerado con respecto a la media del nivel tomado como referencia.",
    "hint": "Evalúa cómo se calcula la media esperada del grupo en presencia de una variable indicadora cuyo coeficiente es negativo."
  }
];
// Indices in the existing 11-question quiz; omit displayed questions 2, 5 and 9.
const ACTIVE_ANOVA_INDICES = [0, 2, 3, 5, 6, 7, 9, 10];
const QUIZ_TITLE = 'Cuestionario de práctica: ANOVA';
const QUIZ_DESCRIPTION = 'Comprueba lo que sabes sobre el análisis de la varianza de una vía, los contrastes y su interpretación.';
const RESPONSE_BOOK_KEY = 'EIB_ANOVA_RESPONSE_SHEET_ID';

function doGet() {
  return HtmlService.createHtmlOutputFromFile('Index')
    .setTitle(QUIZ_TITLE)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function setupANOVAQuiz_() {
  const properties = PropertiesService.getScriptProperties();
  const savedId = properties.getProperty(RESPONSE_BOOK_KEY);
  if (savedId) {
    const saved = SpreadsheetApp.openById(savedId);
    Logger.log('Hoja de respuestas: ' + saved.getUrl());
    return saved.getUrl();
  }

  const spreadsheet = SpreadsheetApp.create('Resultados — EIB — ANOVA');
  const bank = spreadsheet.getSheets()[0];
  bank.setName('Preguntas');
  const bankHeaders = ['Pregunta', 'Opción A', 'Opción B', 'Opción C', 'Opción D', 'Respuesta correcta', 'Explicación', 'Pista'];
  bank.getRange(1, 1, 1, bankHeaders.length).setValues([bankHeaders]);
  const bankRows = ANOVA_QUESTIONS.map(question => [
    question.question,
    ...question.options,
    String.fromCharCode(65 + question.correctIndex),
    question.rationale || '',
    question.hint || ''
  ]);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setValues(bankRows);
  bank.setFrozenRows(1);
  bank.getRange(1, 1, 1, bankHeaders.length)
    .setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  bank.setColumnWidth(1, 540);
  bank.setColumnWidths(2, 4, 340);
  bank.setColumnWidth(6, 160);
  bank.setColumnWidth(7, 540);
  bank.setColumnWidth(8, 420);
  bank.getRange(2, 1, bankRows.length, bankHeaders.length).setWrap(true).setVerticalAlignment('top');

  const responses = spreadsheet.insertSheet('Respuestas');
  const headers = ['Fecha y hora', 'Nombre y apellidos', 'Puntuación', 'Aciertos'];
  bankRows.forEach((question, index) => {
    headers.push('P' + (index + 1) + ' respuesta');
    headers.push('P' + (index + 1) + ' correcta');
  });
  responses.getRange(1, 1, 1, headers.length).setValues([headers]);
  responses.setFrozenRows(1);
  responses.getRange(1, 1, 1, headers.length)
    .setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  responses.setColumnWidth(1, 160);
  responses.setColumnWidth(2, 220);
  responses.setColumnWidth(3, 100);
  responses.setColumnWidth(4, 100);

  const summary = spreadsheet.insertSheet('Resumen');
  summary.getRange('A1:B3').setValues([
    ['Cuestionario', QUIZ_TITLE],
    ['Intentos recibidos', ''],
    ['Puntuación media', '']
  ]);
  summary.getRange('B2').setFormula('=COUNTA(Respuestas!B2:B)');
  summary.getRange('B3').setFormula('=IFERROR(AVERAGE(Respuestas!C2:C),0)');
  summary.getRange('A5:C5').setValues([['Pregunta', 'Respuestas', 'Porcentaje de acierto']]);
  ANOVA_QUESTIONS.forEach((question, index) => {
    const responseColumn = 5 + index * 2;
    const correctColumn = responseColumn + 1;
    const responseLetter = columnLetter_(responseColumn);
    const correctLetter = columnLetter_(correctColumn);
    const row = 6 + index;
    summary.getRange(row, 1).setValue((index + 1) + '. ' + plainText_(question.question));
    summary.getRange(row, 2).setFormula('=COUNTA(Respuestas!' + responseLetter + '2:' + responseLetter + ')');
    summary.getRange(row, 3).setFormula('=IFERROR(COUNTIF(Respuestas!' + correctLetter + '2:' + correctLetter + ',TRUE)/B' + row + ',0)');
  });
  summary.getRange('A1:C1').setFontWeight('bold').setFontColor('#2b5876');
  summary.getRange('A5:C5').setBackground('#2b5876').setFontColor('#fffdf8').setFontWeight('bold');
  summary.getRange(6, 3, ANOVA_QUESTIONS.length, 1).setNumberFormat('0%');
  summary.setFrozenRows(5);
  summary.setColumnWidth(1, 680);
  summary.setColumnWidth(2, 120);
  summary.setColumnWidth(3, 180);

  properties.setProperty(RESPONSE_BOOK_KEY, spreadsheet.getId());
  Logger.log('Hoja de respuestas creada: ' + spreadsheet.getUrl());
  return spreadsheet.getUrl();
}

function getQuiz() {
  const questions = loadQuestions_();
  return {
    title: QUIZ_TITLE,
    description: QUIZ_DESCRIPTION,
    questions: questions.map((question, index) => ({
      number: index + 1,
      question: mathText_(question.question),
      options: question.options.map(mathText_)
    }))
  };
}

function submitQuiz(payload) {
  if (!payload || typeof payload.name !== 'string' || !Array.isArray(payload.answers)) {
    throw new Error('No se han recibido las respuestas completas. Recarga el cuestionario e inténtalo de nuevo.');
  }
  const name = payload.name.replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim();
  if (!name || name.length > 100) throw new Error('Escribe tu nombre y apellidos (máximo 100 caracteres).');
  const questions = loadQuestions_();
  if (payload.answers.length !== questions.length) throw new Error('Falta alguna respuesta.');

  const answers = payload.answers.map((answer, index) => {
    const value = Number(answer);
    if (!Number.isInteger(value) || value < 0 || value >= questions[index].options.length) {
      throw new Error('Hay una respuesta no válida en la pregunta ' + (index + 1) + '.');
    }
    return value;
  });
  const correctCount = answers.reduce((total, answer, index) =>
    total + (answer === questions[index].correctIndex ? 1 : 0), 0);
  const sheetId = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!sheetId) throw new Error('El cuestionario aún no está configurado. Avisa al profesor.');

  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const responseSheet = spreadsheet.getSheetByName('Respuestas');
  const storedQuestionCount = Math.floor((responseSheet.getLastColumn() - 4) / 2);
  const row = [new Date(), safeSheetText_(name), correctCount, correctCount];
  for (let index = 0; index < storedQuestionCount; index++) row.push('', '');
  answers.forEach((answer, index) => {
    const column = 4 + questions[index].storageIndex * 2;
    row[column] = String.fromCharCode(65 + answer);
    row[column + 1] = answer === questions[index].correctIndex;
  });
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    responseSheet.appendRow(row);
  } finally {
    lock.releaseLock();
  }

  return {
    score: correctCount,
    total: questions.length,
    results: answers.map((answer, index) => {
      const question = questions[index];
      return {
        number: index + 1,
        question: mathText_(question.question),
        selectedIndex: answer,
        correctIndex: question.correctIndex,
        selectedText: mathText_(question.options[answer]),
        correctText: mathText_(question.options[question.correctIndex]),
        correct: answer === question.correctIndex,
        rationale: mathText_(question.rationale || ''),
        hint: mathText_(question.hint || '')
      };
    })
  };
}

function loadQuestions_() {
  const sheetId = PropertiesService.getScriptProperties().getProperty(RESPONSE_BOOK_KEY);
  if (!sheetId) throw new Error('El cuestionario aún no está configurado. Avisa al profesor.');
  const spreadsheet = SpreadsheetApp.openById(sheetId);
  const sheet = spreadsheet.getSheetByName('Preguntas');
  const responseSheet = spreadsheet.getSheetByName('Respuestas');
  if (!sheet || !responseSheet) throw new Error('Falta la pestaña Preguntas o Respuestas.');
  const rows = sheet.getDataRange().getValues().slice(1).filter(row => String(row[0] || '').trim());
  const storedQuestionCount = Math.floor((responseSheet.getLastColumn() - 4) / 2);
  // The original 12-question version also included a question removed previously.
  const previousRows = rows.length === 12 ? rows.filter((_, index) => index !== 3) : rows;
  let activeRows;
  if (previousRows.length === 11) {
    activeRows = ACTIVE_ANOVA_INDICES.map(index => previousRows[index]);
  } else if (previousRows.length === ACTIVE_ANOVA_INDICES.length) {
    activeRows = previousRows;
  } else {
    throw new Error('La hoja Preguntas debe contener el banco anterior de 11 o 12 preguntas, o las 8 preguntas activas.');
  }
  if (![8, 11, 12].includes(storedQuestionCount)) {
    throw new Error('No se reconoce la estructura de la pestaña Respuestas.');
  }
  return activeRows.map((row, index) => {
    const correctIndex = String(row[5] || '').trim().toUpperCase().charCodeAt(0) - 65;
    const options = row.slice(1, 5).map(value => String(value || '').trim());
    if (options.some(option => !option) || !Number.isInteger(correctIndex) || correctIndex < 0 || correctIndex > 3) {
      throw new Error('Revisa las opciones y la respuesta correcta de la pregunta ' + (index + 1) + '.');
    }
    const previousIndex = ACTIVE_ANOVA_INDICES[index];
    const storageIndex = storedQuestionCount === 8 ? index
      : storedQuestionCount === 12 && previousIndex >= 3 ? previousIndex + 1 : previousIndex;
    return {
      question: String(row[0]), options, correctIndex, storageIndex,
      rationale: String(row[6] || ''), hint: String(row[7] || '')
    };
  });
}

function plainText_(value) {
  const normalized = String(value || '').replace(/\text\{/g, '\\text{');
  return normalized.replace(/\$([^$]+)\$/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\((.*?)\\\)/g, (_, expression) => latexToPlainText_(expression))
    .replace(/\\\[([\s\S]*?)\\\]/g, (_, expression) => latexToPlainText_(expression));
}

// Preserve LaTeX delimiters for MathJax in the quiz while repairing tab
// characters that may have replaced the leading backslash in \text commands.
function mathText_(value) {
  return String(value || '').replace(/\text\{/g, '\\text{');
}

function latexToPlainText_(expression) {
  const source = String(expression).replace(/\\\\(?=[A-Za-z]+)/g, '\\');
  const greek = { alpha:'α', beta:'β', epsilon:'ε', varepsilon:'ε', mu:'μ', rho:'ρ', sigma:'σ', tau:'τ', Gamma:'Γ', Delta:'Δ' };
  const symbols = { approx:'≈', cdot:'·', ge:'≥', geq:'≥', le:'≤', leq:'≤', neq:'≠', ne:'≠', pm:'±', times:'×', infty:'∞', dots:'…', ldots:'…', cdots:'…' };
  let position = 0;
  function group_() {
    while (/\s/.test(source[position] || '')) position++;
    if (source[position] !== '{') return '';
    position++;
    return parse_('}');
  }
  function parse_(closing) {
    let output = '';
    while (position < source.length) {
      const character = source[position++];
      if (character === closing) break;
      if (character === '{') output += parse_('}');
      else if (character === '\\') {
        if (/[A-Za-z]/.test(source[position] || '')) {
          let command = '';
          while (/[A-Za-z]/.test(source[position] || '')) command += source[position++];
          if (Object.prototype.hasOwnProperty.call(greek, command)) output += greek[command];
          else if (Object.prototype.hasOwnProperty.call(symbols, command)) output += symbols[command];
          else if (command === 'frac') output += '(' + group_() + ')/(' + group_() + ')';
          else if (command === 'sqrt') output += '√(' + group_() + ')';
          else if (['text','mathrm','mathit','mathbf','mathcal','operatorname'].includes(command)) output += group_();
          else if (['hat','bar','overline'].includes(command)) output += command + '(' + group_() + ')';
          else if (command !== 'left' && command !== 'right') output += command;
        } else {
          const escaped = source[position++];
          output += /[,;:!]/.test(escaped) ? ' ' : escaped;
        }
      } else if (character === '_' || character === '^') {
        if (source[position] === '{') output += character + '(' + group_() + ')';
        else if (source[position]) output += character + source[position++];
        else output += character;
      } else output += character;
    }
    return output;
  }
  return parse_('').replace(/\s+/g, ' ').trim();
}

function safeSheetText_(value) {
  return /^[=+\-@]/.test(value) ? "'" + value : value;
}

function columnLetter_(column) {
  let letter = '';
  while (column > 0) {
    const remainder = (column - 1) % 26;
    letter = String.fromCharCode(65 + remainder) + letter;
    column = Math.floor((column - 1) / 26);
  }
  return letter;
}
