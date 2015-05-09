$(document).ready(function(){
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

    $(document).scrollsnap({
    	snaps: ".snap",
    	proximity: 150,
    	easing: "easeOutBack"
    });

	$(".itemDescription").hide();
	$(".item").click(function(){
		$(this).siblings(".itemDescription").animate({
			width: "toggle"}, 200);
	});

	//When user clicks buy button in shop
	$(".buyMe").click(function(){
		$(this).html("Remove Me");
		$(this).css("background-color", "#666666")
	});

	// Header Background Scroll
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();

		if (scrollTop <= 1000) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(1)").css("background-color", "transparent");
		} else if (scrollTop > 1000 && scrollTop <= 3500) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(2)").css("background-color", "transparent");
		} else if (scrollTop > 3500 && scrollTop <= 4200) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(3)").css("background-color", "transparent");
		} else if (scrollTop > 4200 && scrollTop <= 7000) {
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(4)").css("background-color", "transparent");
		} else if (scrollTop > 7000){
			$(".headerText").css("background-color", "white");
			$(".headerText:eq(5)").css("background-color", "transparent");
		}
	});

    $(".mainHamburger").click(function(){
    	if($(this).hasClass("open")) {
    		$("#container").animate({
    			left: 0
    		}, 200);
    		$(this).removeClass("open");
    		$(".headerArea").hide();
    	} else {
	    	$("#container").animate({
	    		left: 200
	    	}, 200);
	    	$(".headerArea").show().animate({
	    		left: 0
	    	}, 200);
	    	$(this).addClass("open");
	    	$(".mainHamburger").css("display","none");
    	}
    });

    $(".secondHamburger").click(function(){
    	$("#container").animate({
    	left: 0
		}, 200);
		$(this).removeClass("open");
		$(".headerArea").hide();
		$(".mainHamburger").show();
    });

    $(".closeBox").click(function(){
    	$(".headerArea").animate({
    		width:'toggle',
    	}, 200);
    	$(".headerArea").hide();
    	$(this).removeClass("open");
    });
});