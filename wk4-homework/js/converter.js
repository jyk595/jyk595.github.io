function changeFahrenheit() {
	var degreeCelsius = document.getElementById("cdegree").value;
	document.getElementById("fdegree").value = (degreeCelsius*9)/5+32;
	changeImage(degreeCelsius);
}

function changeCelsius() {
	var degreeFahrenheit = document.getElementById("fdegree").value;
	var degreeCelsius = ((degreeFahrenheit-32)*5)/9;
	document.getElementById("cdegree").value = degreeCelsius;
	changeImage(degreeCelsius);
}


function changeImage (degreeCelsius) {
	if (degreeCelsius<=10) {
		document.body.style.backgroundImage = "url('images/mcginley10.jpg')";
	}
	else if (degreeCelsius>10 && degreeCelsius<=20) {
		document.body.style.backgroundImage = "url('images/mcginley20.jpg')";
	}
	else if (degreeCelsius>20 && degreeCelsius<=30) {
		document.body.style.backgroundImage = "url('images/mcginley30.jpg')";
	}
	else if (degreeCelsius>30 && degreeCelsius<=40) {
		document.body.style.backgroundImage = "url('images/mcginley40.jpg')";
	}
	else if (degreeCelsius>40 && degreeCelsius<=50) {
		document.body.style.backgroundImage = "url('images/mcginley50.jpg')";
	}
	else if (degreeCelsius>50 && degreeCelsius<=80) {
		document.body.style.backgroundImage = "url('images/mcginley60.jpg')";
	}
	else if (degreeCelsius>80) {
		document.body.style.backgroundImage = "url('images/mcginley80.jpg')";
	}
}

document.getElementById("cdegree").oninput = changeFahrenheit;
document.getElementById("fdegree").oninput = changeCelsius;

