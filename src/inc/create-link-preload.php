<?php

function create_link_preload( $item ) {
  global $template_directory_uri, $webp_support, $site_url;

  $media = '';

  if ( is_string( $item ) ) {
    $filepath = $item;
  } else {
    if ( $item['filepath'] ) {
      $filepath = php_path_join( $template_directory_uri, $item['filepath'] );
      $media = $item['media'] ? ' media="' . $item['media'] . '"' : '';
    } else if ( $item['file'] ) {
      $fields = get_fields( $item['file']['ID'] );

      $fields = [
        '2x_webp' => $fields['2x_webp_i'],
        'webp' => $fields['webp_i'],
        '2x' => $fields['2x_i']
      ];

      if ( $webp_support ) {
        $filepaths[] = [
          'path' => php_path_join( $site_url, $fields['2x_webp'] ),
          'media' => $media['2x']
        ];

        $filepaths[] = [
          'path' => php_path_join( $site_url, $fields['webp'] ),
          'media' => $media['1x']
        ];
      } else {
        $filepaths[] = [
          'path' => php_path_join( $site_url, $fields['2x'] ),
          'media' => $media['2x']
        ];

        $filepaths[] = [
          'path' => $item['file']['url'],
          'media' => $media['1x']
        ]; 
      }
    }
  }

  if ( $filepaths ) {
    foreach ( $filepaths as $path ) {
      echo '<link rel="preload" as="image" href="' . $path['path'] . '" media="' . $path['media'] . '" />' . PHP_EOL;
    }
  } else {
    echo '<link rel="preload" as="image" href="' . $filepath . '"' . $media . ' />' . PHP_EOL;
  }

}