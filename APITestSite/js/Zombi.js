var arrofEnts = [];
var CLIENTCOUNT = 0;
document.addEventListener('keypress', (e) =>{
	if(e.key === 'Enter'){
		alert(`Your Score Was ${CLIENTCOUNT}!`);
		CLIENTCOUNT = 0;
		document.getElementById("Score").innerHTML = `Score: ${CLIENTCOUNT}`;
	}
});
function createZombi(){
	console.log("Hole");
	newZomb = document.createElement("img");
	newZomb.src = "Images/Zombi2.png";
	newZomb.setAttribute("style", `left: ${(Math.random() * (window.innerWidth -150)) + "px"}; top: ${(Math.random() * (window.innerHeight-220)) + 65 + "px"}; width: 150px; height: 150px; position: absolute; z-index: -1;`);
	newZomb.addEventListener('click', () => {document.getElementById("PlayBoard").removeChild(document.elementFromPoint(event.clientX, event.clientY)); arrofEnts.splice(arrofEnts.indexOf(document.elementFromPoint(event.clientX, event.clientY)), 1);CLIENTCOUNT++;document.getElementById("Score").innerHTML = `Score: ${CLIENTCOUNT}`; if(arrofEnts.length < 5){createZombi();}});
	document.getElementById("PlayBoard").appendChild(newZomb);
	arrofEnts.push(newZomb);
}
for(i = 0; i < 6; i++){
createZombi();}
