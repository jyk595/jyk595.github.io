$(document).ready(function(){
	$("#paragraphs").click(function(){
		$(this).val("");
		$(".ipsum").hide();
	});

	$("#paragraphs").keypress(function(e){
		var value = $("#paragraphs").val();

		if (e.which == 13) {
			if(value.length === 0) {
				alert("Please enter a value");
			} else {
				$("p:lt(" + value + ")").show();
				$(".ipsum").show();
			};
		};
	});

	$("#submit").click(function(){
		var value = $("#paragraphs").val();

		if (value.length === 0) {
			alert("Please enter a value");
		} else {
			$("p:lt(" + value + ")").show();
			$(".ipsum").show();
		};
	});


})