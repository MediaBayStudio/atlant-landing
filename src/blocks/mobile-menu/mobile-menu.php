<?php 
$section = $GLOBALS['sections']['mobile_menu'];
 ?>
<aside class="menu" style="display:none">
  <div class="menu__cnt">
    <a href="" class="menu__tel"><?php echo $section['tel'] ?></a>
    <a href="" class="menu__email"></a> <?php
    wp_nav_menu( [
      'theme_location'  => 'mobile_menu',
      'container'       => 'nav',
      'container_class' => 'menu__nav',
      'menu_class'      => 'menu__nav-list',
      'items_wrap'      => '<ul class="%2$s">%3$s</ul>'
    ] ) ?>
  </div>
</aside>