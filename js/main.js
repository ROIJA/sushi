/* ------------------------------------------------------------ */
/* Sitcky Header - scrolled
/* ------------------------------------------------------------ */
/*
$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('.header_inline').addClass("has-scrolled");
  }
  else{
    $('.header_inline').removeClass("has-scrolled");
  }
});
*/
/* ------------------------------------------------------------ */
/* Page Scroll - requires jquery plugin
/* ------------------------------------------------------------ */

$(document).ready(function() {

	// Nav Toggle
	$('.js-toggle-menu').on('click', function(e) {
		e.preventDefault();
		$('body').toggleClass('is-open');
	});

	// Close Nav
	$('nav li a, #page-overlay').on('click', function(e) {
		e.preventDefault();
		$('body').removeClass('is-open');
	});


	// Hide "Scroll down" on Scroll
	$(window).scroll(function() {
		if ( $(window).scrollTop() > 100 ) {
			$('.js-scroll-down').addClass('hidden');
		} else {
			$('.js-scroll-down').removeClass('hidden');
		}
	});
});
	// Submenu
	
  /*	
$('li.has-children').on ('click', function(e) {
	e.preventDefault();
	   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('open');
	});
  $('li.has-children2').on ('click', function() {
  	$(this).children('ul').slideToggle('slow', 'swing');
	 $('.icon-arrow2').toggleClass('open')
	   return false;
	});		
/*/

$('.has-children').on ('click', function(e) {
	
    $(this).siblings().find('> .children').slideUp();
    $(this).find('> .children').slideToggle();
    $(this).siblings().removeClass('opened');
    $(this).toggleClass('opened');
	e.stopPropagation(); // Now the event won't bubble up	
	
});	


/*=============== MENU ACTIVE LINK ===============*/
jQuery(function($) {

  //===== Add Active Navigation Class Based on URL
  var path = window.location.href; 
  // because the 'href' property of the DOM element is the absolute path

  $('#nav ul li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   return false;
    }
  });
  //===== Submenu active link
  $('li.has-children ul.children li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   $('this').removeClass("active");
	   return false;
    }
  });
  
});



//===== SCROLL SECTIONS ACTIVE LINK
$('#nav ul li a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    $('li a').removeClass("active");
    $(this).addClass("active");	
    return false;
});


/*
var $btns = $('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $btns.removeClass('active');
  $(this).addClass('active');
}) 
*/
$('.btn').click(function() {
  if (this.id == 'all') {
    $('#parent > div').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('#parent > div').not($el).hide();
  }
  $('.btn').removeClass('active');
  $(this).addClass('active');
}) 

/*=============== GallerySlider ===============*/ 
jQuery('.card-slider').slick({
  slidesToShow:3,
  autoplay: true,
  slidesToScroll:1,
  dots: false,
  prevArrow: $('.prev'),
  nextArrow: $('.next'),  
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});



/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== Location Image Slider ===============*/ 

// Swiper

function LocationSlider() {
    new Swiper(".swiper-container", {
		
 		effect: "coverflow",
  		spaceBetween: 28,
  		zoom: !0,
        speed: 500,
        grabCursor: !0,
        rewind: !0,  
	  	centeredSlides: false,
	  	coverflowEffect: {
		  rotate: 0,
		  stretch: 0,
		  depth: 0,
		  modifier: 1,
		  slideShadows: false
	    },		
        slidesPerView: "auto",
        breakpoints: { 768: { spaceBetween: 38 } },
        scrollbar: { el: ".swiper-scrollbar", draggable: true },
        
    });
}
LocationSlider();

/*=============== Lazy Load ===============*/ 


  $('img.lazy').lazyload({
    effect: "fadeIn"
  });


/*=============== Page Hero Slider ===============*/ 
var swiper = new Swiper(".swiper", {
  loop: false,
  speed: 700,
  lazy: {
    loadPrevNext: true,
  },
  autoplay: {
    delay: 4000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  watchSlideProgress: true,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    clickable: false,
    renderCustom: function (swiper, current, total, index) {
      return '<span class="active">' + current + "</span>";
    }
  }
});
swiper.on("slideChange", function () {
  gsap.from(".active", {
    opacity: 0,
    delay: 0.5,
    yPercent: 15,
    ease: "expo.In"
  });
});
ScrollSmoother.create();

const quotes = document.querySelectorAll(".fromLeft");

function setupSplits() {
  quotes.forEach(quote => {
    // Reset if needed
    if(quote.anim) {
      quote.anim.progress(1).kill();
      quote.split.revert();
    }

    quote.split = new SplitText(quote, { 
      type: "lines,words,chars",
      linesClass: "split-line"
    });

    // Set up the anim
    quote.anim = gsap.from(quote.split.chars, {
      scrollTrigger: {
        trigger: quote,
        toggleActions: "restart pause resume reverse",
        start: "top 80%",
      },
      opacity: 0,
      duration: 0.6, 
      ease: "circ.out", 
      y: 10, 
      stagger: 0.02,
    });
  });
}

ScrollTrigger.addEventListener("refresh", setupSplits);
setupSplits();

/*=============== // ===============*/ 