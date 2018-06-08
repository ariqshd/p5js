  var t  = 0; var dt = 0.005; var tf=2.7;
  var x0 = 0; var x; 
  var y0 = 0; var y;
  var v0 = 8; var v0x; var v0y; var v0x2; var v0y2;
  var ax; var ay; 
  var g  = 9.81; 
  var X; var Y;
  theta = 45;
  var canvasX = 800; var canvasY = 400;
  var xmin = 0; var ymin = 0; var xmax = 50; var ymax = 25;
  var ccc = 0;

  var rho = 1.275; //kg/m3
  var rho2 = 1000;
  var D   = 0.5;
  var A;
  var r = 0.03; //m2
  var m = 100.45; //kg
  var h = 160;
  var sudutX; var sudutY; 
  var button;
  var set1;

function setup() {
  createCanvas(canvasX, canvasY);

 angleMode(DEGREES);
    sudutX = cos(theta);
    sudutY = sin(theta);
    x = x0;    
    v0x = v0 * sudutX;
    v0y = v0 * sudutY;
    v0x2 = v0x;
    v0y2 = v0y;
    A = PI * r * r; 

    button = createButton('start loop');
    button.mousePressed(startLoop);
background(90);  
}

function startLoop(){
  set1 = setInterval(looping, 1/60);
}
function stopLoop(){
  clearInterval(set1);
}

  function looping(){
      sudutX = cos(theta);
      sudutY = sin(theta);
      if( y > 0.00){
        rho = 1.27;
      }
      else if (y <= 0.00){
        rho = 1000.0;

      if(ccc = 1){
        sudutX = cos(atan(vy/vx));
        sudutY = sin(atan(vy/vx));
        ccc=2;
      }
       if(ccc = 0){
        
        x0 = x;
        y0 = y;
        ccc=1;
      }
      }
    
    Fdx = +(0.5*rho*v0x2*v0x2*D*A) * sudutX;
    Fdy = -(0.5*rho*v0y2*v0y2*D*A) * sudutY;
    W   = m*g;
    Fy  = W - Fdy ;

    ax  = Fdx/m;
    ay  = Fy/m;
    vx  = v0x + (ax*t);
    vy  = v0y + (ay*t);
    x   = x0 + (v0x*t)+(0.5*ax*t*t);
    y   = y0 + (v0y*t)-(0.5*ay*t*t);

    v0x2 = vx;
    v0y2 = vy;

    X = ((x - xmin)/(xmax - xmin)) * canvasX ;
    Y = -((y - ymin)/(ymax - ymin)) * canvasY + (canvasY/2);

    t += dt;
    // x += dx;
    if(t >tf){
      clearInterval(set1);
    }
draw();
console.log(y);
}




function draw() {

    

    push();
    scale(0.5);
    fill(255,60,221);
    translate(0, -50);
    ellipse(X, Y, 20, 20);
    pop();

    push();
    scale(0.5);
    noStroke();
    fill(204,226,255,90);
    rect(0,h,width,5);
    pop();
}
