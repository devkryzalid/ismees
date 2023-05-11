<?php
/*
 *	Template Name: Ressources pour le personnel
 */
$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects      = empty($_GET['subjects']) ? null : $_GET['subjects'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];

$resources = [
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
    'posts_per_page' =>  $limit,
    'paged'          => $paged,
    'nopaging'       => false,
];

if (!empty($category)) {
    if (!is_array($category)) {
        $category = explode(',', $category);
    }
    
    $resources['tax_query'][] = [
        'taxonomy' => 'resource_category',
        'field'    => 'term_id',
        'terms'    => $category,
    ];
}
if (!empty($type)) {
    $resources['tax_query'][] = [
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
    $resources['meta_query'][] = [
        'key'     => 'subjects',
        'value'   => $subjects_pattern,
        'compare' => 'REGEXP',
    ];
}
$context['resources'] = new Timber\PostQuery($resources);
$context['member_thematics'] = new Timber\PostQuery($member_thematics);
$context['types'] = get_terms(['taxonomy' => 'resource_member_type']);
$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$timber_post = new Timber\Post();
$context['page'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/member-resources.twig' ), $context );