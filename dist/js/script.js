var mask,lazy,menu,burger,hdr,overlay,body,fakeScrollbar,thanksPopup,mobileMenu,browser={isOpera:!!window.opr&&!!opr.addons||!!window.opera||0<=navigator.userAgent.indexOf(" OPR/"),isFirefox:"undefined"!=typeof InstallTrigger,isSafari:/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),isIE:!!document.documentMode,isEdge:!document.documentMode&&!!window.StyleMedia,isChrome:!!window.chrome&&!!window.chrome.webstore,isYandex:!!window.yandex,isMac:0<=window.navigator.platform.toUpperCase().indexOf("MAC")},SLIDER={hasSlickClass:function(e){return e.hasClass("slick-slider")},unslick:function(e){e.slick("unslick")},createArrow:function(e,t){return'<button type="button" class="arrow arrow_'+(e=(-1===e.indexOf("prev")?"next ":"prev ")+e)+'">'+t+"</button>"}},windowFuncs={load:[],resize:[],scroll:[],call:function(e){for(var t=windowFuncs[e.type]||e,n=t.length-1;0<=n;n--)t[n]()}},q=function(e,t){return(t=t||body).querySelector(e)},qa=function(e,t,n){return t=t||body,n?Array.prototype.slice.call(t.querySelectorAll(e)):t.querySelectorAll(e)},id=function(e){return document.getElementById(e)},setVh=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")},media=function(e){return window.matchMedia(e).matches},scrollToTarget=function(e,t){var n,i,a,o;e.preventDefault(),_=this===window?e.target:this,(t=(t=!(t=0==t?body:t||_.getAttribute("data-scroll-target"))&&"A"===_.tagName?q(_.getAttribute("href")):t).constructor===String?q(t):t)&&(menu&&menu.menu.classList.contains("active")&&menu.close(),n=window.pageYOffset,e=getComputedStyle(t),i=t.getBoundingClientRect().top-+e.paddingTop.slice(0,-2)-+e.marginTop.slice(0,-2),a=null,o=function(e){e-=a=null===a?e:a,e=i<0?Math.max(n-e/.35,n+i):Math.min(n+e/.35,n+i);window.scrollTo(0,e),e!=n+i&&requestAnimationFrame(o)},requestAnimationFrame(o))},pageScroll=function(e){fakeScrollbar.classList.toggle("active",e),body.classList.toggle("no-scroll",e),body.style.paddingRight=e?fakeScrollbar.offsetWidth-fakeScrollbar.clientWidth+"px":""},sticky=function(e,t,n){e="string"==typeof e?q(e):e,n=n||"fixed",t=t||"bottom";var i=e.getBoundingClientRect()[t]+pageYOffset,a=e.cloneNode(!0),o=e.parentElement,r=function(){!e.classList.contains(n)&&pageYOffset>=i&&(o.appendChild(o.replaceChild(a,e)),e.classList.add(n),window.removeEventListener("scroll",r),window.addEventListener("scroll",s))},s=function(){e.classList.contains(n)&&pageYOffset<=i&&(o.replaceChild(e,a),e.classList.remove(n),window.removeEventListener("scroll",s),window.addEventListener("scroll",r))};a.classList.add("clone"),r(),window.addEventListener("scroll",r)};document.addEventListener("DOMContentLoaded",function(){var e,t,n,i;for(e in body=document.body,function(){mask=function(){var e="+7(___)___-__-__",t=0,n=e.replace(/\D/g,""),i=this.value.replace(/\D/g,"");n.length>=i.length&&(i=n),this.value=e.replace(/./g,function(e){return/[_\d]/.test(e)&&t<i.length?i.charAt(t++):t>=i.length?"":e}),"blur"===event.type?2===this.value.length&&(this.value="",this.classList.remove("filled")):(n=this.value.length,(e=this).focus(),e.setSelectionRange?e.setSelectionRange(n,n):e.createTextRange&&((e=e.createTextRange()).collapse(!0),e.moveEnd("character",n),e.moveStart("character",n),e.select()))};for(var e=qa("[name=tel]"),t=0;t<e.length;t++)e[t].addEventListener("input",mask),e[t].addEventListener("focus",mask),e[t].addEventListener("blur",mask)}(),function(){function t(e){var u=e.form,t=e.formBtn,l=e.uploadFilesBlock,c="invalid",f=(e.filesInput,{name:{required:!0},tel:{required:!0,pattern:/\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,or:"email"},email:{required:!0,pattern:/^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,or:"tel"},msg:{required:!0,pattern:/[^\<\>\[\]%\&'`]+$/},policy:{required:!0}}),m={tel:{required:"Введите ваш телефон или E-mail",pattern:"Укажите верный телефон"},name:{required:"Введите ваше имя"},email:{required:"Введите ваш E-mail или телефон",pattern:"Введите верный E-mail"},msg:{required:"Введите ваше сообщение",pattern:"Введены недопустимые символы"},policy:{required:"Согласитесь с политикой конфиденциальности"}},p=function(e){var t,n={},i=u,a=function(e){var t,n=e.elements,i={};for(t in f){var a=n[t];a&&(i[t]=a.value)}return i}(i);for(t in a){var o=f[t],r=i[t],s=a[t],l=o.or,c=i[l];if(o&&(r.hasAttribute("required")||!0===o.required)){var d=r.type,o=o.pattern;if(("checkbox"===d||"radio"===d)&&!r.checked||""===s){if(!l||!c){n[t]=m[t].required;continue}if(""===c.value){n[t]=m[t].required;continue}}"cehckbox"!==d&&"radio"!==d&&o&&""!==s&&!1===o.test(s)?n[t]=m[t].pattern:h(r)}}0==Object.keys(n).length?(i.removeEventListener("change",p),i.removeEventListener("input",p),u.validatie=!0):(i.addEventListener("change",p),i.addEventListener("input",p),v(i,n),u.validatie=!1)},v=function(e,t){var n,i=e.elements;for(n in t){var a=t[n],o='<label class="'+c+'">'+a+"</label>",r=i[n],s=r.nextElementSibling;s&&s.classList.contains(c)?s.textContent!==a&&(s.textContent=a):(r.insertAdjacentHTML("afterend",o),r.classList.add(c))}},h=function(e){var t=e.nextElementSibling;e.classList.remove(c),t&&t.classList.contains(c)&&t.parentElement.removeChild(t)};u.setAttribute("novalidate",""),u.validatie=!1,t.addEventListener("click",function(){p(),!1===u.validatie?event.preventDefault():u.classList.add("loading")}),document.wpcf7mailsent||(document.addEventListener("wpcf7mailsent",function(e){var t=q("#"+e.detail.id+">form");if("wpcf7mailsent"===e.type){for(var n=t.elements,i=0;i<n.length;i++)h(n[i]),n[i].classList.remove("filled");t.reset(),l&&(l.innerHTML="")}t.classList.remove("loading"),setTimeout(function(){t.classList.remove("sent")},3e3),thanksPopup.openPopup(),thanksPopupTimer=setTimeout(function(){thanksPopup.closePopup()},3e3)}),document.wpcf7mailsent=!0),u.addEventListener("input",function(){var e=event.target,t=e.type,n=e.files,i=e.classList,a=e.value;if("text"===t||"TEXTAREA"===e.tagName)""===a?i.remove("filled"):i.add("filled");else if("file"===t){for(var o="",r=0,s=n.length;r<s;r++)o+='<span class="uploadedfiles__file"><span class="uploadedfiles__file-text">'+n[r].name+"</span></span>";l.innerHTML=o}})}for(var n=[id("hero-form"),id("quiz-form"),id("questions-form")],i=n.length-1;0<=i;i--)n[i]&&function(){var e=void 0;switch(n[i].id){case"hero-form":e="ym(82213117,'reachGoal','submit_form_under_first_screen')";break;case"quiz-form":e="ym(82213117,'reachGoal','submit_kviz')";break;case"questions-form":e="ym(82213117,'reachGoal','questions')"}e=e&&new Function(e),n[i].addEventListener("submit",function(){sptRecordConversion(218),e&&e()}),t({form:n[i],formBtn:q("button",n[i]),uploadFilesBlock:q(".uploadedfiles",n[i]),filesInput:q('input[type="file"]',n[i])})}()}(),mobileMenu=function(e){function i(e,t){for(var n=[e,t],i=["transform","transition"],a=["translate3d("+e+", 0px, 0px)","transform "+t],o=n.length-1;0<=o;o--)0!==n[o]&&(""===n[o]?n[o]="":n[o]=a[o],u.style[i[o]]=n[o])}function t(e){return e.constructor===String?q(e):e}function n(){N||(d.hasAttribute("style")&&(d.removeAttribute("style"),d.offsetHeight),d.classList.add("active"),f.classList.add("active"),u.scrollTop=0,L||(i("0px",".5s"),Z=u.offsetWidth),h||pageScroll(!0))}function a(e,t){var n;N&&(n=e&&e.target,(t||!e||"keyup"===e.type&&27===e.keyCode||n===d||n===m)&&(L?(d.classList.remove("active"),f.classList.remove("active")):i(y,".5s")))}function o(e){B&&(e=e.touches[0]||window.e.touches[0],z=F=!1,H=R=e.clientX,Y=e.clientY,p=Date.now(),u.addEventListener("touchend",b),u.addEventListener("touchmove",_),i(0,""))}function r(e){L?"opacity"===e.propertyName&&E():"transform"===e.propertyName&&E(),B=!0}function s(){d=t(e.menu),u=t(e.menuCnt),f=t(e.openBtn),m=t(e.closeBtn),h=C.allowPageScroll,w=C.toRight,g=C.toLeft,y=g?"100%":w?"-100%":0,L=C.fade,k("add"),L?w=g=!1:(i(y,0),d.addEventListener("touchstart",o)),d.isOpened=!1}function l(){N&&a(),L?w=g=!1:(i("",""),d.removeEventListener("touchstart",o)),k("remove"),m=f=u=d=null}function c(){if(x){for(var e in A=null,x)media(e)&&(A=e);A!==T&&function(){if(A){for(var e in x[A])C[e]=x[A][e];T=A}else{for(var t in S)C[t]=S[t];T=null}d&&(l(),s())}()}d||s()}var d,u,f,m,p,v,h,w,g,y,L,_=function(e){var t;B&&(t=e.touches[0]||window.e.touches[0],e=+u.style.transform.match(O)[0],P=R-t.clientX,R=t.clientX,D=Y-t.clientY,Y=t.clientY,z||F||(t=Math.abs(D),Math.abs(P),7<t||0===P?F=!0:t<7&&(z=!0)),z&&i(g&&R<H||w&&H<R?"0px":e-P+"px",0))},b=function(e){I=H-R;var t=Math.abs(I);v=Date.now(),1<t&&z&&((g&&I<0||w&&0<I)&&(Z*M<=t||v-p<300?a(e,!0):(N=!1,n())),B=!1),d.removeEventListener("touchend",b),d.removeEventListener("touchmove",_)},E=function(){N?(d.isOpened=N=!1,e.opened=!1,f.addEventListener("click",n),m.removeEventListener("click",a),h||pageScroll(!1),d.classList.remove("active"),f.classList.remove("active")):(d.isOpened=N=!0,e.opened=!0,f.removeEventListener("click",n),m.addEventListener("click",a))},k=function(e){f[e+"EventListener"]("click",n),d[e+"EventListener"]("transitionend",r),document[e+"EventListener"]("keyup",a)},C=JSON.parse(JSON.stringify(e)),S=JSON.parse(JSON.stringify(e)),x=e.responsive,A=null,T=null,M=.5,O=(pageYOffset,/([-0-9.]+(?=px))/),z=!1,F=!1,B=!1,N=!1,R=0,P=0,Y=0,D=0,H=0,I=0,Z=0;if(e.menu)return c(),windowFuncs.resize.push(c),{options:C,menu:d,menuCnt:u,openBtn:f,closeBtn:m,open:n,close:a,destroy:l,opened:N}},NodeList.prototype.forEach||(NodeList.prototype.forEach=Array.prototype.forEach),HTMLCollection.prototype.forEach||(HTMLCollection.prototype.forEach=Array.prototype.forEach),fakeScrollbar=id("fake-scrollbar"),burger=q(".hdr__burger"),hdr=q(".hdr"),burger&&(menu=mobileMenu({menu:q(".menu"),menuCnt:q(".menu__cnt"),openBtn:burger,closeBtn:q(".menu__close"),toLeft:!0,fade:!1,allowPageScroll:!1})),qa(".nav-link").forEach(function(e){return e.addEventListener("click",scrollToTarget)}),lazy=new lazyload({clearSrc:!0,clearMedia:!0}),window.svg4everybody&&svg4everybody(),windowFuncs.resize.push(setVh),windowFuncs)"call"===e||0<(t=windowFuncs[e]).length&&(windowFuncs.call(t),window.addEventListener(e,windowFuncs.call));$(document).ready(function(){var e=$(".wa__btn_popup"),t=$(".wa__popup_chat_box");e.on("click",function(){t.hasClass("wa__active")?(t.removeClass("wa__active"),e.removeClass("wa__active"),clearTimeout(i),t.hasClass("wa__lauch")&&(n=setTimeout(function(){t.removeClass("wa__pending"),t.removeClass("wa__lauch")},400))):(t.addClass("wa__pending"),t.addClass("wa__active"),e.addClass("wa__active"),clearTimeout(n),t.hasClass("wa__lauch")||(i=setTimeout(function(){t.addClass("wa__lauch")},100)))})})});