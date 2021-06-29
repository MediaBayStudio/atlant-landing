//=include components/utils.js

document.addEventListener('DOMContentLoaded', function() {
  body = document.body;

  //=include components/telMask.js

  //=include components/validateForms.js

  //=include components/menu.js

  // В основном для IE
  if (!NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }

  if (!HTMLCollection.prototype.forEach) {
    HTMLCollection.prototype.forEach = Array.prototype.forEach;
  }

  fakeScrollbar = id('fake-scrollbar');

  burger = q('.hdr__burger');

  hdr = q('.hdr');

  if (burger) {
    menu = mobileMenu({
      menu: q('.menu'),
      menuCnt: q('.menu__cnt'),
      openBtn: burger,
      closeBtn: q('.menu__close'),
      toLeft: true,
      fade: false,
      allowPageScroll: false
    });
  }



  // menu.open();

  let navLinks = qa('.nav-link');

  navLinks.forEach(link => link.addEventListener('click', scrollToTarget));

  // sticky(hdr);

  // thanksPopup = new Popup('.thanks', {
  // closeButtons: '.thanks__close'
  // });

  // Инициализация lazyload
  lazy = new lazyload({
    clearSrc: true,
    clearMedia: true
  });

  window.svg4everybody && svg4everybody();

  // Добавление расчета vh на ресайз окна
  windowFuncs.resize.push(setVh);

  // Сбор событий resize, load, scroll и установка на window
  for (let eventType in windowFuncs) {
    if (eventType !== 'call') {
      let funcsArray = windowFuncs[eventType];
      if (funcsArray.length > 0) {
        windowFuncs.call(funcsArray);
        window.addEventListener(eventType, windowFuncs.call);
      }
    }
  }


  var wa_time_out, wa_time_in;

  $(document).ready(function() {
    var $waBtnPopup = $(".wa__btn_popup"),
      $waPopupChatBox = $(".wa__popup_chat_box");

    $waBtnPopup.on("click", function() {
      if ($waPopupChatBox.hasClass("wa__active")) {
        $waPopupChatBox.removeClass("wa__active");
        $waBtnPopup.removeClass("wa__active");
        clearTimeout(wa_time_in);
        if ($waPopupChatBox.hasClass("wa__lauch")) {
          wa_time_out = setTimeout(function() {
            $waPopupChatBox.removeClass("wa__pending");
            $waPopupChatBox.removeClass("wa__lauch");
          }, 400);
        }
      } else {
        $waPopupChatBox.addClass("wa__pending");
        $waPopupChatBox.addClass("wa__active");
        $waBtnPopup.addClass("wa__active");
        clearTimeout(wa_time_out);
        if (!$waPopupChatBox.hasClass("wa__lauch")) {
          wa_time_in = setTimeout(function() {
            $waPopupChatBox.addClass("wa__lauch");
          }, 100);
        }
      }
    });
  });

  // настройки grab курсора на всех слайдерах
  // let slickLists = $('.slick-list.draggable');

  // slickLists.on('mousedown', function() {
  //   $(this).addClass('grabbing');
  // }).on('beforeChange', function() {
  //   $(this).removeClass('grabbing');
  // });

  // $(document).on('mouseup', function() {
  //   slickLists.removeClass('grabbing');
  // });
});