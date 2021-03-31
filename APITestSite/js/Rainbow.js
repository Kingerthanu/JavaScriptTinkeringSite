let Pwidth = window.innerWidth;
ele = document.getElementsByClassName("nav-item dropdown");
ele[0].className = "nav-item dropdown active";
delete ele;
let Pheight = window.innerHeight;
let CurCanvas = document.getElementById("main");
let CurSwitch = document.getElementById("switch");
var CurRender = CurCanvas.getContext("2d");
var r = 0;
var g = 0;
var b = 0;
var RainbowWidth = 0;
var RainbowHeight = 0;
var dState = false;
var WidthSwitch = false;
var HeightSwitch = false;
function rgbToHex(fr,fg,fb){
  let Cr = fr.toString(16);
  let Cg = fg.toString(16);
  let Cb = fb.toString(16);
  if (Cr.length == 1)
    Cr = "0" + Cr;
  if (Cg.length == 1)
    Cg = "0" + Cg;
  if (Cb.length == 1)
    Cb = "0" + Cb;
  console.log("#" + Cr + Cg + Cb);
  return "#" + Cr + Cg + Cb;
}
function setOrientation(d){
	switch(d){
		case "U":
			HeightSwitch = true;
			WidthSwitch = false;
			RainbowHeight = CurCanvas.height;
			RainbowWidth = 0;
			break;
		case "D":
			HeightSwitch = null;
			WidthSwitch = false;
			RainbowWidth = RainbowHeight = 0;
			break;
		case "L":
			WidthSwitch = true;
			HeightSwitch = false;
			RainbowWidth = CurCanvas.width;
			RainbowHeight = 0;
			break;
		case "R":
			WidthSwitch = null;
			HeightSwitch = false;
			RainbowWidth = RainbowHeight = 0;
			break;
	}
}
window.onresize = function updateSizeCanvas(){
	CurCanvas.width = Pwidth = window.innerWidth;
	CurCanvas.height = Pheight = window.innerHeight;
	CurSwitch.style.left = `${(CurCanvas.width/2)}px`;
	updateCanvas();
	console.log(window.innerWidth);
}
const updateCanvas = () => {CurRender.fillStyle = `${rgbToHex(r,g,b)}`;
	if (HeightSwitch == null){
		CurRender.fillRect(RainbowWidth,RainbowHeight, CurCanvas.width, -CurCanvas.height);
	}else if(WidthSwitch == null){
		CurRender.fillRect(RainbowWidth,RainbowHeight, -CurCanvas.width, CurCanvas.height);
	}else{
		CurRender.fillRect(RainbowWidth,RainbowHeight, CurCanvas.width, CurCanvas.height);}}
function setTimer(){console.log("Running");CurRender.clearRect(0,0, window.innerWidth, window.innerHeight);document.getElementById("switch").innerHTML = "Stop";state = setInterval(RainbowFlow, 10);RainbowState = setInterval(RainbowFlowWiden, 100); document.getElementById("switch").onclick = stopTimer;document.getElementById("UpButton").onclick = stopTimer;document.getElementById("DownButton").onclick = stopTimer;document.getElementById("LeftButton").onclick = stopTimer;document.getElementById("RightButton").onclick = stopTimer;}
function stopTimer(){console.log("Ran");clearInterval(state);clearInterval(RainbowState);document.getElementById("switch").innerHTML = "Start";document.getElementById("switch").onclick = setTimer;document.getElementById("UpButton").onclick = function () {setOrientation('U');};document.getElementById("DownButton").onclick = function () {setOrientation('D');};document.getElementById("LeftButton").onclick = function () {setOrientation('L');};document.getElementById("RightButton").onclick = function () {setOrientation('R');}}
function RainbowFlowWiden(){
	if (WidthSwitch == true && RainbowWidth >= 0){
		RainbowWidth -= 50;
	}
	else if (WidthSwitch == null && RainbowWidth <= CurCanvas.width){
		RainbowWidth += 50;
	}
	else if (HeightSwitch == true && RainbowHeight >= 0){
		RainbowHeight -= 50;
	}
	else if (HeightSwitch == null && RainbowHeight <= CurCanvas.height){
		RainbowHeight += 50;
	}
	else{
		// Final declaration when rainbow is covering screen
		RainbowWidth = 0;
		RainbowHeight = 0;
		HeightSwitch = WidthSwitch = false;
		clearInterval(RainbowState);
	}
}
function RainbowFlow(){
	if(dState == false && r != 255){
		r++;
		updateCanvas();
	}
	else if (dState == false && r == 255 && g != 255){
		g++;
		updateCanvas();
	}
	else if (dState == false && g == 255 && b != 255){
		b++;
		updateCanvas();
		
	}
	else if (dState == false && b == 255){
		dState = true;
	}
	else if (dState == true && r != 0){
		r--;
		updateCanvas();
	}
	else if (dState == true && b != 0){
		b--;
		updateCanvas();
	}
	else if (dState == true && g != 0){
		g--;
		updateCanvas();
	}
	else if (r == 0){
		dState = false;
	}
	console.log(`${r}, ${g}, ${b}`);
	}
CurCanvas.style.top = "0px";
CurCanvas.style.left = "0px";
CurCanvas.width = Pwidth;
CurCanvas.height = Pheight;
CurCanvas.style.position = "absolute";
CurRender.fillStyle = `${rgbToHex(25,25,5)}`;
CurRender.fillRect(0,0, Pwidth, Pheight);
console.log(`${Pwidth}, ${Pheight}`);
