<section class="index-quiz-sect sect container"<?php echo $section_id ?>>
  <h1 class="index-quiz-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h1>
  <div class="index-quiz-sect__quiz quiz" id="quiz"> <?php
    echo do_shortcode('[contact-form-7 id="' . $section['form']->ID . '" html_class="quiz__form" html_id="quiz-form"]') ?>
    <picture class="quiz__pic lazy">
      <source type="image/webp" srcset="#" data-srcset="<?php echo $template_directory_uri ?>/img/quiz-img.webp">
      <img src="#" alt="Изображение" data-src="<?php echo $template_directory_uri ?>/img/quiz-img.png" class="quiz__img">
    </picture>
  </div>
</section>