class Liquid {
  constructor(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
    this.t = 10;
  }

  // Is the Mover in the Liquid?
  contains(m) {
    let l = m.position;
    return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h;
  }

  // Calculate drag force
  calculateDrag(m) {
    // Magnitude is coefficient * speed squared
    let A   = PI * ball.r*ball.r/10000;
    let speed = m.velocity.mag();
    let dragMagnitude = 0.5 * this.c * 0.47* A* speed * speed ; // c = rho(water) = 1000

    // Direction is inverse of velocity
    let dragForce = m.velocity.copy();
    dragForce.mult(-1);

    // Scale according to magnitude
    // dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  display() {
    noStroke();
    fill(0, 255, 255);
    rect(this.x, this.y, this.w, this.h);
    fill(255,0,0);
    stroke(0);
    strokeWeight(2);
    ellipse(this.w/1.5,this.h/1.2,this.t*2,this.t*2)
  }
}