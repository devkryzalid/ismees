<?php
/*
 *	Template Name: Ressources pour les étudiant.es
 */
$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects      = empty($_GET['subjects']) ? null : $_GET['subjects'];
$limit        = empty($_GET['limit']) ? 15 : $_GET['limit'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];

$resources = [
    'post_type'      => 'student-resource',
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'posts_per_page' =>  $limit,
    'paged'          => $paged,
    'nopaging'       => false,
    'meta_query'     => [],
];

$student_subjects = [
    'post_type'      => 'subject',
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
        'taxonomy' => 'resource_student_type',
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
$context['student_subjects'] = new Timber\PostQuery($student_subjects);
$context['types'] = get_terms(['taxonomy' => 'resource_student_type']);
$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$timber_post = new Timber\Post();
$context['page'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/student-resources.twig' ), $context );