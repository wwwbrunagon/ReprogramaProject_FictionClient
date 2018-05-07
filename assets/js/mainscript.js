//Navigation 

var $doc = $('html, body');
$('.scrollpage').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});


 //  Carousel 

$(document).ready(function(){
	 $('.carouselTxt').slick({
	   //  slidesToShow: 3,
  		// slidesToScroll: 1,
  		dots: true,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		 cssEase: 'linear'
  		});
});




