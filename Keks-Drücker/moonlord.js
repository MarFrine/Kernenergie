var cookies = 0;
var count = 1;
var totalClicks = 0;
var CookiesPerSecond = 0;

var preisMult = 1.15;
var klickerAnzahl = 0;
var klickerPreis = 50;
var atomAnzahl = 0;
var atomPreis = 300;
var fabrikAnzahl = 0;
var fabrikPreis = 1500;
var infernoAnzahl = 0;
var infernoPreis = 5000;
var engelAnzahl = 0;
var engelPreis = 20000;

var winkel = 0;
var testen;
var x1;
var x2;
var y1;
var y2;
var aWinkel;
var atomwinkel = 0;

var klickerName = [];
var klickerNum = 1;





refreshText();
refreshKlicker();
refreshAtom();
setInterval(refreshCookies, 250);




function refreshText() {
	
	
	document.getElementById("titel").innerHTML = "Keks-Drücker - " + Math.floor(cookies) + " Kekse";
	document.getElementById("anzeige").innerHTML = "Kekse: " + Math.floor(cookies);
	document.getElementById("zeigen").innerHTML = "Kekse pro Klick: " + count;
	document.getElementById("klicke").innerHTML = "Preis: " + Math.round(Math.pow((2/Math.PI * count), (2*Math.sqrt(2)))*50);
	document.getElementById("cookiesPerSecondDisplay").innerHTML = "Kekse pro Sekunde: " + CookiesPerSecond;
	
	document.getElementById("klicker_A").innerHTML = "Preis: " + klickerPreis;
	document.getElementById("klicker_P").innerHTML = "Im Besitz: " + klickerAnzahl;
	document.getElementById("atom_A").innerHTML = "Preis: " + atomPreis;
	document.getElementById("atom_P").innerHTML = "Im Besitz: " + atomAnzahl;
	document.getElementById("fabrik_A").innerHTML = "Preis: " + fabrikPreis;
	document.getElementById("fabrik_P").innerHTML = "Im Besitz: " + fabrikAnzahl;
	document.getElementById("inferno_A").innerHTML = "Preis: " + infernoPreis;
	document.getElementById("inferno_P").innerHTML = "Im Besitz: " + infernoAnzahl;
	document.getElementById("engel_A").innerHTML = "Preis: " + engelPreis;
	document.getElementById("engel_P").innerHTML = "Im Besitz: " + engelAnzahl;
	
	setTimeout(refreshText, 200)
}

function refreshCookies() {
	cookies = cookies + (CookiesPerSecond/4)
}
		

function refreshKlicker(){
	
	if (klickerAnzahl >= 1){
		x1 = Math.cos((winkel + (7.2 * klickerNum))*Math.PI/180)*220+165;
		y1 = Math.sin((winkel + (7.2 * klickerNum))*Math.PI/180)*220+165;
		
		
	
		aWinkel = (winkel + 7.2 * klickerNum) + 310;
		document.getElementById(klickerName[klickerNum]).style.transform="rotate("+aWinkel+"deg)";
	
		document.getElementById(klickerName[klickerNum]).style.position="absolute";
		document.getElementById(klickerName[klickerNum]).style.left=x1+400;
		document.getElementById(klickerName[klickerNum]).style.top=y1;
	
	
		winkel = (winkel + 0.05) % 360;
	
		if (klickerNum < klickerAnzahl && klickerNum < 50) {
		
			klickerNum++;
		
		} else {
		
			klickerNum = 1;
		
		}
	}
	setTimeout(refreshKlicker, 1);
}

function refreshAtom() {
	
		x2 = Math.cos(atomwinkel*Math.PI/180)*600+575;
		y2 = Math.sin(atomwinkel*Math.PI/180)*225+200;
		
		
	
		document.getElementById("atom1").style.position="absolute";
		document.getElementById("atom1").style.left=x2;
		document.getElementById("atom1").style.top=y2;
	
	
		atomwinkel = (atomwinkel + 1) % 360;
	
	
	setTimeout(refreshAtom, 10);
}





/*for (var temp = 0; temp <= 360; temp++) {	
		
	z1 = Math.cos(temp)*190+190
	x2 = Math.cos(temp+1)*190+190
	z2 = Math.sin(temp)*190+190
	y2 = Math.sin(temp+1)*190+190
	
	testen = document.getElementById("linie").getContext("2d");
	testen.beginPath();
	testen.moveTo(z1,z2)
	testen.lineTo(x2,y2)
	testen.stroke();
		
}*/
/*

for (var temp = 0; temp <= 360; temp++) {	
		
	z1 = Math.cos(temp*Math.PI/180)*600+600
	x2 = Math.cos((temp+1)*Math.PI/180)*600+600
	z2 = Math.sin(temp*Math.PI/180)*225+225
	y2 = Math.sin((temp+1)*Math.PI/180)*225+225
	
	testen = document.getElementById("linie").getContext("2d");
	testen.beginPath();
	testen.moveTo(z1,z2)
	testen.lineTo(x2,y2)
	testen.stroke();
		
}
//*/

testen = document.getElementById("linie").getContext("2d");
testen.beginPath();
testen.ellipse(600, 225, 600, 225, 0, 0, 15);

testen.stroke();

		
		
		
function keks() {
	document.getElementById("audio1").play();
	cookies = cookies + count;
	totalClicks++;
}	

function klick() {
	if (cookies >= Math.round(Math.pow((2/Math.PI * count), (2*Math.sqrt(2)))*50)) {
		cookies = Math.round(cookies -(Math.pow((2/Math.PI * count), (2*Math.sqrt(2)))*50));
		count++;
	} else {
		alert("nicht genügend Kekse");
	}
}

function cpsRound() {
	
	CookiesPerSecond = CookiesPerSecond.toFixed(1);
	CookiesPerSecond = parseFloat(CookiesPerSecond);
	
}

function klicker() {
	
	if (cookies >= klickerPreis) {
		cookies = cookies - klickerPreis;
		klickerAnzahl++;
		klickerPreis = Math.round(klickerPreis * preisMult);
		CookiesPerSecond = CookiesPerSecond + 0.2;
		cpsRound();
		
		if (klickerAnzahl <= 50) {
		
			klickerName[klickerAnzahl] = "klicker" + klickerAnzahl;
		
			var bild = document.createElement("img");
			bild.src = "quellen/Klicker.png";
			bild.id = klickerName[klickerAnzahl]
			bild.width = "50"
			document.getElementById("bereich").appendChild(bild);
		
			x2 = Math.cos((winkel + (7.2 * klickerAnzahl))*Math.PI/180)*220+165;
			y2 = Math.sin((winkel + (7.2 * klickerAnzahl))*Math.PI/180)*220+165;
	
			aWinkel = (winkel + 7.2 * klickerAnzahl) + 310;
			document.getElementById(klickerName[klickerAnzahl]).style.transform="rotate("+aWinkel+"deg)";
	
			document.getElementById(klickerName[klickerAnzahl]).style.position="absolute";
			document.getElementById(klickerName[klickerAnzahl]).style.left=x2;
			document.getElementById(klickerName[klickerAnzahl]).style.top=y2;
		
		}
		
	} else{
		alert("Nicht genügend Kekse");
	}	
}

function atom() {
	
	if (cookies >= atomPreis) {
		cookies = cookies - atomPreis;
		atomAnzahl++;
		atomPreis = Math.round(atomPreis * preisMult);
		CookiesPerSecond = CookiesPerSecond + 1.5;
		cpsRound();
	}else {
		alert("Nicht genügend Kekse");
	}	
}

function fabrik() {
	
	if (cookies >= fabrikPreis) {
		cookies = cookies - fabrikPreis;
		fabrikAnzahl++;
		fabrikPreis = Math.round(fabrikPreis * preisMult);
		CookiesPerSecond = CookiesPerSecond + 5;
		cpsRound();
	}else {
		alert("Nicht genügend Kekse");
	}	
}

function inferno() {
	
	if (cookies >= infernoPreis) {
		cookies = cookies - infernoPreis;
		infernoAnzahl++;
		infernoPreis = Math.round(infernoPreis * preisMult);
		CookiesPerSecond = CookiesPerSecond + 15;
		cpsRound();
	}else {
		alert("Nicht genügend Kekse");
	}	
}

function engel() {
	
	if (cookies >= engelPreis) {
		cookies = cookies - engelPreis;
		engelAnzahl++;
		engelPreis = Math.round(engelPreis * preisMult);
		CookiesPerSecond = CookiesPerSecond + 40;
		cpsRound();
	}else {
		alert("Nicht genügend Kekse");
	}	
}

document.getElementById("kopf").addEventListener("click", keks);
document.getElementById("klicker").addEventListener("click", klicker);
document.getElementById("atom").addEventListener("click", atom);
document.getElementById("fabrik").addEventListener("click", fabrik);
document.getElementById("inferno").addEventListener("click", inferno);
document.getElementById("engel").addEventListener("click", engel);