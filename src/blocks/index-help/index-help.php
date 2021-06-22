<section class="index-services-sect container"<?php echo $section_id ?>>
  <picture class="index-services-sect__pic lazy">
    <source type="image/webp" srcset="#" data-srcset="<?php echo $template_directory_uri ?>/img/services-img.webp">
    <img src="#" alt="#" data-src="<?php echo $template_directory_uri ?>/img/services-img.png" class="index-services-sect__img">
  </picture>
  <div class="index-services-sect__text">
    <h1 class="index-services-sect__title sect-title"><?php echo $section['title'] ?></h1>
    <ul class="index-services-sect__list"> <?php
      foreach ( $section['list'] as $li ) : ?>
        <li class="index-services-sect__li"><?php echo $li['li'] ?></li> <?php
      endforeach ?>
    </ul>
  </div>
</section>