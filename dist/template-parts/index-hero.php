<section class="index-hero-sect container"<?php echo $section_id ?>>
  <picture class="index-hero-sect__pic">
    <source media="(max-width:575.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/hero-img-mobile.webp, <?php echo $template_directory_uri ?>/img/hero-img-mobile@2x.webp 2x">
    <source media="(max-width:575.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/hero-img-mobile.jpg, <?php echo $template_directory_uri ?>/img/hero-img-mobile@2x.jpg 2x">
    <source media="(min-width:575.98px) and (max-width:1023.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/hero-img-tablet.webp, <?php echo $template_directory_uri ?>/img/hero-img-tablet@2x.webp 2x">
    <source media="(min-width:575.98px) and (max-width:1023.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/hero-img-tablet.jpg, <?php echo $template_directory_uri ?>/img/hero-img-tablet@2x.jpg 2x">
    <source media="(min-width:1023.98px) and (max-width:1919.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/hero-img-desktop.webp">
    <source media="(min-width:1023.98px) and (max-width:1919.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/hero-img-desktop.jpg">
    <source media="(min-width:1919.98px)" type="image/webp" srcset="<?php echo $template_directory_uri ?>/img/hero-img-large.webp">
    <source media="(min-width:1919.98px)" type="image/jpeg" srcset="<?php echo $template_directory_uri ?>/img/hero-img-large.jpg">
    <img src="<?php echo $template_directory_uri ?>/img/hero-img.jpg" alt="#" class="index-hero-sect__img">
  </picture>
  <h1 class="index-hero-sect__title sect-title"><?php echo $section['title'] ?></h1>
  <p class="index-hero-sect__descr"><?php echo $section['descr'] ?></p> <?php
  echo do_shortcode( '[contact-form-7 id="' . $section['form']->ID . '" html_class="index-hero-sect__form form" html_id="hero-form"]' ) ?>
</section>