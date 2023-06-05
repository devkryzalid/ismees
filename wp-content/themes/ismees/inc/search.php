<?php
/**
 * You should not put any add_action in this file, please configue all hooks in functions.php
 */

function search_filter( $query ) {
	if ( ! is_admin() && $query->is_main_query() ) {
		if ( $query->is_search ) {
			$query->set( 'paged', ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1 );
			$query->set( 'posts_per_page', 12 );
		}
	}
}
/**
 * searchByAddsearch
 *
 * @param  string 	$search_term	Required because Addsearch return 400 without this param
 * @param  array 	$simple_params 	Array for page, limit and lang filter
 * @param  array 	$custom_fields 	Array for custom filed saving in Addsearch
 * @return object 	$response		Object response for addsearch api curl
 */
function searchByAddsearch(string $search_term, array $simple_params = ['limit' => 10, 'page' => 1, 'lang' => 'fr'], array $custom_fields = null)
{
    $url = 'https://api.addsearch.com/v1/search/' . ADDSEARCH_SITE_KEY;
    $term = $params = $cf_query = '';
    $separator = '?';

    if ($search_term) {
        $term .= $separator . 'term=' . str_replace(' ', '+', stripslashes($search_term));
        $separator = '&';
    }
    foreach ($simple_params as $p_name => $p_value) {
        $params .= $separator . $p_name . '=' . urlencode(stripslashes($p_value));
    }
    if (!empty($custom_fields)) {
        foreach ($custom_fields as $field_name => $cf_values) {
            foreach ($cf_values as $cf_value) {
                $cf_query .= $separator . 'customField=' . $field_name . '%3D' . urlencode(stripslashes($cf_value));
            }
        }
    }

    $response = Requests::get($url . $term . $params . $cf_query);
    return $response;

}