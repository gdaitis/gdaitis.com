(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);

(function() {
  lightbox.option({
      'showImageNumberLabel': false
    })
}());

$('.carousel-mobile').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  infinite: true,
  centerMode: true,
  //centerPadding: '0px',
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// make fullscreen
var wheight = $(window).height();
$('.fullheight').css('height', wheight);

// adjust to window resize
$(window).resize(function() {
  wheight = $(window).height();
  $('.fullheight').css('height', wheight);
});