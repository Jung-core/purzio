// var agent = navigator.userAgent.toLowerCase();
// if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
//     // ie일 경우
//     $('#sct').after('<script type="text/javascript" src="js/swiper.min.js"></script>');
// } else {
//     // ie가 아닐 경우
//     $('#sct').after('<script type="text/javascript" src="js/swiper-bundle.min.js"></script>');
// }

$(function(){
	// $('body').imagesLoaded(function(){
	//     AOS.init({
	//         duration : 800,
	//         offset : 50
	//     });
	// });

	// $('.header').mouseover(function(){
	//     $(this).addClass('active');
	//     $('.blindWrap').stop().fadeIn(500);
	// }).mouseleave(function(){
	//     $(this).removeClass('active');
	//     $('.blindWrap').stop().fadeOut(300);
	// });

	scrollInit();

	$('.blindWrap').click(function(e){
			e.preventDefault();

			if ($('.toggleWrap').hasClass('active')) {
					$('.header .toggleBtn').click();
			}

	});

	$('.topBtn').click(function(e){
			// e.preventDefault();

			$('html, body').stop().animate({scrollTop : "0px"}, 800);
	});

	$('.radioWrap .play').click(function(){
			var aud = document.getElementById('audio');
			aud.play();
	});

	$('.radioWrap .stop').click(function () {
			var aud = document.getElementById('audio');
			aud.pause();
	});
});
//window-onload

$(window).scroll(function(){
	scrollInit();
});

function scrollInit() {
	if ($(window).scrollTop() > 0) {
			$('.header').addClass('scroll');
	} else if (!$('.header').hasClass('sub')) {
			$('.header').removeClass('scroll');
	}
}