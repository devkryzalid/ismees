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
	add_post_type_support( 'subject', 'excerpt' );
	add_post_type_support( 'activity', 'excerpt' );

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

function my_wpseo_breadcrumb_links($links) {
    // Check if we're not on the home page.
    if (!is_home() && !is_front_page()) {
        // Get the current URL path
        $current_url = home_url(add_query_arg(NULL, NULL));
        $path_parts = array_filter(explode('/', parse_url($current_url, PHP_URL_PATH)));

        // Initialize the new links array
        $new_links = array();

        $link_url = ''; // Make this an empty string
        $first_part = reset($path_parts);

        // Check if the page or post exists
        if (get_page_by_path($first_part) !== NULL || count(get_posts(array('name' => $first_part, 'post_type' => 'post'))) > 0) {
            // Add the first path segment
            $new_link = array(
                'id' => $first_part,
                'url' => home_url() . '/' . $first_part, // Add the home_url() here
                'text' => ucfirst(str_replace('-', ' ', $first_part)),  // Changed ucwords to ucfirst
            );
        } else {
            // For non-existing pages, make them non-clickable
            $new_link = array(
                'id' => $first_part,
                'text' => ucfirst(str_replace('-', ' ', $first_part)),  // Changed ucwords to ucfirst
            );
        }

        $new_links[] = $new_link;

        // Add the remaining path segments
        foreach ($path_parts as $part) {
            $link_url .= $part; // Just append the part, not full URL
            
            // Check if the page or post exists
            if (get_page_by_path($link_url) !== NULL || count(get_posts(array('name' => $link_url, 'post_type' => 'post'))) > 0) {
                $new_link = array(
                    'id' => $part,
                    'url' => home_url() . '/' . $link_url, // Add the home_url() here
                    'text' => ucfirst(str_replace('-', ' ', $part)),  // Changed ucwords to ucfirst
                );
            } else {
                // For non-existing pages, make them non-clickable
                $new_link = array(
                    'id' => $part,
                    'text' => ucfirst(str_replace('-', ' ', $part)),  // Changed ucwords to ucfirst
                );
            }

            $new_links[] = $new_link;
            $link_url .= '/'; // Add '/' for next path segment
        }

        // Replace the initial breadcrumb with the new dynamically generated breadcrumb
        $links = array_slice($links, 0, 1) + $new_links;
    }

    return $links;
}
add_filter('wpseo_breadcrumb_links', 'my_wpseo_breadcrumb_links');

