
/* ------------------------------------------------------------ */
/* Sitcky Header - scrolled
/* ------------------------------------------------------------ */

$(window).scroll(function() {
if ($(this).scrollTop() > 100){  
    $('.header_inline').addClass("has-scrolled");
  }
  else{
    $('.header_inline').removeClass("has-scrolled");
  }
});

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
	
	// Submenu
  	$('li.has-children').on ('click', function() {
	   $(this).children('ul').slideToggle('slow', 'swing');
       $('.icon-arrow').toggleClass('open');
	});

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

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== t ===============*/ 
