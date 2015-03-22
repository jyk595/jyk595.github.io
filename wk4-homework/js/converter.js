function changeFarenheit() {
	var degreeCelcius = document.getElementById("cdegree").value;
	document.getElementById("fdegree").value = (degreeCelcius*9)/5+32;
}

document.getElementById("cdegree").oninput = changeFarenheit;

function changeCelcius() {
	var degreeFarenheit = document.getElementById("fdegree").value;
	document.getElementById("cdegree").value = ((degreeFarenheit-32)*5)/9;
}

document.getElementById("fdegree").oninput = changeCelcius;

function changeImage () {
	var degreeCelcius = document.getElementById("cdegree").value;
	if (degreeCelcius<=10) {
		document.body.style.backgroundImage = "url('images/mcginley10.jpg')";
	}

	else if (degreeCelcius>10 && degreeCelcius<=20) {
		document.body.style.backgroundImage = "url('images/mcginley20.jpg')";
	}

	else if (degreeCelcius>20 && degreeCelcius<=30) {
		document.body.style.backgroundImage = "url('images/mcginley30.jpg')";
	}
	
	else if (degreeCelcius>30 && degreeCelcius<=40) {
		document.body.style.backgroundImage = "url('images/mcginley40.jpg')";
	}

	else if (degreeCelcius>40 && degreeCelcius<=50) {
		document.body.style.backgroundImage = "url('images/mcginley50.jpg')";
	}

	else if (degreeCelcius>50 && degreeCelcius<=80) {
		document.body.style.backgroundImage = "url('images/mcginley60.jpg')";
	}

	else if (degreeCelcius>80) {
		document.body.style.backgroundImage = "url('images/mcginley80.jpg')";
	}
}

// document.getElementById("cdegree").oninput = changeImage;
