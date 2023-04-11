<?php
/**
 * You should not put any add_action in this file, please configue all hooks in functions.php
 */

/**
 * Call .css and .js files
 */
function adding_scripts_and_styles() {

	// -- Main JS
	wp_enqueue_script( 'site-main', get_template_directory_uri() . '/dist/scripts/app.js', array(), true );
	// -- Pages
	/*
	switch ( $template ) {
		case 'templates/jobs.php':
			wp_enqueue_script( 'jobs', get_template_directory_uri() . '/dist/scripts/pages/jobs.js', array( 'jquery' ), true );
			break;
	}
	*/
	// CSS
	wp_enqueue_style( 'site-style', get_template_directory_uri() . '/dist/styles/app.css', array() );
}

/**
 * Gutenberg scripts and styles
 * @link https://www.billerickson.net/block-styles-in-gutenberg/
 *
 */
function be_gutenberg_scripts() {
	wp_enqueue_script(
		'be-editor',
		get_stylesheet_directory_uri() . '/dist/scripts/editor.js',
		array( 'wp-blocks', 'wp-dom' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/editor.js' ),
		true
	);
}

/**
 * Registers an editor stylesheet for the theme.
 */
function wpdocs_theme_add_editor_styles()
{
	wp_enqueue_style( 'site-admin-style', get_template_directory_uri() . '/dist/styles/editor.css', array() );
}
add_action('enqueue_block_editor_assets', 'wpdocs_theme_add_editor_styles');
