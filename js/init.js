(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  });
})(jQuery);

(function() {
  
  lightbox.option({
      'showImageNumberLabel': false
    });
    
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
  
  var topOffset = 0;
  
  // make fullscreen
  var wheight = $(window).height() - topOffset;
  $('.fullheight').css('height', wheight);
  
  // adjust to window resize
  $(window).resize(function() {
    wheight = $(window).height() - topOffset;
    if (wheight > 500) {
      $('.fullheight').css('height', wheight);
    }
  });
  
  //Use smooth scrolling when clicking on navigation
  $('.overlay-menu a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topOffset
        }, 500);
        $('#toggle').toggleClass('active'); // close menu
        $('#overlay').toggleClass('open');
        return false;
      } //target.length
    } //click function
  });
  
  // menu
  $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });
}());