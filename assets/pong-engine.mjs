export class Pong {
  constructor(height = 450, random = Math.random) {
    this.w = 600; this.h = height; this.random = random;
    this.radius = 7; this.paddleWidth = 12; this.leftX = 24; this.rightX = 564;
    this.difficulty = 'easy'; this.reset();
  }
  get paddleHeight() { return this.h * .20; }
  clampY(y) { return Math.max(this.paddleHeight / 2, Math.min(this.h - this.paddleHeight / 2, y)); }
  reset() {
    this.player = this.h / 2; this.ai = this.h / 2;
    this.score = [0, 0]; this.winner = null; this.reaction = 0;
    this.target = this.ai; this.serve(1);
  }
  resize(height) {
    const factor = height / this.h;
    this.player *= factor; this.ai *= factor; this.target *= factor; this.ball.y *= factor;
    this.h = height;
  }
  serve(direction) {
    const angle = (this.random() - .5) * .65;
    const speed = this.difficulty === 'insane' ? 520 : this.difficulty === 'easy' ? 290 : 340;
    this.ball = { x: this.w / 2, y: this.h / 2, vx: direction * speed * Math.cos(angle), vy: speed * Math.sin(angle) };
    this.wait = .9;
  }
  move(y) { this.player = this.clampY(y); }
  tick(dt, keyboard = 0) {
    if (this.winner !== null) return null;
    let remaining = Math.min(Math.max(dt, 0), .05);
    while (remaining > 0) {
      const step = Math.min(remaining, 1 / 240); remaining -= step;
      this.move(this.player + keyboard * 600 * step);
      if (this.wait > 0) { this.wait -= step; continue; }
      this.reaction -= step;
      if (this.reaction <= 0) {
        const error = this.difficulty === 'easy' ? this.paddleHeight * .9 : this.paddleHeight * .6;
        this.target = this.ball.vx > 0 ? this.ball.y + (this.random() - .5) * error : this.h / 2;
        this.reaction = this.difficulty === 'easy' ? .22 : .14;
      }
      const aiSpeed = this.difficulty === 'easy' ? 205 : 280;
      this.ai = this.clampY(this.ai + Math.max(-aiSpeed * step, Math.min(aiSpeed * step, this.target - this.ai)));
      const b = this.ball;
      const oldX = b.x;
      b.x += b.vx * step; b.y += b.vy * step;
      if (b.y < this.radius) { b.y = 2 * this.radius - b.y; b.vy = Math.abs(b.vy); }
      if (b.y > this.h - this.radius) { b.y = 2 * (this.h - this.radius) - b.y; b.vy = -Math.abs(b.vy); }
      // The joke difficulty has zero uncertainty: it tracks every physics step.
      if (this.difficulty === 'insane') this.ai = this.clampY(b.y);
      const leftFace = this.leftX + this.paddleWidth + this.radius;
      const rightFace = this.rightX - this.radius;
      if (b.vx < 0 && oldX >= leftFace && b.x <= leftFace && Math.abs(b.y - this.player) <= this.paddleHeight / 2 + this.radius) {
        b.x = leftFace; this.bounce(this.player, 1);
      } else if (b.vx > 0 && oldX <= rightFace && b.x >= rightFace && Math.abs(b.y - this.ai) <= this.paddleHeight / 2 + this.radius) {
        b.x = rightFace; this.bounce(this.ai, -1);
      }
      if (b.x < -this.radius || b.x > this.w + this.radius) {
        const scorer = b.x < 0 ? 1 : 0;
        this.score[scorer]++;
        if (this.score[scorer] === 5) this.winner = scorer;
        else this.serve(scorer === 0 ? -1 : 1);
        return { scorer, winner: this.winner };
      }
    }
    return null;
  }
  bounce(center, direction) {
    const b = this.ball;
    const insane = this.difficulty === 'insane';
    const relative = insane && direction === -1
      ? (this.player < this.h / 2 ? .85 : -.85)
      : Math.max(-1, Math.min(1, (b.y - center) / (this.paddleHeight / 2)));
    const speed = Math.min(Math.hypot(b.vx, b.vy) * (insane ? 1.18 : 1.05), insane ? 1100 : 590);
    const angle = relative * Math.PI * .31;
    b.vx = direction * speed * Math.cos(angle); b.vy = speed * Math.sin(angle);
  }
}
