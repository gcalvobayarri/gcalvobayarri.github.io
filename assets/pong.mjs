import { Pong } from './pong-engine.mjs?v=2';

const es = document.documentElement.lang === 'es';
const t = es ? {
  launch: '¿Un descanso?', title: 'Pong bayesiano', subtitle: 'Tú contra la incertidumbre. A cinco puntos.',
  you: 'Tú', rival: 'Incertidumbre', goal: 'A 5', close: 'Cerrar juego', start: 'Empezar', resume: 'Continuar', again: 'Otra partida', pause: 'Pausar',
  ready: '¿Podrás reducir la incertidumbre?', paused: 'Hasta la incertidumbre necesita un descanso.', win: '¡Evidencia a tu favor!', lose: 'La incertidumbre se impone. Por ahora.',
  level: 'Dificultad', easy: 'Prior amable', normal: 'Posterior exigente', insane: 'Posterior puntual insana',
  insaneReady: 'Modo imposible: varianza cero. Piedad también.',
  insaneWelcome: 'La posterior lo sabe todo. Tu autoestima corre por tu cuenta.',
  insaneLost: 'No era falta de talento. Era una posterior degenerada.',
  help: 'Tu paleta está a la izquierda. Desliza el dedo por la pista o mueve el ratón. Teclado: ↑ / ↓ o W / S; espacio para pausar. Escape para cerrar.',
  welcome: 'La paleta es tuya. Las excusas, del modelo.',
  points: ['¡Tu hipótesis sigue en juego!', 'La incertidumbre acaba de perder un punto.', 'Buen ajuste. Sin sobreajuste.', 'Tu posterior acaba de mejorar.'],
  misses: ['Los datos no apoyan tu estrategia.', 'No es un fallo: es variabilidad residual.', 'Quizá haga falta una prior más informativa.', 'Ese punto estaba fuera del intervalo.'],
  won: 'Resultado significativo… para tu autoestima.', lost: 'No rechaces tu talento por una sola muestra.'
} : {
  launch: 'Take a break?', title: 'Bayesian Pong', subtitle: 'You versus uncertainty. First to five.',
  you: 'You', rival: 'Uncertainty', goal: 'First to 5', close: 'Close game', start: 'Start', resume: 'Resume', again: 'Play again', pause: 'Pause',
  ready: 'Can you reduce uncertainty?', paused: 'Even uncertainty needs a break.', win: 'Evidence in your favour!', lose: 'Uncertainty wins. For now.',
  level: 'Difficulty', easy: 'Friendly prior', normal: 'Demanding posterior', insane: 'Insane point-mass posterior',
  insaneReady: 'Impossible mode: zero variance. Zero mercy.',
  insaneWelcome: 'The posterior knows everything. Your self-esteem is on its own.',
  insaneLost: 'Not a lack of talent. Just a degenerate posterior.',
  help: 'Your paddle is on the left. Slide a finger anywhere on the court or move your mouse. Keyboard: ↑ / ↓ or W / S; space to pause. Escape to close.',
  welcome: 'You control the paddle. Blame the model.',
  points: ['Your hypothesis is still in play!', 'Uncertainty just lost a point.', 'A good fit. No overfitting.', 'Your posterior just improved.'],
  misses: ['The data do not support your strategy.', 'Not a mistake: residual variability.', 'Perhaps a more informative prior?', 'That point was outside the interval.'],
  won: 'A significant result… for your self-esteem.', lost: 'Do not reject your talent on a single sample.'
};
const launch = document.createElement('button');
launch.type = 'button'; launch.className = 'pong-launch'; launch.setAttribute('aria-haspopup', 'dialog');
launch.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 5v9M20 10v9"/><circle cx="12" cy="10" r="2"/></svg><span>${t.launch}</span>`;
const dialog = document.createElement('dialog');
dialog.className = 'pong-dialog'; dialog.setAttribute('aria-labelledby', 'pong-title');
dialog.innerHTML = `
  <div class="pong-header"><div><h2 id="pong-title">${t.title}</h2><p>${t.subtitle}</p></div><button type="button" class="pong-close" aria-label="${t.close}">×</button></div>
  <div class="pong-scores" aria-live="polite" aria-atomic="true"><div>${t.you}<b data-score="0">0</b></div><small>${t.goal}</small><div>${t.rival}<b data-score="1">0</b></div></div>
  <div class="pong-arena"><canvas class="pong-canvas" tabindex="0" role="img" aria-label="${t.title}" aria-describedby="pong-help">${t.help}</canvas>
  <div class="pong-overlay"><p></p><button type="button" class="pong-primary"></button></div></div>
  <p class="pong-message" role="status"></p>
  <div class="pong-controls"><button type="button" class="pong-secondary" disabled>${t.pause}</button><label>${t.level}<select><option value="easy">${t.easy}</option><option value="normal">${t.normal}</option><option value="insane">${t.insane}</option></select></label></div>
  <p class="pong-help" id="pong-help">${t.help}</p>`;
// A failed/unsupported dialog must never leave an unusable launcher on the page.
if (typeof dialog.showModal === 'function') initialise();

function initialise() {
  document.body.append(launch, dialog);
  const canvas = dialog.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) { launch.remove(); dialog.remove(); return; }
  const overlay = dialog.querySelector('.pong-overlay');
  const overlayText = overlay.querySelector('p');
  const action = overlay.querySelector('button');
  const pause = dialog.querySelector('.pong-secondary');
  const level = dialog.querySelector('select');
  const message = dialog.querySelector('.pong-message');
  const scores = dialog.querySelectorAll('[data-score]');
  const game = new Pong();
  const keys = new Set();
  let state = 'ready', frame = 0, last = 0, activePointer = null, oldOverflow = '';

  function update() {
    scores.forEach((node, i) => { node.textContent = game.score[i]; });
    overlay.hidden = state === 'running';
    overlayText.textContent = state === 'ready' ? (level.value === 'insane' ? t.insaneReady : t.ready) : state === 'paused' ? t.paused : game.winner === 0 ? t.win : t.lose;
    action.textContent = state === 'ready' ? t.start : state === 'paused' ? t.resume : t.again;
    pause.disabled = state === 'ready' || state === 'over';
    pause.textContent = state === 'paused' ? t.resume : t.pause;
    level.disabled = state === 'running' || state === 'paused';
  }
  function fit() {
    if (!dialog.open) return;
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr); canvas.height = Math.round(rect.height * dpr);
    game.resize(600 * rect.height / rect.width);
    draw();
  }
  function draw() {
    ctx.setTransform(canvas.width / game.w, 0, 0, canvas.height / game.h, 0, 0);
    ctx.fillStyle = '#1e2a38'; ctx.fillRect(0, 0, game.w, game.h);
    ctx.strokeStyle = '#f2efe62b'; ctx.lineWidth = 2; ctx.setLineDash([8, 11]);
    ctx.beginPath(); ctx.moveTo(game.w / 2, 12); ctx.lineTo(game.w / 2, game.h - 12); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#f2efe6'; ctx.fillRect(game.leftX, game.player - game.paddleHeight / 2, game.paddleWidth, game.paddleHeight);
    ctx.fillStyle = '#d5b782'; ctx.fillRect(game.rightX, game.ai - game.paddleHeight / 2, game.paddleWidth, game.paddleHeight);
    ctx.fillStyle = '#f2efe6'; ctx.beginPath(); ctx.arc(game.ball.x, game.ball.y, game.radius, 0, Math.PI * 2); ctx.fill();
    if (state === 'running' && game.wait > 0) {
      ctx.fillStyle = '#f2efe6'; ctx.font = '500 22px "Helvetica Neue", Arial, sans-serif'; ctx.textAlign = 'center';
      ctx.fillText(es ? 'Preparados…' : 'Ready…', game.w / 2, game.h / 2 - 35);
    }
  }
  function stop() { cancelAnimationFrame(frame); frame = 0; keys.clear(); activePointer = null; }
  function freeze() {
    if (state !== 'running') return;
    state = 'paused'; stop(); update(); draw();
  }
  function loop(now) {
    if (state !== 'running' || !dialog.open) return;
    const direction = Number(keys.has('ArrowDown') || keys.has('s')) - Number(keys.has('ArrowUp') || keys.has('w'));
    const event = game.tick((now - last) / 1000, direction); last = now;
    if (event) {
      if (event.winner !== null) {
        state = 'over'; message.textContent = event.winner === 0 ? t.won : game.difficulty === 'insane' ? t.insaneLost : t.lost; stop();
      } else {
        const lines = event.scorer === 0 ? t.points : t.misses;
        message.textContent = lines[Math.floor(Math.random() * lines.length)];
      }
      update();
    }
    draw();
    if (state === 'running') frame = requestAnimationFrame(loop);
  }
  function play() {
    if (state === 'running') return;
    if (state !== 'paused') { game.difficulty = level.value; game.reset(); message.textContent = level.value === 'insane' ? t.insaneWelcome : t.welcome; }
    state = 'running'; keys.clear(); update(); canvas.focus({ preventScroll: true });
    last = performance.now(); frame = requestAnimationFrame(loop);
  }
  launch.addEventListener('click', () => {
    oldOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    dialog.showModal(); update(); fit(); action.focus({ preventScroll: true });
  });
  dialog.querySelector('.pong-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    freeze(); stop(); document.body.style.overflow = oldOverflow; launch.focus({ preventScroll: true });
  });
  action.addEventListener('click', play);
  level.addEventListener('change', () => {
    if (state === 'running' || state === 'paused') return;
    game.difficulty = level.value; game.reset(); state = 'ready';
    message.textContent = level.value === 'insane' ? t.insaneWelcome : t.welcome;
    update(); draw();
  });
  pause.addEventListener('click', () => state === 'running' ? freeze() : play());
  canvas.addEventListener('keydown', (event) => {
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(key)) { event.preventDefault(); keys.add(key); }
    if (key === ' ' && !event.repeat) { event.preventDefault(); state === 'running' ? freeze() : play(); }
  });
  window.addEventListener('keyup', (event) => keys.delete(event.key.length === 1 ? event.key.toLowerCase() : event.key));
  canvas.addEventListener('blur', () => keys.clear());
  function move(event) {
    if (state !== 'running') return;
    const rect = canvas.getBoundingClientRect(); game.move((event.clientY - rect.top) / rect.height * game.h);
  }
  canvas.addEventListener('pointerdown', (event) => {
    if (state !== 'running' || !event.isPrimary) return;
    activePointer = event.pointerId; canvas.setPointerCapture(event.pointerId); canvas.focus({ preventScroll: true }); move(event);
  });
  canvas.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'mouse' || event.pointerId === activePointer) move(event);
  });
  for (const type of ['pointerup', 'pointercancel', 'lostpointercapture']) canvas.addEventListener(type, () => { activePointer = null; });
  document.addEventListener('visibilitychange', () => { if (document.hidden) freeze(); });
  window.addEventListener('blur', freeze);
  window.addEventListener('resize', fit);
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(canvas);
  message.textContent = t.welcome; update();
}
