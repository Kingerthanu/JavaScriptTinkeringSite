// JavaScript Document
ele = document.getElementsByClassName("nav-item dropdown");
ele[0].className = "nav-item dropdown active";
delete ele;
var PictureOfCanvas = document.createElement("img");
var oldPos;
var newPos;
var active = false;
var drawingState;
function clearCanv(){
	if(active){
		active = false;
	}
	contxtRegion.clearRect(0,0, canvRegion.width, canvRegion.height);
}
function changeStrokeStyle(nC){
	contxtRegion.strokeStyle = nC;
}
function startEvent(e){
	if (document.onmousemove != drawLine) {
		document.onmousemove = drawLine;
	}else{
		document.onmousemove = null;
		active = false;
	}
}
PictureOfCanvas.style.top = "300px";
PictureOfCanvas.style.left = "450px";
PictureOfCanvas.width = 1024;
PictureOfCanvas.height = 996;
PictureOfCanvas.style.zIndex = -1;
PictureOfCanvas.style.position = "absolute";
PictureOfCanvas.src = "Images/canvas.png";
document.getElementById("Mdiv").appendChild(PictureOfCanvas);
const canvRegion = document.getElementById("drawingRegion");
const contxtRegion = canvRegion.getContext('2d');
canvRegion.addEventListener("click", startEvent);
contxtRegion.fillStyle = "#FF0000";
function drawLine(e){
	CurX = e.pageX - canvRegion.offsetLeft;
	CurY = e.pageY - canvRegion.offsetTop;
	if(active){
		contxtRegion.lineTo(CurX, CurY);
		contxtRegion.stroke();
	}else{
		contxtRegion.beginPath();
		contxtRegion.moveTo(CurX,CurY);
		active = true;
	}
}
