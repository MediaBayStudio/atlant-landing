document.addEventListener('DOMContentLoaded', function() {

//=include ../blocks/header/header.js

//=include ../blocks/mobile-menu/mobile-menu.js

//=include ../blocks/index-hero/index-hero.js

//=include ../blocks/index-help/index-help.js

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

//=include ../blocks/index-quiz/index-quiz.js

;
(function() {
  let faqList = q('.index-faq-sect__list');

  if (faqList) {
    let faqBlocks = faqList.children,
      dropdownText = function(element) {

        if (!element) {
          for (var i = faqBlocks.length - 1; i >= 0; i--) {
            faqBlocks[i].style.maxHeight = faqBlocks[i].children[0].scrollHeight + 'px';
          }
          return;
        }

        let parent = element.parentElement,
          activeElement = q('.active', faqList);

        parent && parent.classList.add('active');
        activeElement && activeElement.classList.remove('active');
        parent && (parent.style.maxHeight = parent.scrollHeight + 'px');
        activeElement && (activeElement.style.maxHeight = activeElement.children[0].scrollHeight + 'px');

      };

    dropdownText();

    faqList.addEventListener('click', function() {
      let target = event.target;
      if (target.classList.contains('index-faq-sect__item-question')) {
        dropdownText(target);
      }
    });

  }
})();

//=include ../blocks/index-about/index-about.js

//=include ../blocks/index-questions/index-questions.js

//=include ../blocks/footer/footer.js

});