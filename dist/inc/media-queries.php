<?php

$media = [
  '1x_webkit' => '(-webkit-max-device-pixel-ratio:1.99)',
  '1x_ie' => '(max-resolution: 191.04dpi)',
  '2x_webkit' => '(-webkit-min-device-pixel-ratio:2)',
  '2x_ie' => '(min-resolution: 192dpi)',
  'maw576' => '(max-width:575.98px)',
  'miw576' => '(min-width:575.98px)',
  'maw768' => '(max-width:767.98px)',
  'miw768' => '(min-width:767.98px)',
  'maw1024' => '(max-width:1023.98px)',
  'miw1024' => '(min-width:1023.98px)'
];

$media['1x'] = "{$media['1x_webkit']}, {$media['1x_ie']}";
$media['2x'] = "{$media['2x_webkit']}, {$media['2x_ie']}";

$media['1x_mobile'] = "{$media['maw576']} and {$media['1x_webkit']}, {$media['maw576']} and {$media['1x_ie']}";
$media['2x_mobile'] = "{$media['maw576']} and {$media['2x_webkit']}, {$media['maw576']} and {$media['2x_ie']}";

$media['1x_tablet'] = "{$media['miw576']} and {$media['maw1024']} and {$media['1x_webkit']}, {$media['miw576']} and {$media['maw1024']} and {$media['1x_ie']}";
$media['2x_tablet'] = "{$media['miw576']} and {$media['maw1024']} and {$media['2x_webkit']}, {$media['miw576']} and {$media['maw1024']} and {$media['2x_ie']}";

$media['1x_desktop'] = "{$media['miw1024']} and {$media['1x_webkit']}, {$media['miw1024']} and {$media['1x_ie']}";
$media['2x_desktop'] = "{$media['miw1024']} and {$media['2x_webkit']}, {$media['miw1024']} and {$media['2x_ie']}";

$media['maw768_1x'] = "(max-width:767.98px) and {$media['1x_webkit']}, (max-width:767.98px) and {$media['1x_ie']}";
$media['maw768_2x'] = "(max-width:767.98px) and {$media['2x_webkit']}, (max-width:767.98px) and {$media['2x_ie']}";

$media['miw768_1x'] = "(min-width:767.98px) and {$media['1x_webkit']}, (min-width:767.98px) and {$media['1x_ie']}";
$media['miw768_2x'] = "(min-width:767.98px) and {$media['2x_webkit']}, (min-width:767.98px) and {$media['2x_ie']}";