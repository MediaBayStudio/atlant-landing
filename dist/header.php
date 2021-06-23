<?php
  global
    $preload,
    $media,
    $webp_support,
    $site_url,
    $logo_url,
    $tel,
    $tel_dry,
    $email,
    $template_directory_uri;
    if ( is_page_template( 'index.php' ) || is_front_page() ) {
      $style_name = 'style-index';
      $script_name = 'script-index';
    }
    $GLOBALS['page_script_name'] = $script_name;
    $GLOBALS['page_style_name'] = $style_name;
    $page_style = $GLOBALS['page_style_name'] ?>
<!DOCTYPE html>
<html <?php language_attributes() ?>>
<head>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=CustomEvent%2CIntersectionObserver%2CIntersectionObserverEntry%2CElement.prototype.closest%2CElement.prototype.dataset%2CHTMLPictureElement"></script>
  <meta charset="<?php bloginfo( 'charset' ) ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no, user-scalable=no, viewport-fit=cover">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- styles preload -->
  <link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/style.css">
	<link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/<?php echo $page_style ?>.css" />
	<link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/<?php echo $page_style ?>.576.css" media="(min-width:575.98px)" />
	<link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/<?php echo $page_style ?>.768.css" media="(min-width:767.98px)" />
	<link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/<?php echo $page_style ?>.1024.css" media="(min-width:1023.98px)" />
	<link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/<?php echo $page_style ?>.1280.css" media="(min-width:1279.98px)" />
  <link rel="preload" as="style" href="<?php echo $template_directory_uri ?>/css/hover.css" media="(hover) and (min-width:1024px)">
  <!-- fonts preload --> <?php
	$fonts = [
		'Ubuntu-Light.woff',
    'Ubuntu-Regular.woff',
    'Ubuntu-Medium.woff',
		'Ubuntu-Bold.woff',
		'SegoeUI-SemiBold.woff'
	];
	foreach ( $fonts as $font ) : ?>

	<link rel="preload" href="<?php echo $template_directory_uri . '/fonts/' . $font ?>" as="font" type="font/woff" crossorigin="anonymous" /> <?php
	endforeach;
  echo PHP_EOL ?>
  <!-- other preload --> <?php
  echo PHP_EOL;
  if ( !$preload ) {
    $preload = get_field( 'preload' );
  }

  if ( !$preload ) {
    $preload = [];
  }

  $ending = $webp_support ? '.webp' : '.jpg';

  $hero_image = [
    [
      'filepath' => 'img/hero-img-mobile' . $ending,
      'media' => $media['1x_mobile']
    ],
    [
      'filepath' => 'img/hero-img-mobile@2x' . $ending,
      'media' => $media['2x_mobile']
    ],
    [
      'filepath' => 'img/hero-img-tablet' . $ending,
      'media' => $media['1x_tablet']
    ],
    [
      'filepath' => 'img/hero-img-tablet@2x' . $ending,
      'media' => $media['2x_tablet']
    ],
    [
      'filepath' => 'img/hero-img-desktop' . $ending,
      'media' => $media['1x_desktop']
    ]
  ];

  $preload = array_merge( $preload, $hero_image );

  if ( $logo_url ) {
    $preload[] = $logo_url;
  }

  if ( $preload ) {
    foreach ( $preload as $item ) {
      create_link_preload( $item );
    }
    unset( $item );
  } ?>
  <!-- favicons -->
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
  <meta name="msapplication-TileColor" content="#eff1f1">
  <meta name="theme-color" content="#ffffff"> <?php
  echo PHP_EOL;
  wp_head() ?>
</head>

<body <?php body_class() ?>> <?php
  wp_body_open() ?>
  <noscript>
    <!-- <noindex> -->Для полноценного использования сайта включите JavaScript в настройках вашего браузера.<!-- </noindex> -->
  </noscript>
  <div id="page-wrapper">
  <header class="hdr container">
  <img src="<?php echo $logo_url ?>" alt="Логтип Атлант" class="hdr__logo"> <?php
  wp_nav_menu( [
    'theme_location'  => 'header_menu',
    'container'       => 'nav',
    'container_class' => 'hdr__nav',
    'menu_class'      => 'hdr__nav-list',
    'items_wrap'      => '<ul class="%2$s">%3$s</ul>'
  ] ) ?>
  <a href="tel:<?php echo $tel_dry ?>" class="hdr__tel contact-link contact-link-tel-red"><?php echo $tel ?></a>
  <a href="mailto:<?php echo $email ?>" class="hdr__email contact-link contact-link-email-red"><?php echo $email ?></a>
  <button type="button" class="hdr__burger">
    <svg viewBox="0 0 20 17" class="hdr__burger-svg" fill="none" xmlns="http://www.w3.org/2000/svg"><path stroke="#262626" stroke-width="1.5" d="M0 1.05h20M0 8.55h20M0 16.05h20"/></svg>
  </button> <?php 
  require 'template-parts/mobile-menu.php' ?>
  </header>