(function () {
  // navbar
  if ($('.nav-link').length > 0) {
    $('.nav-link, .navbar-brand').on('click', function() {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  // charts

  // carousel
  if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel({
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      items: 1,
      autoplay: false,
      dots: true,
      loop: true
    });
  }

  // dark mode
  if ($('.btn-toggle').length > 0) {
    function switchMode(status) {
      $('link[media]').attr('media', status ? 'screen' : 'not screen');
    }

    $('.btn-toggle').on('click', function() {
      var useDarkMode = $(this).attr('data-use-dark-mode');
      switchMode(useDarkMode === 'true');
    });
  }
})();
