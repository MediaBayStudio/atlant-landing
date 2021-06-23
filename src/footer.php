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
      <div id="fake-scrollbar"></div> <?php
      wp_footer() ?>
    </div>
  </body>
</html>