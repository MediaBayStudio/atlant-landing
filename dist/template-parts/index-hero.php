<?php

if ( $section['v2'] ) {
  $img_name = 'hero-img-v2';
  $sect_class = ' index-hero-v2';

  $descr = '<ul class="index-hero-sect__list">';
  foreach ( $section['list'] as $li ) {
    $descr .= '<li class="index-hero-sect__li">' . $li['li'] . '</li>';
  }
  $descr .= '</ul>';

} else {
  $img_name = 'hero-img';
  $descr = '<p class="index-hero-sect__descr">' . $section['descr'] . '</p>';
  $sect_class = '';
} ?>

<section class="index-hero-sect container<?php echo $sect_class ?>"<?php echo $section_id ?>>
  <div class="index-hero-sect__text">
    <picture class="index-hero-sect__pic">
      <source media="(max-width:575.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-mobile.webp, <?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-mobile@2x.webp 2x">
      <source media="(max-width:575.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-mobile.jpg, <?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-mobile@2x.jpg 2x">
      <source media="(min-width:575.98px) and (max-width:1023.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-tablet.webp, <?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-tablet@2x.webp 2x">
      <source media="(min-width:575.98px) and (max-width:1023.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-tablet.jpg, <?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-tablet@2x.jpg 2x">
      <source media="(min-width:1023.98px) and (max-width:1919.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-desktop.webp">
      <source media="(min-width:1023.98px) and (max-width:1919.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-desktop.jpg">
      <source media="(min-width:1919.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-large.webp">
      <source media="(min-width:1919.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>-large.jpg">
      <img src="<?php echo $template_directory_uri ?>/img/<?php echo $img_name ?>.jpg" alt="#" class="index-hero-sect__img">
    </picture>
    <h2 class="index-hero-sect__title sect-title"><?php echo $section['title'] ?></h2> <?php
    echo $descr ?>
    <p class="index-hero-sect__note">Самые сложные случаи. Лучшие ставки от&nbsp;8%. Деньги в&nbsp;день обращения. Работаем честно и&nbsp;порядочно.</p>
  </div>
  <p class="index-hero-sect__form-title">Оставьте ваши контакты и получите решение уже сегодня</p> <?php
  echo do_shortcode( '[contact-form-7 id="' . $section['form']->ID . '" html_class="index-hero-sect__form form" html_id="hero-form"]' ) ?>
</section>