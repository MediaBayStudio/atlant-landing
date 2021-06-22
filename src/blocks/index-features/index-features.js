;
(function() {
  let featuresSect = id('features');

  // console.log(msg);

  if (featuresSect) {
    let slider = q('.index-features-sect__list', featuresSect),
      slides = qa('.index-features-sect__li', featuresSect),
      $slider = $(slider),
      buildSlider = function() {
        if (media('(min-width:1023.98px)')) {
          if (SLIDER.hasSlickClass($slider)) {
            SLIDER.unslick($slider);
          }
        } else {
          if (SLIDER.hasSlickClass($slider)) {
            return;
          }
          $slider.slick({
            // fade: true,
            infinite: false,
            arrows: false,
            dots: true,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '20px',
            dotsClass: 'index-features-sect__dots dots',
            customPaging: function() {
              return '<button type="button" class="index-features-sect__dot dot"></button>';
            },
            mobileFirst: true,
            responsive: [{
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                centerMode: false
              }
            }, {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
                centerMode: false
              }
            }]
          });
        }
      };
    windowFuncs.resize.push(buildSlider);
    buildSlider();
  }
})();