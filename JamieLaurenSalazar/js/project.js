$(document).ready(function() {
	$(".mystics-link").mouseover(function(){
		$("html").css("background","url(http://placehold.it/350x150)");	
	});

	$(".styling-link").mouseover(function(){
		$("html").css("background","url(http://placehold.it/400x200)");	
	});

	$(".hamburger").click(function(){
		$(".nav").toggle(500);
	});


})