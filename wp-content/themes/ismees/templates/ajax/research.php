<?php
require_once 'wp-content/themes/ismees/inc/search.php';

global $params;

$limit          = (!empty($params['limit'])) ? $params['limit'] : 10;
$paged          = (!empty($params['pagenb'])) ? $params['pagenb'] : 1;
$search         = empty($_GET['search']) ? ' ' : $_GET['search'];
$type           = (!empty($params['type'])) ? $params['type'] : null;
$subjects       = (!empty($params['subjects'])) ? $params['subjects'] : null;
$member         = (!empty($params['member'])) ? $params['member'] : null;

// AddSearch parameters
$params = ['page' => $paged, 'limit' => $limit, 'lang' => 'en']; 
$custom_field = null;

if ($type) {
    $custom_field['post_type'] = explode(',', $type);
}

if ($subjects) {
    $custom_field['subjects'] = explode(',', $subjects);
}

$response = searchByAddsearch($search, $params, $custom_field);

// dd($response);
$results = json_decode($response->body);

$context = Timber::context();

$response = '' . Timber::compile('partials/lists/research.twig', [
    'search_results' => $results,
    'limit'          => $limit,
    'paged'          => $paged,
    'total_pages'    => ceil($results->total_hits / $limit),
]);

return wp_send_json($response);