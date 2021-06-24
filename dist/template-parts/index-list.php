<section class="index-list-sect sect container"<?php echo $section_id ?>>
  <h2 class="index-list-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h2> <?php
  if ( $section['subtitle'] ) : ?>
    <p class="index-list-sect__subtitle"><?php echo $section['subtitle'] ?></p> <?php
  endif ?>
  <ul class="index-list-sect__list"> <?php
    foreach ( $section['list'] as $li ) : ?>
      <li class="index-list-sect__li"><?php echo $li['li'] ?></li> <?php
    endforeach ?>
  </ul>
</section>