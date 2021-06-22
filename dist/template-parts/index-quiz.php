<section class="index-quiz-sect sect container"<?php echo $section_id ?>>
  <h1 class="index-quiz-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h1>
  <div class="index-quiz-sect__quiz" id="quiz"> <?php
    echo do_shortcode('[contact-form-7 id="' . $section['form']->ID . '" html_class="quiz__form" html_id="quiz-form"]') ?>
  <img src="#" alt="Изображение" class="quiz__img">
  </div>
</section>