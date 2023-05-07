<?php

global $params;

// set the POST param
// $limit       = empty($params['limit']) ? 15 : $params['limit'];
$category     = empty($params['category']) ? null : $params['category'];
$type         = empty($params['type']) ? null : $params['type'];
$subjects     = empty($params['subjects']) ? null : $params['subjects'];
$paged        = empty($params['pagenb']) ? 1 : $params['pagenb'];
$national     = empty($params['national']) ? null : $params['national'];

$resources_args = [
    'post_type'      => 'member-resource',
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'posts_per_page' =>  15,
    'paged'          => $paged,
    'nopaging'       => false,
    'meta_query'     => [],
];

$member_thematics = [
    'post_type'      => 'thematic',
    'post_status'    => 'publish',
    'orderby'       => 'date',
    'posts_per_page' =>  15,
    'paged'          => $paged,
    'nopaging'       => false,
];

if (!empty($category)) {
    if (!is_array($category)) {
        $category = explode(',', $category);
    }
    
    $resources_args['tax_query'][] = [
        'taxonomy' => 'resource_category',
        'field'    => 'term_id',
        'terms'    => $category,
    ];
}
if (!empty($type)) {
    $resources_args['tax_query'][] = [
        'taxonomy' => 'resource_member_type',
        'field'    => 'term_id',
        'terms'    => [$type],
    ];
}
if (!empty($subjects)) {
    if (!is_array($subjects)) {
        $subjects = explode(',', $subjects);
    }
    
    $subjects_pattern = implode('|', $subjects);
    $resources_args['meta_query'][] = [
        'key'     => 'subjects',
        'value'   => $subjects_pattern,
        'compare' => 'REGEXP',
    ];
}

$resources = new Timber\PostQuery($resources_args);

if ($resources->found_posts > 0) {
    $response     = '';
    $response    .= Timber::compile('partials/lists/basic-card-list.twig', ['items' => $resources]);
    $data['html'] = $response;
    $data['pages_total'] = $resources->pagination(intval(15))->total;
} else {
    $data['html'] = Timber::compile('partials/ajax/no-result-item.twig');
}

wp_reset_query();
wp_reset_postdata();

return wp_send_json($data);
