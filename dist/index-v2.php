<?php

/*
	Template name: index v2
*/

get_header();

foreach ( $GLOBALS['sections'] as $section ) {
	if ( $section['is_visible'] ) {
		$section_name = $section['acf_fc_layout'];
		$section_id = $section['sect_id'] ? ' id="' . $section['sect_id'] . '"' : '';
		switch ( $section_name ) {
			case 'header':
			case 'mobile-menu':
			case 'footer':
				continue;
				break;
			default:
				require 'template-parts/' . $section_name . '.php';
				break;
		}
	}
}

get_footer();