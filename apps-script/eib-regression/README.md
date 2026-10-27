# Regresión lineal múltiple — piloto de autoevaluación

Cuestionario de 10 preguntas para Experimentación Integrada en Biología. Mantiene el formato del piloto ANOVA: nombre obligatorio, corrección individual, explicación y pista después del envío, fórmulas LaTeX mediante MathJax y registro privado de respuestas en una hoja de cálculo.

## Configuración en Apps Script

1. Crea un proyecto nuevo en [Google Apps Script](https://script.google.com/).
2. Sustituye `Code.gs` por el archivo de esta carpeta. Añade un archivo HTML llamado `Index` y pega `Index.html`.
3. En el selector de funciones, ejecuta `setupRegressionQuiz_` y autoriza la creación de la hoja de cálculo. Se crearán las pestañas `Preguntas`, `Respuestas` y `Resumen`.
4. Elige **Implementar → Nueva implementación → Aplicación web**. Configura **Ejecutar como** tu cuenta y el acceso para que puedan responder los estudiantes con el enlace. La aplicación solo expone las preguntas y el envío; no ofrece una función para leer las respuestas guardadas.
5. Comparte la URL terminada en `/exec` para conectarla a la página de Docencia de la web.

El banco inicial está en `Preguntas`: se pueden modificar enunciados, opciones, letras correctas, explicaciones y pistas. La hoja `Respuestas` contiene el nombre, la hora, la puntuación y las elecciones de cada intento. `Resumen` calcula el número de intentos y el porcentaje de acierto por pregunta. Mantén privada la hoja de cálculo.

MathJax 3 se carga desde jsDelivr para componer las expresiones matemáticas; si el CDN no está disponible, el texto de las fórmulas sigue visible.
