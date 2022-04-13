$(function(){
	
	scrollInit();

	$('body').imagesLoaded(function(){
		mScrollInit();
		
		AOS.init({
				duration: 800
		});

		setTimeout(function(){
				$('.header, .quickWrap').removeClass('hidden');
				$('.visualWrap .contWrap .imageWrap_m .zoomImage').fadeIn(500);
				$.fn.fullpage.setMouseWheelScrolling(true);
		}, 2500);
		
		$.fn.fullpage.setMouseWheelScrolling(false);
		$.fn.fullpage.moveTo('section1', 0);
		
	});

	$('#fullpage').fullpage({
		//options here
		// autoScrolling:true,
		// scrollHorizontally: true,
		// autoScrolling: true,
		scrollingSpeed: 1000,
		navigation:true,
		anchors: ['section1', 'section2', 'section3', 'section4'],
		menu: '#menu',
		responsiveWidth:1000,
		responsiveHeight:300,
			
		// sectionsColor:['#ccc','#ddd','#eee','#ff0'],//section 배경칼라
		afterLoad: function(index,destination){
			console.log("현재 섹션번호는" + index);	
			if (!$('.section.active').hasClass('footer')) {
				$('.section:not(.active) .aos-init').removeClass('aos-animate');
				$('.quickWrap .scroll').removeClass('top');	
				$('.quickWrap').removeClass('hidden')//navigation show/hide		
			} else {
				$('.quickWrap .scroll').addClass('top');	
				$('.quickWrap').addClass('hidden')//navigation show/hide				
			}

			$('.section.active .aos-init').addClass('aos-animate');

			if (destination != 1) {
				$('.header').addClass('scroll');
			}else {
				$('.header').removeClass('scroll');
			}		

			if ($('.section.active').hasClass('line')) {
				$('.sec02 .centerImg').addClass('active')
			}else {
				$('.sec02 .centerImg').removeClass('active')
			}	

			// $('.mMenuWrap a').eq(index).addClass('active01').siblings().removeClass('active01');

		},
			
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
			console.log("현재 슬라이드번호는" + slideIndex);	
		},
		// resetSliders:true,
	
		
	});
	//methods
	// $.fn.fullpage.setAllowScrolling(false);

	$(document).on('click', '.scroll.top', function (e) {
		e.preventDefault();
		$.fn.fullpage.moveTo('section1', 0);
	});

	if($(window).width() < 1000){
		 $('#fullpage').removeAttr('id');	
		 $.fn.fullpage.destroy('all');//fullpage 삭제
		 setTimeout(function(){
			$('.header, .quickWrap').removeClass('hidden');		
			$.fn.fullpage.setMouseWheelScrolling(true);
			}, 2100);
	}

	// mobile menu-open

  $('.m-gnb-btn').on('click',function(){
    if($(this).hasClass('gnb-open')){
      $('body').removeClass('layer-open');
      // $('.dim').remove(); 
      $(this).removeClass('gnb-open');
      $('.nav').removeClass('gnb-open');		
      // $("a.dim").off('click');
    } else {
      $('body').addClass('layer-open');
      // $(this).before('<a class="dim"></a>');
      $(this).addClass('gnb-open');
      $('.nav').addClass('gnb-open');

      // $("a.dim").on('click', function(){
      //  $('.m-gnb-btn').trigger('click');
      // });
    }
  });

});

$(window).scroll(function(){
	mScrollInit();
});

function mScrollInit() {
	var winH = $(window).scrollTop() + ($(window).height() / 2);
}

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

