<section class="index-faq-sect sect container"<?php echo $section_id ?>>
  <h2 class="index-faq-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h2>
  <ul class="index-faq-sect__list"> <?php
    foreach ( $section['list'] as $li ) : ?>
      <li class="index-faq-sect__item lazy" data-src="#">
        <div class="index-faq-sect__item-question lazy" data-src="#">
          <p class="index-faq-sect__item-title"><?php echo $li['faq_q'] ?></p>
        </div>
        <div class="index-faq-sect__item-answer">
          <p class="index-faq-sect__item-descr"><?php echo $li['faq_a'] ?></p>
        </div>
      </li> <?php
    endforeach ?>
  </ul>
</section>