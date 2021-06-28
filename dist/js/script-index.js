document.addEventListener("DOMContentLoaded",function(){var e,t,s,r,n,i,a,l,p,o,d;(s=id("features"))&&(t=q(".index-features-sect__list",s),qa(".index-features-sect__li",s),e=$(t),t=function(){media("(min-width:1023.98px)")?SLIDER.hasSlickClass(e)&&SLIDER.unslick(e):SLIDER.hasSlickClass(e)||e.slick({infinite:!1,arrows:!1,dots:!0,slidesToShow:1,centerMode:!0,centerPadding:"20px",dotsClass:"index-features-sect__dots dots",customPaging:function(){return'<button type="button" class="index-features-sect__dot dot"></button>'},mobileFirst:!0,responsive:[{breakpoint:575.98,settings:{slidesToShow:2,centerMode:!1}},{breakpoint:767.98,settings:{slidesToShow:3,centerMode:!1}}]})},windowFuncs.resize.push(t),t()),i=id("quiz"),a=i&&id("quiz-form"),l=a&&q(".quiz__form-result",a),i&&(window.Quiz=(Quiz=function(e,t){var r=this;return r.assign=function(e,t){for(var s in e)void 0===t[s]?t[s]=e[s]:"object"==typeof t[s]&&r.assign(e[s],t[s])},r.createEl=function(e){return document.createElement(e)},r.q=function(e,t){return(t=t||document).querySelector(e)},r.$quiz="string"==typeof e?r.q(e):e,"string"==typeof t.$form?r.$form=r.q(t.$form):r.$form=t.$form,"string"==typeof t.$result?r.$result=r.q(t.$result):r.$result=t.$result,r.options=t||{},r.defaults={headerTag:"div",bodyTag:"div",footerTag:"div",stepTitletag:"span",fieldTag:"label",fieldTitleTag:"span",prevBtnTag:"button",nextBtnTag:"button",dotsTag:"div",dotTag:"div",stepsCounterNumTag:"div",currentStepNumTag:"span",totalStepNumTag:"span",dots:!1,counter:!1,prev:!0,next:!0,headerClass:"quiz__header",bodyClass:"quiz__body",footerClass:"quiz__footer",stepTittleClass:"quiz__step-title",prevBtnClass:"quiz__prev",nextBtnClass:"quiz__next",dotsClass:"quiz__dots",dotClass:"quiz__dot",stepsCounterNumClass:"quiz__steps-counter",currentStepNumClass:"quiz__current-steps-number",totalStepNumClass:"quiz__total-steps-number",gropupInputsClass:"quiz__group-inputs",groupInputsTitleClass:"quiz__group-title",prevBtnText:"Назад",nextBtnText:"Следующий шаг",fieldClasses:{radio:"quiz__radio",checkbox:"quiz__checkbox",text:"quiz__text",textarea:"quiz__text",select:"quiz__select"}},r.$dots=[],r.$steps=[],r.$filledSteps=[],r.radioCount=0,r.checkboxCount=0,r.assign(r.defaults,r.options),r.stepsLength=t.steps.length+1,r.currentStep=0,r.inputHandler=r.input.bind(r),r.nextStepHandler=r.nextStep.bind(r),r.prevStepHandler=r.prevStep.bind(r),r.init(),r.$prevStep=r.$steps[r.currentStep-1],r.$currentStep=r.$steps[r.currentStep],r.$nextStep=r.$steps[r.currentStep+1],r.$filledFieldsOnThisStep=[],r.$fieldsOnThisStep=null,r.result=[],r.printStep(r.currentStep),r.$quiz.resetQuiz=r.resetQuiz,r.dispatchEvent(r.$quiz,"init",r.setEventDetails()),r.$quiz},Quiz.prototype.init=function(){var e=this;e.options;e.$form.parentElement.style.display="none",(e.$quiz.quiz=e).buildInsides(),e.buildSteps(),e.$steps.push(e.$form),e.$next.classList.add("disabled"),e.$prev.classList.add("disabled"),e.$dots[e.currentStep].classList.add("active"),e.$quiz.addEventListener("input",e.inputHandler)},Quiz.prototype.dispatchEvent=function(e,t,s){"function"==typeof window.CustomEvent&&(s=s||{},s=new CustomEvent(t,s),e.dispatchEvent(s))},Quiz.prototype.buildInsides=function(){function e(e,t){"button"===e&&t.setAttribute("type","button")}var t=this,s=t.options;if(t.$header=t.createEl(s.headerTag),t.$body=t.createEl(s.bodyTag),t.$footer=t.createEl(s.footerTag),t.$stepsTitle=t.createEl(s.stepTitletag),t.$header.className=s.headerClass,t.$body.className=s.bodyClass,t.$footer.className=s.footerClass,t.$stepsTitle.className=s.stepTittleClass,s.counter&&(t.$stepsCounter=t.createEl(s.stepsCounterNumTag),t.$counterCurrentNum=t.createEl(s.currentStepNumTag),t.$counterTotalNum=t.createEl(s.totalStepNumTag),t.$stepsCounter.className=s.stepsCounterNumClass,t.$counterCurrentNum.className=s.currentStepNumClass,t.$counterTotalNum.className=s.totalStepNumClass,t.$counterCurrentNum.textContent=t.currentStep+1,t.$counterTotalNum.textContent=t.stepsLength,t.$stepsCounter.innerHTML="<span>Шаг</span> ",t.$stepsCounter.appendChild(t.$counterCurrentNum),t.$stepsCounter.insertAdjacentHTML("beforeend"," <span>из</span> "),t.$stepsCounter.appendChild(t.$counterTotalNum)),s.dots){t.$dotsBlock=t.createEl(s.dotsTag),t.$dotsBlock.className=s.dotsClass;for(var r=0;r<t.stepsLength;r++){var n=t.createEl(s.dotTag);n.className=s.dotClass,e(s.dotTag,n),t.$dots[r]=n,t.$dotsBlock.appendChild(n)}}s.prev&&(t.$prev=t.createEl(s.prevBtnTag),t.$prev.className=s.prevBtnClass,e(s.prevBtnTag,t.$prev),t.$prev.textContent=s.prevBtnText),s.next&&(t.$next=t.createEl(s.nextBtnTag),t.$next.className=s.nextBtnClass,e(s.nextBtnTag,t.$next),t.$next.textContent=s.nextBtnText),t.$header.appendChild(t.$stepsCounter),t.$header.appendChild(t.$dotsBlock),t.$header.appendChild(t.$stepsTitle),t.$footer.appendChild(t.$prev),t.$footer.appendChild(t.$next),t.$quiz.appendChild(t.$header),t.$quiz.appendChild(t.$body),t.$quiz.appendChild(t.$footer)},Quiz.prototype.setEventDetails=function(){var e=this;return{detail:{prevStep:e.currentStep-1,currentStep:e.currentStep,nextStep:e.currentStep+1,stepsLength:e.stepsLength,currentStepObject:e.$currentStep,quizObject:e}}},Quiz.prototype.buildSteps=function(){var e,t=this,s=t.options.steps;for(e in s){var r=s[e],n=r.fields,i=r.options,a=r.extrafields,l={};if(n){var p=r["step-title"],n=t.parseFields(n),a=a&&t.parseExtraFields(a);l["step-title"]=p,l.fields=n.fieldsArray,l.extrafields=a,l.html=n.html,l.options=i}else for(var o in r){var d=t.parseFields(r[o].fields),u=r[o].extrafields,c=r[o]["step-title"],f=r[o].options,u=u&&t.parseExtraFields(u);l[o]={options:f,"step-title":c,fields:d.fieldsArray,extrafields:u,html:d.html}}t.$steps.push(l)}},Quiz.prototype.parseFields=function(e,t){var s,r=this,n=r.options,i={fieldsArray:[],html:[]};for(s in e){var a=e[s],l=a.type,p=a["group-title"],o=a.title,d=a.required,u=a.values,c=a.placeholder,f="textarea"===l?"textarea":"input",$=n.fieldClasses[l],v=l;if("text"===l||"number"===l||"textarea"===l){var h=r.createEl(n.fieldTag),S=r.createEl(n.fieldTitleTag),m=r.createEl(f),a="textarea"===l?"-textarea":"-inp",x={};t&&h.setAttribute("data-extra-field",""),m.type=l,c&&(m.placeholder=c),S.textContent=o,S.setAttribute("data-field-title",""),h.className=$,m.className=$+a+(d?" required":""),S.className=$+"-title",h.appendChild(S),h.appendChild(m),x.input=m,x.field=h,x.title=S,i.fieldsArray.push(x),i.html.push(h)}else if(u&&0<u.length){var C=void 0,S=void 0,g=void 0,x=void 0,h=void 0;p&&(C=r.createEl("div"),S=r.createEl("span"),C.className=n.gropupInputsClass,S.className=n.groupInputsTitleClass,S.textContent=p,S.setAttribute("data-field-title",""),C.appendChild(S)),"select"===l&&(x=r.createEl(n.fieldTag),g=r.createEl("select"),h=r.createEl(n.fieldTitleTag),x.appendChild(h),x.appendChild(g),h.className=$+"-title",h.textContent=o,h.setAttribute("data-field-title",""),x.className=$,g.className=$+"-inp"+(d?" required":""));for(var T=0,b=u.length;T<b;T++){var q=void 0,E=void 0,z=void 0,y=void 0,L=void 0,_={};"select"===l?((z=r.createEl("option")).value=z.textContent=u[T],q=g):(q=r.createEl(n.fieldTag),E=r.createEl(n.fieldTitleTag),z=r.createEl(f),y=r.createEl("span"),L="radio"===l?"radio-"+r.radioCount:"checkbox-"+r.checkboxCount,z.value=u[T],z.name=L,z.type=l,E.textContent=u[T],y.className=$+"-pseudo-inp",q.className=$,z.className=$+"-inp"+(d?" required":"")),E&&(E.className=$+"-title",_.title=E),_.input=z,(_.field=q).appendChild(z),y&&q.appendChild(y),E&&q.appendChild(E),C&&"select"!==l&&C.appendChild(q),i.fieldsArray.push(_)}C?(x&&C.appendChild(x),i.html.push(C)):x&&i.html.push(x)}}return"radio"===v&&r.radioCount++,"checkbox"===v&&r.checkboxCount++,i},Quiz.prototype.parseExtraFields=function(e){var t,s={};for(t in e){var r=e[t],r=this.parseFields(r,!0);s[t]=r}return s},Quiz.prototype.clearPrevStep=function(){var e=this,t=e.$body,s=e.$prevStep;if(formParent=e.$form.parentElement,s)if(s===e.$form)formParent.style.display="none",e.$quiz.replaceChild(t,formParent),e.$result.value="";else{for(var r=s.html,n=s.extrafields,i=0,a=r.length;i<a;i++)t.removeChild(r[i]);if(n)for(var l in n)for(var p=n[l].html,o=0,d=p.length;o<d;o++)t.contains(p[o])&&t.removeChild(p[o])}},Quiz.prototype.printStep=function(e){var t,s=this,r=(s.options,s.$body),n=s.$prevStep,i=s.$currentStep.html,a=n&&n.value;if(formParent=s.$form.parentElement,s.$currentStep!==s.$form){if(!i){if(a)for(var l in a){var p=a[l],o=!1;if(1===p.length){if(s.$currentStep[p=""+p]){t=p;break}for(var d in s.$currentStep)if(-1!==d.indexOf(p)){t=d,o=!0;break}}else for(var u=0,c=p.length;u<c;u++){for(var f in s.$currentStep)if(-1!==f.indexOf(p[u])){t=f,o=!0;break}if(o)break}if(o)break}t&&(s.$currentStep=s.$currentStep[t],i=s.$currentStep.html)}for(var $ in s.clearPrevStep(),i){$=i[$];r.appendChild($)}s.$stepsTitle.textContent=s.$currentStep["step-title"],s.$fieldsOnThisStep=qa("select, input, textarea",r,!0);for(var v=s.$fieldsOnThisStep.length-1;0<=v;v--){var h=s.$fieldsOnThisStep[v],S=h.type;h.checked&&(h.checked=!1),"text"!==S&&"textarea"!==S&&"number"!==S||(h.value=""),"SELECT"===h.tagName&&(h.selectedIndex=0)}}else{formParent.style.display="block",s.$quiz.replaceChild(formParent,r),s.$quiz.classList.add("final-step");for(var m=0,x=s.result.length;m<x;m++){var C,g=s.result[m];for(C in g){var T=g[C].join(", ");s.$result.value+=C+": "+T+"\n"}}s.clearPrevStep()}},Quiz.prototype.input=function(){for(var i=this,a=i.$currentStep.extrafields,l=[],p=[],o=[],d=[],u=[],c=[],f=[],e=!0,t=!0,s=i.$fieldsOnThisStep.length-1;0<=s;s--)(function(e){var t=i.$fieldsOnThisStep[e],s=t.type,r=t.value,e=t.tagName,n=t.checked;if("radio"===s?(l[l.length]=t,a&&a[r]&&a[r].html.forEach(function(e){var t=i.$body.contains(e),s=q("input",e);n?t||(s.value="",i.$body.appendChild(e),i.$fieldsOnThisStep.push(s),s.classList.contains("required")&&d.push(s)):t&&(s.value="",i.$body.removeChild(e),t=i.$fieldsOnThisStep.indexOf(s),e=d.indexOf(s),s=c.indexOf(s),-1!==t&&i.$fieldsOnThisStep.splice(t,1),-1!==e&&d.splice(e,1),-1!==s&&c.splice(s,1))})):"checkbox"===s?p[p.length]=t:"select"===e&&(o[o.length]=t),t.classList.contains("required")&&(d[d.length]=t,""===r?u[u.length]=t:c[c.length]=t),""!==r){if(("radio"===s||"checkbox"===s)&&!n)return;f[f.length]=t}})(s);0<l.length&&(e=l.some(function(e){return e.checked})),0<p.length&&(t=p.some(function(e){return e.checked})),d.length===c.length&&e&&t?(i.$next.classList.remove("disabled"),i.$next.addEventListener("click",i.nextStepHandler)):(i.$next.classList.add("disabled"),i.$next.removeEventListener("click",i.nextStepHandler)),i.$filledFieldsOnThisStep=f},Quiz.prototype.nextStep=function(){for(var e=this,t=e.options,s={},r=e.$filledFieldsOnThisStep,n=0,i=r.length;n<i;n++){var a=r[n],l=a.type,l=("radio"===l||"checkbox"===l?a.parentElement:a).parentElement,l=q("[data-field-title]",l).textContent;void 0===s[l]&&(s[l]=[]),s[l].push(a.value)}if(e.result[e.result.length]=s,e.$prevStep=e.$currentStep,e.$prevStep.value=s,e.currentStep++,e.$currentStep=e.$steps[e.currentStep],e.$nextStep=e.$steps[e.currentStep+1],e.printStep(e.currentStep),t.prev&&0<e.currentStep&&(e.$prev.classList.remove("disabled"),e.$prev.addEventListener("click",e.prevStepHandler)),t.next){for(var p=!1,o=0,d=e.$fieldsOnThisStep.length;o<d;o++)if(e.$fieldsOnThisStep[o].classList.contains("required")){p=!0;break}p?(e.$next.classList.add("disabled"),e.$next.removeEventListener("click",e.nextStepHandler)):e.input()}t.dots&&(e.$dots[e.currentStep-1].classList.remove("active"),e.$dots[e.currentStep].classList.add("active")),t.counter&&(e.$counterCurrentNum.textContent=e.currentStep+1),e.$filledSteps.push(e.$prevStep),e.dispatchEvent(e.$quiz,"nextstep",e.setEventDetails())},Quiz.prototype.prevStep=function(){var e=this,t=e.options;if(e.$prevStep=e.$currentStep,e.currentStep--,e.$currentStep=e.$filledSteps[e.currentStep],e.$nextStep=e.$filledSteps[e.currentStep-1],e.result.pop(),e.printStep(e.currentStep),t.prev&&(e.$prev.classList.toggle("disabled",0===e.currentStep),0===e.currentStep&&e.$prev.removeEventListener("click",e.prevStepHandler)),t.next){for(var s=!1,r=0,n=e.$fieldsOnThisStep.length;r<n;r++)if(e.$fieldsOnThisStep[r].classList.contains("required")){s=!0;break}s?(e.$next.classList.add("disabled"),e.$next.removeEventListener("click",e.nextStepHandler)):(e.$next.classList.remove("disabled"),e.$next.addEventListener("click",e.nextStepHandler))}t.dots&&(e.$dots[e.currentStep].classList.add("active"),e.$dots[e.currentStep+1].classList.remove("active")),t.counter&&(e.$counterCurrentNum.textContent=e.currentStep+1),e.$quiz.classList.remove("final-step"),e.$filledSteps.pop(),e.dispatchEvent(e.$quiz,"prevstep",e.setEventDetails())},Quiz.prototype.resetQuiz=function(){var e=this.quiz;if(e.$prevStep=e.$currentStep,e.currentStep=0,e.$currentStep=e.$steps[e.currentStep],e.$nextStep=e.$steps[e.currentStep+1],e.$filledSteps=[],e.$filledFieldsOnThisStep=[],e.$fieldsOnThisStep=null,e.result=[],e.$quiz.classList.remove("final-step"),e.$prev.classList.add("disabled"),e.$next.classList.add("disabled"),e.printStep(e.currentStep),e.$stepsTitle.textContent=e.$currentStep["step-title"],e.options.counter&&(e.$counterCurrentNum.textContent=e.currentStep+1),e.options.dots){for(var t=0,s=e.$dots.length;t<s;t++)e.$dots[t].classList.remove("active");e.$dots[e.currentStep].classList.add("active")}},Quiz),r=new XMLHttpRequest,templateDirectoryUri,n=function(e){e.detail.currentStepObject.options},r.open("post",templateDirectoryUri+"/quiz-kredit-pod-zalog.json"),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(),i.addEventListener("init",function(e){n(e)}),i.addEventListener("nextstep",function(e){n(e),scrollToTarget(e,i)}),i.addEventListener("prevstep",function(e){n(e),scrollToTarget(e,i)}),r.addEventListener("readystatechange",function(){var e;4===r.readyState&&200===r.status&&(e=JSON.parse(r.response),new Quiz(i,{steps:e,dots:!0,counter:!0,nextBtnClass:"quiz__next btn btn_blue",nextBtnText:"Дальше",$form:a,$result:l}))})),(d=q(".index-faq-sect__list"))&&(p=d.children,(o=function(e){if(e){var t=e.parentElement,e=q(".active",d);t&&t.classList.add("active"),e&&e.classList.remove("active"),t&&(t.style.maxHeight=t.scrollHeight+"px"),e&&(e.style.maxHeight=e.children[0].scrollHeight+"px")}else for(var s=p.length-1;0<=s;s--)p[s].style.maxHeight=p[s].children[0].scrollHeight+"px"})(),d.addEventListener("click",function(){var e=event.target;e.classList.contains("index-faq-sect__item-question")&&o(e)})),thanksPopup=new Popup("#thanks-popup",{closeButtons:".thanks-popup__close"})});