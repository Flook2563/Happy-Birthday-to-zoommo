/* Template: Bono - Coming Soon Page Pack HTML Template
   Author: Inovatik
   Created: Feb 2020
   Description: Custom JS file
*/

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
    

	

	/* Countdown Timer - The Final Countdown */
	$('#clock').countdown('2020/10/14 00:00:00') /* change here your "countdown to" date */
	.on('update.countdown', function(event) {
		var format = '<span class="counter-number">%D<br><span class="timer-text">Days</span></span><span class="counter-number">%H<br><span class="timer-text">Hours</span></span><span class="counter-number">%M<br><span class="timer-text">Minutes</span></span><span class="counter-number">%S<br><span class="timer-text">Seconds</span></span>';
		$(this).html(event.strftime(format));
	})
	.on('finish.countdown', function(event) {
        var hbdzoom = new Audio("sound/HBDSOUND.ogg");
		document.getElementById('hbd-index').style.visibility = "visible";
		var img = document.createElement("img");
		img.src = "images/cake.png";
		var src = document.getElementById("count-img");
		src.appendChild(img);
        $(this).html('')
		document.getElementById('text-index').innerHTML = 'เนื่องในโอกาสครบรอบวันคล้ายวันเกิด 23 ปีของซูมส์โม่ ขอให้ซูมส์มีสุขภาพแข็งแรง มีความสุขและรอยยิ้ม คิดสิ่งหนึ่งสิ่งใด ขอให้ได้สิ่งนั้น และประสบความสำเร็จตามเป้าหมายที่วางเอาไว้ ❤';
		document.getElementById("btn-index").style.visibility = "visible";
        document.getElementById('btn-index').innerHTML = 'Enter';
        hbdzoom.play();
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