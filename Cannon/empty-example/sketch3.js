function setup(){
createCanvas(800,400);

}


function draw(){
background(0);

var x  = 0;
var y  = 200;
if(x <= width/2){
  ellipse(x,y,20,20);
  x += 50;
} else if( y <= height){
  ellipse(x,y,20,20);
  y += 50;
}




}