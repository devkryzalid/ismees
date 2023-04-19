<?php
/**
 * You should not put any add_action in this file, please configue all hooks in functions.php
 */


function theme_supports() {
	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
	* Let WordPress manage the document title.
	* By adding theme support, we declare that this theme does not use a
	* hard-coded <title> tag in the document head, and expect WordPress to
	* provide it for us.
	*/
	add_theme_support( 'title-tag' );

	/*
	* Enable support for Post Thumbnails on posts and pages.
	*
	* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
	*/
	add_theme_support( 'post-thumbnails' );

	/**
     * Add excerpt on page
     */
    add_post_type_support( 'page', 'excerpt' );
	add_post_type_support( 'thematic', 'excerpt' );

	/*
	* Add image size.
	*
	* @link https://developer.wordpress.org/reference/functions/add_image_size/
	*/
	add_image_size( 'slider-large', '1600', '680', true );

	/*
	* Switch default core markup for search form, comment form, and comments
	* to output valid HTML5.
	*/
	add_theme_support(
		'html5',
		array(
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	/*
	* Enable support for Post Formats.
	*
	* See: https://codex.wordpress.org/Post_Formats
	*/
	add_theme_support(
		'post-formats',
		array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
			'gallery',
			'audio',
		)
	);

	add_theme_support( 'menus' );

}


/**
 * Change logo URL on login page
 *
 */
function change_login_url() {
	return site_url();
}

function filter_wpseo_breadcrumb_separator($this_options_breadcrumbs_sep) {
    return '<i class="icon-simple-arrow-right"></i>';
};