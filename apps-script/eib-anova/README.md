# ANOVA self-assessment pilot

This pilot replaces Google Forms for the first EIB quiz only. It has a branded quiz interface, requires a student name, grades all 12 questions, shows individual feedback after submission, and saves the attempt to a private Google spreadsheet. Students cannot open the response spreadsheet or see other students' results.

## Files

- `Code.gs`: Google Apps Script backend, the initial ANOVA question bank, and spreadsheet setup.
- `Index.html`: quiz interface served by Apps Script.
- `site/es/docencia/anova.html`: matching Spanish website page; its deployment URL is a placeholder until the web app is deployed.

## One-time setup in your Google account

1. Create a new project at [Google Apps Script](https://script.google.com/).
2. Replace `Code.gs` with the supplied `Code.gs`; add an HTML file named `Index` and paste in `Index.html`.
3. Run `setupANOVAQuiz_` and authorize Google Sheets access. It creates a spreadsheet with three tabs:
   - `Preguntas`: edit the prompt, four options, correct letter, explanation and hint here.
   - `Respuestas`: private individual submissions, including name, timestamp, score and answers.
   - `Resumen`: attempt count, mean score and percentage correct per question.
4. In Apps Script, choose **Deploy → New deployment → Web app**. Set **Execute as** to your account. To let students answer without signing into Google, set access to **Anyone**. The app exposes only the quiz and submission functions; it does not expose a function to read saved responses.
5. Copy the deployment URL ending in `/exec`. It will be inserted in the website page, and the page can then be linked from the Spanish Teaching section.

Because public respondents can submit data to a script running as the owner, keep the Apps Script code limited to this quiz workflow and do not add functions that return spreadsheet data. The current pilot validates names and answer indices, writes only the submitted attempt, and uses a script lock for simultaneous submissions.

## Editing later

Edit question text, options, correct letters, feedback, and hints in the `Preguntas` tab. These changes take effect immediately. Changes to the number of questions require updating the app structure and deploying a new version.
