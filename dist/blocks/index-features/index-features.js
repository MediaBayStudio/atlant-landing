;
(function() {
  let featuresSect = id('features');

  if (featuresSect) {
    let slider = q('.index-features-sect__list', featuresSect),
      slides = qa('.index-features-sect__feature', featuresSect),
      $slider = $(slider),
      buildSlider = function() {
        if (media('(min-width:1023.98px)') && slides.length < 5) {
          if (SLIDER.hasSlickClass($slider)) {
            SLIDER.unslick($slider);
          }
        } else {
          if (SLIDER.hasSlickClass($slider)) {
            return;
          }
          $slider.slick({
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
            adaptiveHeight: true,
            responsive: [/*{
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                centerMode: false,
                adaptiveHeight: true
              }
            },*/ {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 3,
                centerMode: false,
                adaptiveHeight: true
              }
            }]
          });
        }
      };

    slides[0].querySelector('img').addEventListener('load', function() {
      console.log('lazyloaded');
      windowFuncs.resize.push(buildSlider);
      buildSlider();
      $('[data-fancybox="images"]').fancybox({
        beforeClose: function(e, instance, slide) {
          if (slides.length && slides.length > 1) {
            $slider.slick('slickGoTo', e.currIndex);
          }
        },
        buttons: [
          'share',
          'zoom',
          'fullScreen',
          'close'
        ]
      });
    });
  }
})();