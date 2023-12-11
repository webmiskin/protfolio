(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

	
		
	});
})(jQuery);



// owl carousel

$(document).ready(function() {

	// hero slider
	$('#hero-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:1,
    dots:false,
    smartSpeed:1000,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navText:['PREV', 'NEXT'],
    responsive:{
        0:{
      	nav:false,
        },
        768:{
        	nav:true,
        }
    }
});



	// project slider
	$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    smartSpeed:1000,
    margin:24,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    navText:["PREV", "NEXT"],
    responsive:{
        0:{
      		items:1,
      		nav:false,
      		margin:0,
        },
        768:{
        	items:2,
        },
        1140: {
 		   items:2,
 		   center:true,
 		   dots:true,
        }
    }
});

	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    items:1,
    smartSpeed:800,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
  
})





});




// owl carousel