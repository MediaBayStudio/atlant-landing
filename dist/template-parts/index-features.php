<section class="index-features-sect sect container"<?php echo $section_id ?>>
  <h2 class="index-features-sect__title sect-title sect-title-blue"><?php echo $section['title'] ?></h2>
  <ul class="index-features-sect__list lazy" data-src="#"> <?php
    foreach ( $section['list'] as $li ) :
      if ( $li['is_img'] ) : ?>
        <li class="index-features-sect__feature">
          <a href="<?php echo $li['image']['url'] ?>" data-fancybox="images">
            <img src="#" alt="#" data-src="<?php echo $li['image']['url'] ?>" class="index-features-sect__feature-img lazy">
          </a>
        </li> <?php
      else : ?>
        <li class="index-features-sect__feature lazy" data-src="#">
          <img src="#" alt="#" data-src="<?php echo $li['img']['url'] ?>" class="index-features-sect__feature-img lazy">
          <span class="index-features-sect__feature-title"><?php echo $li['title'] ?></span>
          <p class="index-features-sect__feature-descr"><?php echo $li['descr'] ?></p>
        </li> <?php
      endif;
    endforeach ?>
  </ul>
</section>