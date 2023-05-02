<?php
/*
 *	Template Name: Ressources pour les étudiant.es
 */
$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$national     = empty($_GET['national']) ? null : $_GET['national'];
$limit        = empty($_GET['limit']) ? 15 : $_GET['limit'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];

$resources = [
    'post_type'      => 'student-resource',
    'post_status'    => 'publish',
    'orderby'       => 'date',
    'posts_per_page' =>  $limit,
    'paged'          => $paged,
    'nopaging'       => false,
];

if (!empty($category)) {
    $resources['tax_query'][] = [
        'taxonomy' => 'resource_category',
        'field'    => 'term_id',
        'terms'    => [$category],
    ];
}
if (!empty($type)) {
    $resources['tax_query'][] = [
        'taxonomy' => 'resource_type',
        'field'    => 'term_id',
        'terms'    => [$type],
    ];
}

$context['resources'] = new Timber\PostQuery($resources);
$timber_post = new Timber\Post();
$context['page'] = $timber_post;

Timber::render( array( 'pages/student-resources.twig' ), $context );