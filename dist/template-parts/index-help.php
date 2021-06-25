<section class="index-services-sect sect-bg container"<?php echo $section_id ?>>
  <picture class="index-services-sect__pic lazy">
    <source type="image/webp" srcset="#" data-srcset="<?php echo $template_directory_uri ?>/img/services-img.webp">
    <img src="#" alt="#" data-src="<?php echo $template_directory_uri ?>/img/services-img.png" class="index-services-sect__img">
  </picture>
  <div class="index-services-sect__text">
    <h2 class="index-services-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h2>
    <ul class="index-services-sect__list"> <?php
      foreach ( $section['list'] as $li ) : ?>
        <li class="index-services-sect__li"><?php echo $li['li'] ?></li> <?php
      endforeach ?>
    </ul>
  </div>
</section>