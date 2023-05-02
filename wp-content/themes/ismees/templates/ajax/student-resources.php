<?php

global $params;

// set the POST param
$limit        = empty($params['limit']) ? 15 : $params['limit'];
$category     = empty($params['category']) ? null : $params['category'];
$localization = empty($params['localization']) ? null : $params['localization'];
$paged        = empty($params['pagenb']) ? 1 : $params['pagenb'];
$national     = empty($params['national']) ? null : $params['national'];

$organisms_args = [
    'post_type'      => 'organism',
    'post_status'    => 'publish',
    'orderby'       => 'title',
    'order'          => 'ASC',
    'posts_per_page' =>  $limit,
    'paged'          => $paged,
    'nopaging'       => false,
];

if (!empty($category)) {
    $organisms_args['tax_query'][] = [
        'taxonomy' => 'organism_category',
        'field'    => 'term_id',
        'terms'    => [$category],
    ];
}
if (!empty($localization)) {
    $organisms_args['tax_query'][] = [
        'taxonomy' => 'organism_localization',
        'field'    => 'term_id',
        'terms'    => [$localization],
    ];
}

$organisms = new Timber\PostQuery($organisms_args);

if ($organisms->found_posts > 0) {
    $response     = '';
    $response    .= Timber::compile('partials/ajax/item-list-ajax.twig', ['items' => $organisms]);
    $data['html'] = $response;
} else {
    $data['html'] = Timber::compile('partials/no-result-item.twig');
}

wp_reset_query();
wp_reset_postdata();

return wp_send_json($data);
