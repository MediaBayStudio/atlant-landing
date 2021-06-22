<section class="index-features-sect sect container"<?php echo $section_id ?>>
  <h1 class="index-features-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h1>
  <ul class="index-features-sect__list"> <?php
    foreach ( $section['list'] as $li ) : ?>
      <li class="index-features-sect__feature lazy" data-src="#">
        <img src="#" alt="#" data-src="<?php echo $li['img']['url'] ?>" class="index-features-sect__feature-img lazy">
        <span class="index-features-sect__feature-title"><?php echo $li['title'] ?></span>
        <p class="index-features-sect__feature-descr"><?php echo $li['descr'] ?></p>
      </li> <?php
    endforeach ?>
  </ul>
</section>