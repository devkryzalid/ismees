<?php
/**
 * You should not put any add_action in this file, please configue all hooks in functions.php
 */

/**
 * Include every file in /inc/taxonomies
 */
$includes = scandir( __DIR__ . '/taxonomies' );
foreach ( $includes as $file ) {
	$path_file = __DIR__ . '/taxonomies/' . $file;
	if ( file_exists( $path_file ) && ! is_dir( $path_file ) ) {
		require_once $path_file;
	}
}

/** This is where you can register custom taxonomies. */
function register_taxonomies() {

	/**
     * Init global params
     */

    $labelsGlobal = [
        'search_items'  => __('Recherche', 'ismees'),
        'all_items'     => __('Tous', 'ismees'),
        'edit_item'     => __('Modifier', 'ismees'),
        'update_item'   => __('Modifier', 'ismees'),
        'add_new_item'  => __('Ajouter', 'ismees'),
        'new_item_name' => __('Nouveau', 'ismees'),
    ];
    $argsGlobal = [
        'hierarchical'      => true,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'show_in_rest'      => true
	];
	
    thematic_intervention_taxonomy($labelsGlobal, $argsGlobal);
    resource_category_taxonomy($labelsGlobal, $argsGlobal);
    resource_student_type_taxonomy($labelsGlobal, $argsGlobal);
    resource_member_type_taxonomy($labelsGlobal, $argsGlobal);
}

/**
 * get primary yoast term or first in taxonomy list
 *
 * @param  string   $post_id
 * @param  string   $taxonomy
 * @return string|object|null
 */
function get_primary_taxonomy(string $post_id, string $taxonomy, bool $return_object = false)
{
    $term = null;
    $primary = yoast_get_primary_term_id($taxonomy, $post_id);
    if (!$primary) {
        $terms = wp_get_post_terms($post_id, $taxonomy);
        if (!empty($terms) && isset($terms[0])) {
            $term = ($return_object == 'object') ? $terms[0] : $terms[0]->name;
        }
    } else {
        $term = ($return_object == 'object') ? new Timber\Term($primary) : get_term($primary, $taxonomy)->name;
    }
    return $term;
}