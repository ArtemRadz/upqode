$(document).ready(function() {

	var lastId,
	    topMenu = $(".menu__ul"),
	    topMenuHeight = topMenu.outerHeight() + 70,
	    // All list items
	    menuItems = topMenu.find(".menu__ul__item__link"),
	    // Anchors corresponding to menu items
	    scrollItems = menuItems.map(function(){
	      var item = $($(this).attr("href"));
	      if (item.length) 
	      	return item; 
	    });

	// Bind click handler to menu items
	menuItems.click(function(e){
	  var href = $(this).attr("href"),
	      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
	  console.log(href + ":" + offsetTop);
	  $('html, body').stop().animate({ 
	      scrollTop: offsetTop
	  }, 300);
	  e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function(){
	   // Get container scroll position
	   var fromTop = $(this).scrollTop()+topMenuHeight;
	   
	   // Get id of current scroll item
	   var cur = scrollItems.map(function(){
	     if ($(this).offset().top < fromTop)
	       return this;
	   });
	   // Get the id of the current element
	   cur = cur[cur.length-1];
	   var id = cur && cur.length ? cur[0].id : "";
	   
	   if (lastId !== id) {
	       lastId = id;
	       //Set/remove active class
	       menuItems
	         .parent().removeClass("anchor_active")
	         .end().filter("[href='#"+id+"']").parent().addClass("anchor_active");
	   }                   
	});


	/*proggresBar*/
	window.addEventListener('scroll', function() {
		let progress = document.querySelector(".progress").offsetTop + 40;
		let innerHeight = window.innerHeight;
		let scroll = scrollY() + innerHeight;
		if(scroll >= progress) {
			document.querySelector(".photoshop").classList.add("photoshop-active");
			document.querySelector(".html").classList.add("html-active");
			document.querySelector(".js").classList.add("js-active");
			document.querySelector(".wordpress").classList.add("wordpress-active");
		}
	});
	function scrollY() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }

    /*google maps config*/
    (function initMap() {
        var uluru = {lat: 49.832761, lng: 24.014785};
        var map = new google.maps.Map(document.querySelector('.map'), {
          zoom: 16,
          center: uluru
        });
    })();

	/*Hamburger menu*/
	function hamburgerMenu() {
		$(".mob-menu").slideToggle();
		$(".hamburger-icon").toggleClass('open');
	}
	$('.hamburger-icon').click(function() {
		hamburgerMenu();
	});
	$(".mob-menu__ul__item__link__products").click(function() {
		$(".drop-down-mob-menu-first").slideToggle();
	});
	$(".drop-down-mob-menu-first__item__link-open").click(function() {
		$(".drop-down-mob-menu-second").slideToggle();
	});
	function anchor(event, self) {
		event.preventDefault();
		var id = $(self).attr("href");
		if(id == "#")
			return false;
		var top = $(id).offset().top - 70;
		$("body").animate({scrollTop: top}, 500);
	}
	$(".header-menu a").click(function(event) {
		anchor(event, this);
	});
	$(".mob-menu a").click(function(event) {
		hamburgerMenu();
		anchor(event, this);
	});

	/*slider config*/
	/*header-slider*/
	$(".wrapper-banner-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		infinite: true,
		autoplay: false,
		autoplaySpeed: 4000,
		responsive: [ 
			{
				breakpoint: 1024,
				settings: {
					arrows: false
				}
			}
		]
	});
	/*products-slider*/
	var $slider = $(".circle-blocks");
	$slider.slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
		infinite: true,
		autoplay: false,
  		autoplaySpeed: 5000,
		dots: true,
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
});