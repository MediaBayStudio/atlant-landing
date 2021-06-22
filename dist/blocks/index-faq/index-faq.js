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