var a10;
var a20;
var a30;
var a40;
var a50;
var n10;
var n20;
var n30;
var n40;
var n50;
var red;
var orange;
var out = 0;
var green;
var blue;
var m2;
var m3;
var m4;
var m5;
var m6;
var d2;
var d3;
var d4;
var d5;
var d6;

document.getElementById("a10").onclick = function() {
	out = out + 10;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("a20").onclick = function() {
	out = out + 20;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("a30").onclick = function() {
	out = out + 30;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("a40").onclick = function() {
	out = out + 40;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("a50").onclick = function() {
	out = out + 50;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("n10").onclick = function() {
	out = out - 10;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("n20").onclick = function() {
	out = out - 20;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("n30").onclick = function() {
	out = out - 30;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("n40").onclick = function() {
	out = out - 40;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("n50").onclick = function() {
	out = out - 50;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("red").onclick = function() {
	document.getElementById("out").style.backgroundColor = "red";
}

document.getElementById("orange").onclick = function() {
	document.getElementById("out").style.backgroundColor = "orange";
}

document.getElementById("green").onclick = function() {
	document.getElementById("out").style.backgroundColor = "green";
}

document.getElementById("blue").onclick = function() {
	document.getElementById("out").style.backgroundColor = "blue";
}

document.getElementById("m2").onclick = function() {
	out = out * 2;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("m3").onclick = function() {
	out = out * 3;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("m4").onclick = function() {
	out = out * 4;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("m5").onclick = function() {
	out = out * 5;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("m6").onclick = function() {
	out = out * 6;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("d2").onclick = function() {
	out = out / 2;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("d3").onclick = function() {
	out = out / 3;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("d4").onclick = function() {
	out = out / 4;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("d5").onclick = function() {
	out = out / 5;
	document.getElementById("out").innerHTML = out;
}

document.getElementById("d6").onclick = function() {
	out = out / 6;
	document.getElementById("out").innerHTML = out;
}