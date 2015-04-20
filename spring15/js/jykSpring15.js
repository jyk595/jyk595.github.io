$(document).ready(function(){
	$(".itemDescription").hide();
	$(".item").click(function(){
		$(this).siblings(".itemDescription").toggle();
	});

	//When user clicks buy button in shop
	$(".buyMe").click(function(){
		$(this).html("Remove Me");
		$(this).css("background-color", "#666666")
	});

	// Header Background Stuff
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop <= 800) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(0)").css("background-color", "transparent");
		} else if (scrollTop > 800 && scrollTop <= 3300) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(1)").css("background-color", "transparent");
		} else if (scrollTop > 3300 && scrollTop <= 4000) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(2)").css("background-color", "transparent");
		} else if (scrollTop > 4000 && scrollTop <= 5400) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(3)").css("background-color", "transparent");
		} else if (scrollTop > 5400){
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(4)").css("background-color", "transparent");
		}
	});

    $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop:target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	 });
});