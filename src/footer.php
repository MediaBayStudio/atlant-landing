      <?php
        global 
          $address,
          $address_link,
          $logo_url,
          $email,
          $tel,
          $tel_dry,
          $site_url,
          $template_directory_uri ?>
      <footer class="ftr container">
        <img src="<?php echo $logo_url ?>" alt="Логотип Атлант" class="ftr__logo">
        <div class="ftr__contacts">
          <a href="<?php echo $address_link ?>" class="ftr__contact contact-link contact-link-geo-blue lazy" data-src="#"><?php echo $address ?></a>
          <div class="ftr__contacts-tel-email">
            <a href="tel:<?php echo $tel_dry ?>" class="ftr__contact contact-link contact-link-tel-blue lazy" data-src="#"><?php echo $tel ?></a>
            <a href="mailto:<?php echo $email ?>" class="ftr__contact contact-link contact-link-email-blue lazy" data-src="#"><?php echo $email ?></a>
          </div>
        </div>
        <div class="ftr__bottom">
          <div class="ftr__policy-copy-wrap">
            <a href="<?php echo $site_url ?>/policy.pdf" target="_blank" title="Посмотреть политику конфиденциальности" class="ftr__policy">Политика конфиденциальности</a>
            <p class="ftr__copy">&copy;&nbsp;2016-<?php echo date( 'Y' ) ?>, ИП&nbsp;Занько Михаил Александрович. Все права защищены.</p>
          </div>
          <div class="ftr__dev">Разработка сайта – <a href="https://media-bay.ru" target="_blank" class="ftr__dev-link" title="Перейти на сайт разработчика">media bay</a></div>
        </div>
      </footer>
      <div class="wa__btn_popup">
        <div class="wa__btn_popup_icon"></div>
      </div>
      <div class="wa__popup_chat_box">
        <div class="wa__popup_heading">
          <div class="wa__popup_intro"><b>Задайте ваш вопрос в WhatsApp! </b>
            <div id="\&quot;eJOY__extension_root\&quot;"></div>
          </div>
          <div class="wa__popup_intro">Отвечаем в течение 15 минут.</div>
        </div>
        <!-- /.wa__popup_heading -->
        <div class="wa__popup_content wa__popup_content_left">
          <div class="wa__popup_content_list">
            <div class="wa__popup_content_item ">
              <a target="_blank" href="https://api.whatsapp.com/send?phone=<?php echo $whatsapp_number ?>&text=Здравствуйте, " class="wa__stt wa__stt_online">
                <div class="wa__popup_avatar">
                  <div class="wa__cs_img_wrap lazy" data-src="url(<?php echo $template_directory_uri ?>/img/wa-img.jpg)"></div>
                </div>
                <div class="wa__popup_txt">
                  <div class="wa__member_name">Михаил</div>
                  <!-- /.wa__member_name -->
                  <div class="wa__member_duty">Генеральный директор</div>
                  <!-- /.wa__member_duty -->
                  <div class="wa__member_status">Отвечу на&nbsp;ваши вопросы об&nbsp;услугах и&nbsp;условиях сотрудничества.</div>
                </div>
                <!-- /.wa__popup_txt -->
              </a>
            </div>
          </div>
          <!-- /.wa__popup_content_list -->
        </div>
        <!-- /.wa__popup_content -->
      </div>
      <div id="fake-scrollbar"></div> <?php
      wp_footer() ?>
    </div>
  </body>
</html>