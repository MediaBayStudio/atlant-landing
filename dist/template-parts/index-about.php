<section class="index-about-sect sect-bg container"<?php echo $section_id ?>>
  <picture class="index-about-sect__pic lazy">
    <source type="image/webp" srcset="#" data-srcset="<?php echo $template_directory_uri ?>/img/about-img.webp">
    <img src="#" alt="<?php echo $section['title'] ?>" data-src="<?php echo $template_directory_uri ?>/img/about-img.jpg" class="index-about-sect__img">
  </picture>
  <div class="index-about-sect__text">
    <h2 class="index-about-sect__title"><?php echo $section['title'] ?></h2>
    <p class="index-about-sect__descr"><?php echo $section['descr'] ?></p>
  </div>
</section>