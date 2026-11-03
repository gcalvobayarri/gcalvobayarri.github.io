# ANCOVA · autoevaluación EIB

Cuestionario web de 10 preguntas con corrección individual, explicaciones y registro docente en una hoja privada de Google Sheets. `Code.gs` y `Index.html` son el código fuente. Este directorio está preparado para versionarse en GitHub y sincronizarse con Google Apps Script mediante `clasp`.

## Corrección de las fórmulas

El fallo se debía a que Apps Script interpreta secuencias como `\t` y `\b` como caracteres especiales dentro de cadenas JavaScript. Las expresiones LaTeX de `Code.gs` necesitan barras dobles en el código fuente —por ejemplo, `\\tau`— para que el texto enviado a MathJax conserve `\tau`.

Tras subir el código corregido al proyecto:

1. En el editor de Apps Script, selecciona `repairANCOVAQuestionBank_` y pulsa **Ejecutar**. Esto vuelve a escribir las 10 preguntas en la hoja `Preguntas`; conserva las entregas existentes en `Respuestas`.
2. En **Implementar → Gestionar implementaciones**, edita la implementación activa y selecciona una versión nueva.
3. Abre el enlace `/exec` y comprueba las fórmulas de las preguntas 2 y 5 y las opciones de la pregunta 3.

No ejecutes `setupANCOVAQuiz_` para reparar esto: crea la hoja inicial solo si no existe y no reemplaza el banco ya creado.

## Sincronizar GitHub y Apps Script

La forma sencilla es guardar el código en GitHub y sincronizarlo desde tu ordenador con `clasp` cuando quieras actualizar el cuestionario. Google documenta `clasp` como su herramienta para descargar, subir y versionar proyectos de Apps Script: <https://developers.google.com/apps-script/guides/clasp>.

1. Instala Node.js 20 o posterior y, en una terminal, ejecuta `npm install -g @google/clasp`.
2. Ejecuta `clasp login` e inicia sesión con la cuenta propietaria del proyecto de Apps Script.
3. En Apps Script, abre **Configuración del proyecto** y copia el **ID de secuencia de comandos**. No uses el ID de despliegue que aparece en la URL `/exec`.
4. En este directorio, crea localmente un archivo `.clasp.json` con esta estructura, reemplazando el valor por el ID de secuencia de comandos:

   ```json
   { "scriptId": "TU_ID_DE_SECUENCIA_DE_COMANDOS", "rootDir": "." }
   ```

   `.clasp.json` está excluido de Git para que la configuración local no se publique.
5. Para subir los cambios de este directorio a Apps Script, ejecuta `clasp push --force`. Revisa los cambios en el editor, ejecuta `repairANCOVAQuestionBank_` una vez y crea una versión nueva de la implementación web.
6. Guarda cada cambio en GitHub con un commit para tener el historial y poder recuperar versiones anteriores.

`clasp push --force` reemplaza el código de Apps Script con los archivos de este directorio; úsalo solo después de revisar qué archivos vas a subir. No guardes credenciales de Google ni el archivo `.clasprc.json` en el repositorio.

## Puesta en marcha inicial

1. En Google Apps Script, crea un archivo `Code.gs` y un archivo HTML llamado `Index`; copia el contenido de este directorio.
2. Ejecuta una vez `setupANCOVAQuiz_` y autoriza la creación de la hoja de respuestas.
3. Despliega como aplicación web, ejecutada como propietario y accesible para cualquier usuario. Copia la URL `/exec` y conéctala a la página de ANCOVA del sitio.

Las preguntas se guardan en `Preguntas`; las entregas, en `Respuestas`; el resumen docente, en `Resumen`. El proyecto no expone una función pública para consultar las respuestas de la clase.
