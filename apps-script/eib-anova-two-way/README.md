# ANOVA de dos vías · autoevaluación EIB

Cuestionario de práctica de 10 preguntas con corrección individual, explicaciones y registro docente en una hoja privada de Google Sheets. La interfaz conserva la tipografía, la paleta azul y marfil y las tarjetas del resto de la web. MathJax compone las expresiones matemáticas.

## Archivos

- `Code.gs`: banco inicial de preguntas, configuración de las pestañas Preguntas/Respuestas/Resumen y lógica de corrección.
- `Index.html`: interfaz del cuestionario, con progreso, entrada de nombre, fórmulas y devolución de comentarios al finalizar.
- `../../es/docencia/anova-dos-vias.html`: página de la web que aloja la aplicación. `webAppUrl` queda vacío hasta conectar el despliegue de Apps Script.

## Puesta en marcha

1. Crear un proyecto nuevo en Google Apps Script y copiar `Code.gs`; añadir un archivo HTML llamado `Index` y copiar `Index.html`.
2. Ejecutar una vez `setupTwoWayANOVAQuiz_` y autorizar la creación de la hoja de respuestas.
3. Crear un despliegue **Aplicación web** que se ejecute como el propietario. Para que el estudiantado pueda responder sin iniciar sesión, configurar el acceso como **Cualquier usuario**. Copiar la URL `/exec`.
4. Pegar esa URL en `webAppUrl` dentro de `es/docencia/anova-dos-vias.html` y actualizar el archivo en el repositorio.
5. Tras cualquier cambio en Apps Script, editar el despliegue activo y seleccionar una versión nueva.

El banco editable queda en `Preguntas`; las entregas se guardan en `Respuestas`; el resumen docente presenta intentos, puntuación media y porcentaje de acierto por pregunta. El script no ofrece al público una función para leer la hoja de respuestas.
