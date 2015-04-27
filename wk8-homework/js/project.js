$(document).ready(function(){
	var allgifs = $("#dancing, #tambourine, #bite, #flirty, #shuffle, #lamb, #standingPig, #pinkLamb, #dive, #horse, #cock, #impatient, #flowers");

	allgifs.hide();
	alert("Click anywhere on the screen");


	$("#background").click(function(){
		allgifs.hide();
		$("#flirty").fadeIn(100, function(){
			$("#dancing").fadeIn(100, function(){
				$("#tambourine").fadeIn(100, function(){
					$("#bite").fadeIn(100, function(){
						$("#shuffle").fadeIn(100, function(){
							$("#lamb").fadeIn(100, function(){
								$("#standingPig").fadeIn(100, function(){
									$("#pinkLamb").fadeIn(100, function(){
										$("#dive").fadeIn(100, function(){
											$("#horse").fadeIn(100, function(){
												$("#cock").fadeIn(100, function(){
													$("#impatient").fadeIn(100, function(){
														$("#flowers").fadeIn(100);
													});
												});
											});
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

	allgifs.click(function(){
		$(this).fadeOut(300);
	});
})