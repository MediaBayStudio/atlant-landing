<section class="index-questions-sect sect container"<?php echo $section_id ?>>
  <div class="index-questions-sect__wrap">
    <h2 class="index-questions-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h2>
    <p class="index-questions-sect__descr"><?php echo $section['descr'] ?></p> <?php
    echo do_shortcode( '[contact-form-7 id="' . $section['form']->ID . '" html_class="index-questions-sect__form form" html_id="questions-form"]' ) ?>
  </div>
</section>