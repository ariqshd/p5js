<!DOCTYPE html>
<html>
<body>
	<button onclick="init();">draw</button>
<script>
//membuat element canvas
var canvas = document.createElement('canvas');
//configurasi dari element canvas
canvas.id = "CursorLayer";
canvas.width = 1224;
canvas.height = 768;
canvas.style.zIndex = 8;
canvas.style.position = "absolute";
canvas.style.border = "1px solid";

//DOM document object model
var body = document.getElementsByTagName("body")[0];
body.appendChild(canvas);

cursorLayer = document.getElementById("CursorLayer");

console.log(cursorLayer);

var x=21,
	y=21,
	xo=5,
	xaksen,
	yaksen,
	a,
	t,
	//x1=500-radius,
	//y1=300-radius,
	radius=20,
	vx=0,
	//vy=0,
	g=0.8,
	s=50,
	teta= 30,
	vo= 0,
	deltat= 1,
	tbeg= 0,
	tend= 10,
	xomiring=30;

	t=tbeg;

	a=g*Math.sin(teta);


function init(){
	var id=setInterval(update,1000/10);
}


function update(){
	vx+=g;
	//vy+=g;

	x+=vx;
	//y+=vy;

	if(x>canvas.width-radius){
		clearInterval(id);
	}
	console.log(vx);
	draw();
}


function draw(){
var ctx = canvas.getContext("2d");
ctx.save();
ctx.clearRect(0,0,canvas.width,canvas.height);
ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.beginPath();
ctx.arc(x, y, radius, 0, 2*Math.PI, true);
ctx.fill();
ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
ctx.restore();

ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
ctx.beginPath();
ctx.moveTo(0, radius+21);
ctx.lineTo(canvas.width, radius+21);
ctx.closePath();
ctx.stroke();
}



</script>

</body>
</html>
