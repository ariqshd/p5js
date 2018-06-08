
    let Cd  = 0.47; //Dimensionless
    let rho = 1.22; //kg . m^3
    let ag  = 9.81; // m/ s^2
    let frameRate = 1/40; //seconds
class CannonBall {

  constructor(x, y) {
    //this.mass = 1;
    this.position = new createVector(x, y);
    this.velocity = new createVector(0, 0);
    this.acceleration = new createVector();
    this.r = 8;
  }
  
  // Standard Euler integration
   update() {

    this.acceleration.mult(frameRate); //frameRate diberikan untuk penyesuaian gerak 
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

  }

  // Semua Gaya dimasukan kesini (F_total) lalu dibagi dengan massa >>> a = F_total/massa
   applyForce(force) {
    let f = p5.Vector.div(force, massSlider.value());
    this.acceleration.add(f);
  }


   display() {
    stroke(0);
    strokeWeight(2);
    push();
    translate(this.position.x, this.position.y);
    fill(100,100,100);
    ellipse(0, 0, this.r*2, this.r*2);
    
    pop();
    
  }
  checkEdges(){
  if (ball.position.x > width) {
    ball.position.x = width;
    ball.velocity.x *= -1;
  }else if (ball.position.x < 0) {
      ball.velocity.x *= -1;
      ball.position.x = 0;
    }
  if (ball.position.y > height) {
    ball.velocity.y *= -0.3; // A little dampening when hitting the bottom
    ball.position.y = height;
    ball.velocity.x *= -0.1;
  }
  let d = dist(ball.position.x, ball.position.y, liquid.w/1.5, liquid.h/1.2)
  if (d < liquid.t){
    ball.velocity.x *= -0.5;
    ball.velocity.y *= -0.5;

  }
}
}

//   calculateAir() {
  //   // Magnitude is coefficient * speed squared
  //   let Cd  = 0.47; //Dimensionless
  //   let rho = 1.22; //kg . m^3
  //   let ag  = 9.81; // m/ s^2
  //   let A   = PI * slider.value()*slider.value()/1000; //m^2
  //   let speed = this.velocity.mag();
  //   Fx = -0.5 * Cd * A * rho * ball.velocity.x * ball.velocity.x * ball.velocity.x / Math.abs(ball.velocity.x);
  //   Fy = -0.5 * Cd * A * rho * ball.velocity.y * ball.velocity.y * ball.velocity.y / Math.abs(ball.velocity.y);



  //   Fx = (isNaN(Fx) ? 0 : Fx);
  //   Fy = (isNaN(Fy) ? 0 : Fy);    
  //   ax = Fx / ball.mass;
  //   ay = 9.81+(Fy / ball.mass);

  //   // // Direction is inverse of velocity
  //   // let airForce = this.velocity.copy();
  //   // airForce.mult(-1);

  //   // // Scale according to magnitude
  //   // // dragForce.setMag(dragMagnitude);
  //   // airForce.normalize();
  //   // airForce.mult(airMagnitude);
  //   // return airForce;
  // }