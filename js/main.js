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
 //---------------------------------------------------------
// Page Scroll
//--------------------------------------------------------- 

//scroll to anchor

$('a.page-scroll').click(function(){
    if ($(this).scrollTop() > 800) {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-165
        }, 800);
        return false;
    } else {
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top-165
        }, 800);
        return false;
    }
});


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
/*  SHOW SCROLL UP - button
/* ------------------------------------------------------------ */

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/* ------------------------------------------------------------ */
/*  Location Image Slider @home
/* ------------------------------------------------------------ */
$(document).ready(function () {
	// Swiper
	new Swiper(".swiper-container", {
			
		effect: "coverflow",
		spaceBetween: 30,
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
});

/* ------------------------------------------------------------ */
/*  Lightbox for food gallery
/* ------------------------------------------------------------ */
const lightbox = GLightbox({
  touchNavigation: true,
  loop: true,
  width: "90vw",
  height: "90vh"
});
	
/* ------------------------------------------------------------ */
/*  locationHero - location MENU pages
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
	

	
/*=============== // ===============*/ 
// Click function for show the Modal
// Get modal element
const modal = document.getElementById('AppModal');
// All page modals
var modals = document.querySelectorAll('.modal');
// Get open modal button
const modalBtn = document.querySelectorAll('.modal-btn');
// Get close button
const closeBtn = document.getElementsByClassName('closeBtn')[0];

const closeBtn2 = document.getElementsByClassName('closeBtn2')[0];
// Listen 	for OPEN Click
modalBtn.forEach(function(e) {
e.addEventListener('click', openModal);
})
// Listen for CLOSE Click
closeBtn.addEventListener('click', closeModal);
closeBtn2.addEventListener('click', closeModal);
// Listen for OUTSIDE Click
window.addEventListener('click', outsideClick);

// Function to OPEN modal
function openModal() {
  modal.style.display = "block";
}

// Function to CLOSE modal
function closeModal() {
  modal.style.display = "none";
}
// Function to CLOSE modal
function outsideClick(e) {
  if(e.target == modal) {
    modal.style.display = "none";
  }
}

//---------------------------------------------------------
// Click function for show the Modal
//---------------------------------------------------------
$('[data-modal]').click(function(e){
  e.preventDefault();
  $(this).parent().find('[data-wrapper]').addClass('active');
});

$('[data-wrapper]').click(
  function(modal){
  if (modal.target == this) {
    $(this).removeClass('.modal-wrapper active');
  }
});

$('[data-dismiss]').click(function(e){
	  e.preventDefault();
	$('[data-wrapper]').removeClass('active');
});
/*
       $(document).mouseup(function (e) {
            if ($(e.target).
                closest(".box-modal").
                length=== 0) {
                $(".box-modal").hide();
            }
        }); 
		*/


//---------------------------------------------------------
// Lazy Loading - image
//---------------------------------------------------------

$("img.lazy, img.lazyload").lazyload({
    effect : "fadeIn"
});

/*=============== Location HOver IMAGE ===============*/       

