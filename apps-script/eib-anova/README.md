# ANOVA de una vía · EIB

El test muestra 8 preguntas. Se excluyen las preguntas 2, 5 y 9 de la versión anterior de 11 preguntas. Se conservan las anteriores 1, 3, 4, 6, 7, 8, 10 y 11 y se numeran del 1 al 8.

## Actualizar sin instalar nada

1. Abre Code.gs en GitHub, pulsa Raw y copia todo.
2. Sustituye Código.gs en el proyecto de Apps Script del test ANOVA y guarda. No cambies Index.html.
3. En Implementar → Gestionar implementaciones, edita la implementación activa, selecciona Nueva versión y pulsa Implementar.
4. Recarga el cuestionario. Debe mostrar 8 preguntas.

El código filtra las preguntas directamente al cargar el banco existente. No hace falta ejecutar setupANOVAQuiz_ ni cambiar las filas de Google Sheets. Mantiene las columnas originales de las respuestas para conservar la correspondencia con los intentos anteriores. El resumen conserva el histórico del banco completo.
