<aside class="menu" style="display:none">
  <div class="menu__cnt">
    <div class="menu__hdr">
      <img src="<?php echo $logo_url ?>" alt="Логотип Атлант" class="menu__logo">
      <button type="button" class="menu__close"></button>
    </div>
    <a href="tel:<?php echo $tel_dry ?>" class="menu__tel contact-link contact-link-tel-red"><?php echo $tel ?></a>
    <a href="mailto:<?php echo $email ?>" class="menu__email contact-link contact-link-email-red"><?php echo $email ?></a> <?php
    wp_nav_menu( [
      'theme_location'  => 'mobile_menu',
      'container'       => 'nav',
      'container_class' => 'menu__nav',
      'menu_class'      => 'menu__nav-list',
      'items_wrap'      => '<ul class="%2$s">%3$s</ul>'
    ] ) ?>
  </div>
</aside>