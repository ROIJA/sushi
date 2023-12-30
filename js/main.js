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
/* Mobile Menu - 
/* ------------------------------------------------------------ */
$(document).ready(function() {

	$('.js-toggle-menu, #page-overlay').click(function(){
	  $('.js-toggle-menu').toggleClass('is-open');
	  $('.overlay').toggleClass('is-open');
	  $('nav').toggleClass('is-open');
	  $('body').toggleClass('is-open');
	});
	
	// MENU  ON MOBILE
	$('.menu-trigger, .close-menu, .backdrop').click(function(){
	  $('.menu-grigger').toggleClass('show');
	  $('.backdrop').toggleClass('show');
	  $('.slide-menu').toggleClass('show');
	  $('body').toggleClass('show');
	 $('.slide-menu').addClass('eseOut');
	});
	
	$('body').keyup(function(e) {
	  if (e.keyCode == 27) {
			$(".slide-menu").removeClass("show");
			$('.backdrop').removeClass('show');
	  }
	});
	
	// Submenu
	$('.has-children').on ('click', function(e) {
		$(this).siblings().find('> .children').slideUp();
		$(this).find('> .children').slideToggle();
		$(this).siblings().removeClass('opened');
		$(this).toggleClass('opened');
		e.stopPropagation(); // Now the event won't bubble up	
	});	

});
/* ------------------------------------------------------------ */
/*  MENU  ON DESKTOP
/* ------------------------------------------------------------ */

jQuery(function($) {
	
  $('li.dropdown > a').on('click',function(event){
    
    event.preventDefault()
    
    $(this).parent().find('ul').first().toggle(300);
    
    $(this).parent().siblings().find('ul').hide(200);
    
    //Hide menu when clicked outside
    $(this).parent().find('ul').mouseleave(function(){  
      var thisUI = $(this);
      $('html').click(function(){
        thisUI.hide();
        $('html').unbind('click');
      });
    });
    
  });
	

  //=====  Add Active Navigation Class Based on URL
  var path = window.location.href; 
  // because the 'href' property of the DOM element is the absolute path

  $('.nav-bar ul li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   return false;
    }
  });
  
  //===== Submenu active link
  $('.nav-bar ul li.dropdown ul.dropdown-menu li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   $('this').removeClass("active");
	   return false;
    }
  });

}); 

/* ------------------------------------------------------------ */
/*  MENU ACTIVE LINK
/* ------------------------------------------------------------ */    

jQuery(function($) {

  //===== Add Active Navigation Class Based on URL
  var path = window.location.href; 
  // because the 'href' property of the DOM element is the absolute path

  $('.menu ul li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   return false;
    }

  });
  
  //===== Submenu active link
  $('.menu ul li.has-children ul.children li a').each(function() {
    if (this.href === path) {
      $(this).addClass('active');
	   $('this').removeClass("active");
	   return false;
    }
  });

  
}); 

/* ------------------------------------------------------------ */
/*  Tabs # menus section page
/* ------------------------------------------------------------ */
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

/* ------------------------------------------------------------ */
/*  Foods - Multi Slider
/* ------------------------------------------------------------ */
/*
jQuery('.card-slider').slick({
  slidesToShow:3,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll:1,
  dots: false,
  //prevArrow: $('.prev'),
  //nextArrow: $('.next'), 
  prevArrow: $('.slick-prev'),
  nextArrow: $('.slick-next'),    
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
*/
 
//=====  Slick Card-slider   
jQuery('.card-slider').slick({
  slidesToShow:3,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll:1,
  dots: false,
  //prevArrow: $('.prev'),
  //nextArrow: $('.next'), 
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


 //=====  Slick hibachi slider
$('.card-slider1').slick({
  slidesToShow:3,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll:1,
  dots: false,
  //prevArrow: $('.prev'),
  //nextArrow: $('.next'), 
  prevArrow: $('.prev_1'),
  nextArrow: $('.next_1'),    
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

 //=====  Slick ramen slider
$('.card-slider2').slick({
  slidesToShow:3,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll:1,
  dots: false,
  //prevArrow: $('.prev'),
  //nextArrow: $('.next'), 
  prevArrow: $('.prev_2'),
  nextArrow: $('.next_2'),    
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


//=====  Slick locationMenu slider

$('.slider-location').slick({
  infinite: true,
	dots: true,
	dotsClass: 'slick-dots',
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
	fade: true,
	fadeSpeed: 1000
});

//=====  Slick location Slide slider

$('.mask-3').slick({
  slidesToShow:1,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToScroll:1,
  dots:true,
  appendDots: $('.slider-dots-nav'),
  dotsClass: 'slider-dots',
  prevArrow: $('.left-arrow'),
  nextArrow: $('.right-arrow'),    
  responsive:[
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
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


/* ------------------------------------------------------------ */
/*  Split text
/* ------------------------------------------------------------ */

var spans = document.getElementsByTagName('span')

function doSetTimeout(i) {
  setTimeout(function(){ 
		spans[i].classList += ' animate-in'
	}, 120 * i)
}

window.addEventListener('load', function() {
    for (var i = 0; i < spans.length; i++) {
		doSetTimeout(i)
	}
});

/* ------------------------------------------------------------ */
/*  SHOW SCROLL UP
/* ------------------------------------------------------------ */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/* ------------------------------------------------------------ */
/*  Location Image Slider
/* ------------------------------------------------------------ */

$(document).ready(function() {
	// Swiper
	function LocationSlider(){
		
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
});
/*
	// Swiper
	function LocationSlider(){
		
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
});
*/

/* ------------------------------------------------------------ */
/*  Lightbox
/* ------------------------------------------------------------ */
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh"
});
	
/* ------------------------------------------------------------ */
/*  locationHero
/* ------------------------------------------------------------ */

    //=====  Slick Showcase active
  
    $('.locationHero-active').slick({
        dots: false,
        infinite: true,
		autoplay: false,
        speed: 600,
        slidesToShow: 1,
        arrows:true,
        prevArrow:'<span class="prev"><i class="las la-arrow-left"></i></span>',
        nextArrow: '<span class="next"><i class="las la-arrow-right"></i></span>',
        adaptiveHeight: true,
        responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 576,
          settings: {
            arrows: false,
          }
        }

		
        ]
    });
 
 

/* ------------------------------------------------------------ */
/*  Page Hero Slider
/* ------------------------------------------------------------ */

$('.slider').each(function() {
  var $this = $(this);
  var $group = $this.find('.slide_group');
  var $slides = $this.find('.slide');
  var bulletArray = [];
  var currentIndex = 0;
  var timeout;
  
  function move(newIndex) {
    var animateLeft, slideLeft;
    
    advance();
    
    if ($group.is(':animated') || currentIndex === newIndex) {
      return;
    }
    
    bulletArray[currentIndex].removeClass('active');
    bulletArray[newIndex].addClass('active');
    
    if (newIndex > currentIndex) {
      slideLeft = '100%';
      animateLeft = '-100%';
    } else {
      slideLeft = '-100%';
      animateLeft = '100%';
    }
    
    $slides.eq(newIndex).css({
      display: 'block',
      left: slideLeft
    });
    $group.animate({
      left: animateLeft
    }, function() {
      $slides.eq(currentIndex).css({
        display: 'none'
      });
      $slides.eq(newIndex).css({
        left: 0
      });
      $group.css({
        left: 0
      });
      currentIndex = newIndex;
    });
  }
  
  function advance() {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      if (currentIndex < ($slides.length - 1)) {
        move(currentIndex + 1);
      } else {
        move(0);
      }
    }, 4000);
  }
  
  $('.next_btn').on('click', function() {
    if (currentIndex < ($slides.length - 1)) {
      move(currentIndex + 1);
    } else {
      move(0);
    }
  });
  
  $('.previous_btn').on('click', function() {
    if (currentIndex !== 0) {
      move(currentIndex - 1);
    } else {
      move(3);
    }
  });
  
  $.each($slides, function(index) {
    var $button = $('<a class="slide_btn">&bull;</a>');
    
    if (index === currentIndex) {
      $button.addClass('active');
    }
    $button.on('click', function() {
      move(index);
    }).appendTo('.slide_buttons');
    bulletArray.push($button);
  });
  
  advance();
});

/*=============== // ===============*/ 


/* ------------------------------------------------------------ */
/*  Lazy Loading - image
/* ------------------------------------------------------------ */

$("img.lazy, img.lazyload").lazyload({
    effect : "fadeIn"
});
      
