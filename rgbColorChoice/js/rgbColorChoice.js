function changeRGB () {
	var redNumber = document.getElementById("red").value;
	var greenNumber = document.getElementById("green").value;
	var blueNumber = document.getElementById("blue").value;
	document.getElementById("indicator").innerHTML = "rgb(" + redNumber + "," + greenNumber + "," + blueNumber + ")";
	document.body.style.backgroundColor = "rgb(" + redNumber + "," + greenNumber + "," + blueNumber + ")";
}

document.getElementById("cta").onclick = changeRGB;
