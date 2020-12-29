;(function($){

	$(document).ready(function(){

		"use strict";

		$("body").animsition({
			inClass: 'fade-in-up',
			outClass: 'fade-out-up',
			inDuration: 1500,
			outDuration: 800,
			linkElement: '.animsition-link',
			loading: true,
			loadingParentElement: 'body',
			loadingClass: 'animsition-loading',
			unSupportCss: [
			  'animation-duration',
			  '-webkit-animation-duration',
			  '-o-animation-duration'
			],
			overlay : false,
			overlayClass : 'animsition-overlay-slide',
			overlayParentElement : 'body'
		});

		/***************************************************
		1. ON LOAD
		***************************************************/

		$('body').mousedown(function(e){if(e.button==1)return false});

		$('.intro').height( $(window).height() - 60 );
		$('.main-nav').makeFixed();
		if ($(".intro").hasClass("have-video")) {
			$('.intro-video').coverVid(1920, 1080);
		}

		$('.logos .logo-wrapper').height($('.logos .logo-wrapper').width()/2);
		$('.actors .last img').height($('.actors .last img').width());
		$('.actors .info').height($('.actors .last img').height());


		$('.contact .other-color').height($('.contact .text-section').height());

		/***************************************************
		1. FORM & MENU
		***************************************************/

		Placeholdem( document.querySelectorAll( '[placeholder]' ) );

		$('.main-nav').singlePageNav({
			offset: $('.main-nav').outerHeight()+50,
			filter: ':not(.external)',
			updateHash: true,
		});

		$(".mobile-menu-icon").on('click', function() {
				$('.mobile-menu').stop( true, true ).slideToggle( "slow", function() {});
		});

		/***************************************************
		2. HOVERS
		***************************************************/

		$( ".actors .entry").hoverIntent(
		  function() {
				$(this).find(".social").animate({ "opacity": "1" }, "slow" );
				$(this).find(".after").animate({ "left": "+=100%" }, "slow" );
		  }, function() {
				$(this).find(".social").animate({ "opacity": "0" }, "slow" );
				$(this).find(".after").animate({ "left": "-=100%" }, "slow" );
		  }
		);

		$( ".slider-news .item").hoverIntent(
		  function() {
				$(this).find(".after").animate({ "left": "+=100%" }, "slow" );
		  }, function() {
				$(this).find(".after").animate({ "left": "-=100%" }, "slow" );
		  }
		);

		/***************************************************
		3. SLIDERS
		***************************************************/

		$('.slider-content').owlCarousel({
				animateOut: 'pulse',
				animateIn: 'pulse',
				loop:true,
				margin:10,
				nav:true,
				autoplay:true,
				navText: [
				'',
				''
			],
		    items:1
		});

		$('.slider-about').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				navText: [
				'',
				''
			],
		    items:1
		});

		$('.slider-dates').owlCarousel({
				loop:true,
				margin:10,
				nav:true,
				autoplay:false,
				navText: [
				'',
				''
			],
		    items:1
		});

		$('.slider-news').owlCarousel({
				loop:true,
				margin:0,
				nav:true,
				autoplay:false,
				navText: [
				'',
				''
			],
		    responsive : {
				0 : {
					items:1
				},
				500 : {
					items:2
				}
				,
				1150 : {
					items:3
				}
			}
		});

		$('.slider-news .info').height($('.slider-news .info').width());

		if ($(window).width() > 1100 ) {
			skrollr.init({forceHeight: false});
		};

		/***************************************************
		4. COUNTDOWN
		***************************************************/

		$('#countdown').countdown({until: new Date(2015, 10-1, 28), padZeroes: true});


		/***************************************************
		8. GALLERY
		***************************************************/

		$(".gallery").lightGallery();

		$( ".gallery li").hoverIntent(
		  function() {
				$(this).find(".hover").stop( true, true ).slideToggle( "normal", function() {
			});
		  }, function() {
				$(this).find(".hover" ).stop( true, true ).slideToggle( "normal", function() {
			});
		  }
		);

		$( '.category-choose li a' ).on('click', function() {

			var category = $(this).data('category');

			$( ".gallery-section .gallery").stop( true, true ).slideToggle(500);

			$( ".category-choose li" ).each(function() {
				if ($(this).find('a').data("category") === category) {
					$( ".category-choose li" ).removeClass('current');
					$(this).addClass('current');
				}
			});

			$( ".gallery-section .gallery li" ).wait(500).each(function() {

				$(this).stop( true, true ).show();

				if (category === "all") {

				}
				else {
					if ($(this).data("category") !== category) {
						$(this).stop( true, true ).hide();
					}
				}

			});

			$( ".gallery-section .gallery").wait(700).stop( true, true ).slideToggle(500);

			return false;
		});

		/***************************************************
		9. CONTACT FORM
		***************************************************/

		$("#contact_button").on('click', function() {

			var contact_name = $("#contact_name").val();
			var contact_email = $("#contact_email").val();
			var contact_subject = $("#contact_subject").val();
			var contact_text = $("#contact_text").val();
			var emailReg = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var dataString = '&name='+ contact_name + '&email=' + contact_email + '&text=' + contact_text + '&subject=' + contact_subject;
			var go = true;
			var emailcheck = false;

			$('#contact_name').removeClass('contact-required');
			$('#contact_email').removeClass('contact-required');
			$('#contact_subject').removeClass('contact-required');
			$('#contact_text').removeClass('contact-required');

			if(contact_name=='Name'){
				$('#contact_name').addClass('contact-required');
				go=false;
			}

			if(contact_name==''){
				$('#contact_name').addClass('contact-required');
				go=false;
			}

			if(contact_email=='Email'){
				$('#contact_email').addClass('contact-required');
				go=false;
			}
			else if(contact_email==''){
				$('#contact_email').addClass('contact-required');
				go=false;
			}
			else if(emailReg.test(contact_email)){
				emailcheck = true;
			}
			else {
				$('#contact_email').addClass('contact-required');
				go=false;
			}

			if(contact_subject=='Subject'){
				$('#contact_subject').addClass('contact-required');
				go=false;
			}

			if(contact_subject==''){
				$('#contact_subject').addClass('contact-required');
				go=false;
			}

			if(contact_text=='Message'){
				$('#contact_text').addClass('contact-required');
				go=false;
			}

			if(contact_text==''){
				$('#contact_text').addClass('contact-required');
				go=false;
			}

			if ( go == false){
			 return false;
			}

			$.ajax({
				type: "POST",
				url: "email.php",
				data: dataString,
				success: function(){
					$( "#contact_button").replaceWith( "<input type='submit' id='contact_button' class='button scheme-1 sent'  value='Message sent, we will get back to you shortly!'/>" );
					$( "#contact_button").prop('disabled',true);
				}
			});

			return false;
		});

		/***************************************************
		10. ACCORDION
		***************************************************/

		var allPanels = $('.accordion > dd').hide();

			$('.accordion > dt > a').on('click', function(event) {
				allPanels.slideUp();
				$(this).parent().next().slideDown();
				return false;
		});

	});

	$(window).resize(function(){

		"use strict";

		/***************************************************
		RESIZE
		***************************************************/

		$('.intro').height( $(window).height() - 60 );
		$('.logos .logo-wrapper').height($('.logos .logo-wrapper').width()/2);
		$('.actors .last img').height($('.actors .last img').width());
		$('.actors .info').height($('.actors .last img').height());
		$('.contact .other-color').height($('.contact .text-section').height());
		$('.gallery-section .gallery-details').height($('.gallery-section .gallery-content').height());
		$('.news-section').height($('.news-content').height());

		if($(window).width() > 1200) {
				$('.gallery-section .gallery-details').height($('.gallery-section .gallery-content').height());
				var coverright = ($(window).width() - 1150 )/2;
				$('.other-color .cover-right').css({'right':-coverright});
		}

		var window2 = $(window).width();
		var window3 = $(window).width();
		var change = Math.abs(window3 - window2);

		if ( change > 200) {
			window2 = $(window).width();
			$(window).resize(function(){location.reload();});
		}

	});


	$(window).load(function() {

		"use strict";

		$('.gallery-section .gallery-details').height($('.gallery-section .gallery-content').height());
		$('.news-section').height($('.news-content').height());

		if($(window).width() > 1200) {
				$('.gallery-section .gallery-details').height($('.gallery-section .gallery-content').height());
				var coverright = ($(window).width() - 1150 )/2;
				$('.other-color .cover-right').css({'right':-coverright});
		}

		/***************************************************
		PLAYER
		***************************************************/
		var description = '';
		$('.music-player').ttwMusicPlayer(myPlaylist, {
			autoplay:true,
			tracksToShow:4,
			description:description,
			jPlayer:{
				swfPath:'/libs'
			}
		});

	});


})(jQuery);

/***************************************************
18. SCROLL TO
***************************************************/

function ScrollTo(id){
	"use strict";
	jQuery('html,body').animate({scrollTop: jQuery("#"+id).offset().top},3000);
}

/***************************************************
19. PLAYLIST
***************************************************/

var myPlaylist = [
	
	 {
        mp3:'mix/AliciaKeys.mp3',
        oga:'#',
        title:'AliciaKeys',
        buy:'#',
        price:'<a href="#">&#xf149;</a><a href="#">&#xf07a;</a><a href="#">&#xf1bc;</a><a href="#">&#xf1be;</a>',
        duration:''
    }
];
