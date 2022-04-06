  
// Main.js
// =========================================== //
jQuery(function() {
    "use strict";
	


window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("reload");
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}


    //===== Sticky

	var windowScrolled = function() {


		$(window).scroll(function() {

			var $w = $(this), st = $w.scrollTop(), navbar = $('.c-header--sticky') ;

			if ( st > 100 ) {
				navbar.addClass('is-sticky');
			} else {
				navbar.removeClass('is-sticky');
			}
			
		})

	}
	windowScrolled();
	// END Sticky header 



	
}); // END MAIN	


//===== Section Menu Active
/*
jQuery(document).ready(function(jQuery) {            
            var topMenu = jQuery("#nav"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               
               
               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }
               
            })
        })
		
*/		


	
	jQuery(document).ready(function(jQuery) {            
            var topMenu = jQuery(".c-header__nav"),
                offset = 40,
                topMenuHeight = topMenu.outerHeight()+offset,
                // All list items
                menuItems =  topMenu.find('a[href*="#"]'),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var href = jQuery(this).attr("href"),
                  id = href.substring(href.indexOf('#')),
                  item = jQuery(id);
                  //console.log(item)
                  if (item.length) { return item; }
                });

            // so we can get a fancy scroll animation
            menuItems.click(function(e){
              var href = jQuery(this).attr("href"),
                id = href.substring(href.indexOf('#'));
                  offsetTop = href === "#" ? 0 : jQuery(id).offset().top-topMenuHeight+1;
              jQuery('html, body').stop().animate({ 
                  scrollTop: offsetTop
              }, 300);
              e.preventDefault();
            });

            // Bind to scroll
            jQuery(window).scroll(function(){
               // Get container scroll position
               var fromTop = jQuery(this).scrollTop()+topMenuHeight;

               // Get id of current scroll item
               var cur = scrollItems.map(function(){
                 if (jQuery(this).offset().top < fromTop)
                   return this;
               });

               // Get the id of the current element
               cur = cur[cur.length-1];
               var id = cur && cur.length ? cur[0].id : "";               
               
               menuItems.parent().removeClass("active");
               if(id){
                    menuItems.parent().end().filter("[href*='#"+id+"']").parent().addClass("active");
               }
               
            })
        })
	
 
 
 
  //------- Scroll to Top  js --------//  
    jQuery(window).on("scroll", function() {
        // 4. to top arrow animation
        if (jQuery(this).scrollTop() > 500) {
            jQuery(".to-top-arrow").addClass("show");
        } else {
            jQuery(".to-top-arrow").removeClass("show");
        }
    });
	
    // 4.1. to top arrow scroll to top
    jQuery(".scrollToTop").on("click", function() {
        jQuery("html, body").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
