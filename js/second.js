/* Template: Bono - Coming Soon Page Pack HTML Template
   Author: Inovatik
   Created: Feb 2020
   Description: Custom JS file
*/
var hbd = new Audio("sound/HBDSOUND.mp3");
function PlaySound(){
    hbd.play();
}

(function($) {
    "use strict"; 



	
	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});


	/* Header Slider - Swiper */
	var swiper1 = new Swiper('.header-slider', {
		autoplay: {
            delay: 2000,
            disableOnInteraction: false
		},
        loop: false,
    });
    

    
    /* Rotating Text - Morphtext */
	$("#js-rotating").Morphext({
		// The [in] animation type. Refer to Animate.css for a list of available animations.
		animation: "fadeIn",
		// An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
		separator: ",",
		// The delay between the changing of each phrase in milliseconds.
		speed: 2000,
		complete: function () {
			// Called after the entrance animation is executed.
		}
    });
    
	

    
	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);