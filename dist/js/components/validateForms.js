;
(function() {
  // Массив форм, на которые будет добавлена валидация
  let $forms = [
    id('hero-form'),
    id('quiz-form'),
    id('questions-form')
  ];

  let formValidator = function(params) {
    let $form = params.form,
      $formBtn = params.formBtn,
      $uploadFilesBlock = params.uploadFilesBlock,
      errorsClass = 'invalid',
      $filesInput = params.filesInput,
      // Правила проверки форм, аналогично jquery.validate
      rules = {
        name: {
          required: true
        },
        tel: {
          required: true,
          pattern: /\+7\([0-9]{3}\)[0-9]{3}\-[0-9]{2}\-[0-9]{2}/,
          or: 'email'
        },
        email: {
          required: true,
          pattern: /^[A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z])+$/,
          or: 'tel'
        },
        msg: {
          required: true,
          pattern: /[^\<\>\[\]%\&'`]+$/
        },
        policy: {
          required: true
        }
      },
      messages = {
        tel: {
          required: 'Введите ваш телефон или E-mail',
          pattern: 'Укажите верный телефон'
        },
        name: {
          required: 'Введите ваше имя',
        },
        email: {
          required: 'Введите ваш E-mail или телефон',
          pattern: 'Введите верный E-mail'
        },
        msg: {
          required: 'Введите ваше сообщение',
          pattern: 'Введены недопустимые символы'
        },
        policy: {
          required: 'Согласитесь с политикой конфиденциальности'
        }
      },
      /*
        Функция получения значения полей у текущей формы.
        Ищет только те элементы формы, именя которых указаны в rules.
        Возвращает объект: 
        {название-поля: значение-поля}
        Например:
        {'user-email': 'mail@mail.ru'}
      */
      getFormData = function($form) {
        let formElements = $form.elements,
          values = {};

        for (let rule in rules) {
          let formElement = formElements[rule];

          if (formElement) {
            values[rule] = formElement.value;
          }
        }

        return values;
      },
      /*
        Функция проверки правильности заполнения формы.
      */
      validationForm = function(event) {
        let errors = {},
          thisForm = $form,
          values = getFormData(thisForm);

        for (let elementName in values) {
          let rule = rules[elementName],
            $formElement = thisForm[elementName],
            elementValue = values[elementName],
            or = rule.or,
            $orFormElement = thisForm[or];

          if (rule) {
            if ($formElement.hasAttribute('required') || rule.required === true) {
              let elementType = $formElement.type,
                pattern = rule.pattern;

              // Если элемент не чекнут или пустой
              if (((elementType === 'checkbox' || elementType === 'radio') && !$formElement.checked) ||
                elementValue === '') {

                if (or && $orFormElement) {
                  if ($orFormElement.value === '') {
                    errors[elementName] = messages[elementName].required;
                    continue;
                  }
                } else {
                  errors[elementName] = messages[elementName].required;
                  continue;
                }
              }

              // Если текстовый элемент, у которого есть щаблон для заполнения
              if (elementType !== 'cehckbox' && elementType !== 'radio' && pattern) {
                if (elementValue !== '' && pattern.test(elementValue) === false) {
                  errors[elementName] = messages[elementName].pattern;
                  continue;
                }
              }

              hideError($formElement);
            }
          }
        }

        if (Object.keys(errors).length == 0) {
          thisForm.removeEventListener('change', validationForm);
          thisForm.removeEventListener('input', validationForm);
          $form.validatie = true;
        } else {
          thisForm.addEventListener('change', validationForm);
          thisForm.addEventListener('input', validationForm);
          showErrors(thisForm, errors);
          $form.validatie = false;
        }

      },
      showErrors = function($form, errors) {
        let $formElements = $form.elements;

        for (let elementName in errors) {
          let errorText = errors[elementName],
            $errorElement = `<label class="${errorsClass}">${errorText}</label>`,
            $formElement = $formElements[elementName],
            $nextElement = $formElement.nextElementSibling;

          if ($nextElement && $nextElement.classList.contains(errorsClass)) {
            if ($nextElement.textContent !== errorText) {
              $nextElement.textContent = errorText;
            }
            continue;
          } else {
            $formElement.insertAdjacentHTML('afterend', $errorElement);
          }

          $formElement.classList.add(errorsClass);
        }

      },
      hideError = function($formElement) {
        let $nextElement = $formElement.nextElementSibling;
        $formElement.classList.remove(errorsClass);
        if ($nextElement && $nextElement.classList.contains(errorsClass)) {
          $nextElement.parentElement.removeChild($nextElement);
        }
      },
      submitHandler = function(event) {
        let $form = q('#' + event.detail.id + '>form'),
          eventType = event.type;

        if (eventType === 'wpcf7mailsent') {
          let $formElements = $form.elements,
            ct_site_id = '44785',
            ct_data = {
              fio: $form.name.value,
              phoneNumber: $form.tel.value,
              email: $form.email.value,
              subject: $form['your-subject'],
              sessionId: window.ct('calltracking_params', 's8r7mcml').sessionId
            };

          if ($form['quiz-result'].value) {
            ct_data['comment'] = $form['quiz-result'].value;
          }

          console.log(ct_data);

          jQuery.ajax({
            url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
            dataType: 'json',
            type: 'POST',
            data: ct_data
          });

          for (let i = 0; i < $formElements.length; i++) {
            hideError($formElements[i]);
            $formElements[i].classList.remove('filled');
          }

          $form.reset();
          if ($uploadFilesBlock) {
            $uploadFilesBlock.innerHTML = '';
          }
          // if ($form === $quizForm) {
          //   id('quiz').resetQuiz();
          // }
          console.log('отправлено');
        }
        /* else if (eventType === 'wpcf7mailfailed') {
                console.log('отправка не удалась');
              }*/

        $form.classList.remove('loading');

        setTimeout(function() {
          $form.classList.remove('sent');
        }, 3000);

        thanksPopup.openPopup();
        thanksPopupTimer = setTimeout(function() {
          thanksPopup.closePopup();
        }, 3000);

      },
      toggleInputsClass = function() {
        let $input = event.target,
          type = $input.type,
          files = $input.files,
          classList = $input.classList,
          value = $input.value;

        if (type === 'text' || $input.tagName === 'TEXTAREA') {
          if (value === '') {
            classList.remove('filled');
          } else {
            classList.add('filled');
          }
        } else if (type === 'file') {
          // $input.filesArray = [];

          let uploadedFiles = '';
          for (let i = 0, len = files.length; i < len; i++) {
            // $input.filesArray[i] = files[i];
            uploadedFiles += '<span class="uploadedfiles__file"><span class="uploadedfiles__file-text">' + files[i].name + '</span></span>';
          }
          $uploadFilesBlock.innerHTML = uploadedFiles;
        }
      };

    $form.setAttribute('novalidate', '');
    $form.validatie = false;
    $formBtn.addEventListener('click', function() {
      validationForm();
      if ($form.validatie === false) {
        event.preventDefault();
      } else {
        $form.classList.add('loading');
      }
    });
    if (!document.wpcf7mailsent) {
      document.addEventListener('wpcf7mailsent', submitHandler);
      document.wpcf7mailsent = true;
    }
    $form.addEventListener('input', toggleInputsClass);
  };

  for (var i = $forms.length - 1; i >= 0; i--) {
    if ($forms[i]) {
      let ymReachGoal;

      switch ($forms[i].id) {
        case 'hero-form':
          ymReachGoal = "ym(82213117,'reachGoal','submit_form_under_first_screen')";
          break;
        case 'quiz-form':
          ymReachGoal = "ym(82213117,'reachGoal','submit_kviz')";
          break;
        case 'questions-form':
          ymReachGoal = "ym(82213117,'reachGoal','questions')";
          break;
      }

      if (ymReachGoal) {
        ymReachGoal = new Function(ymReachGoal);
      }

      $forms[i].addEventListener('submit', function() {
        sptRecordConversion(218);
        if (ymReachGoal) {
          ymReachGoal();
        }
      });

      formValidator({
        form: $forms[i],
        formBtn: q('button', $forms[i]),
        uploadFilesBlock: q('.uploadedfiles', $forms[i]),
        filesInput: q('input[type="file"]', $forms[i])
      });
    }
  }
})();