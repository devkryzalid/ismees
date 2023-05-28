<?php
/*
 *	Template Name: Recherche
 */
$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects     = empty($_GET['subjects']) ? null : $_GET['subjects'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];
$search       = empty($_GET['search']) ? null : $_GET['search'];
$member       = empty($_GET['member']) ? null : $_GET['member'];


if (!empty($member) && $member == true) {
// MEMBER Custom post type
$resources = [
        'post_type'      => 'member-resource',
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => false,
        'meta_query'     => [],
    ];

// MEMBER Custom post type

    $member_thematics = [
        'post_type'      => 'thematic',
        'post_status'    => 'publish',
        'orderby'       => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => false,
    ];

} else {

// STUDENT Custom post type

    $resources = [
        'post_type'      => 'student-resource',
        'post_status'    => 'publish',
        'orderby'        => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => false,
        'meta_query'     => [],
    ];

// STUDENT Custom post type

    $student_subjects = [
        'post_type'      => 'subject',
        'post_status'    => 'publish',
        'orderby'       => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => false,
    ];

}

// SEARCH FILTER
if (!empty($search)) {
    $organisms['s'] = $search;
}

// CATEGORY FILTER
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

// SUBJECTS FILTER

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

// IF MEMBER IS CHECKED A DIFFERENT TYPE (resource_member_type / resource_student_type) AND SUBJECT (member_thematics / student_subjects) FILTER WILL BE APPLIED
if (!empty($member) && $member == true) {

    if (!empty($type)) {
        $resources['tax_query'][] = [
            'taxonomy' => 'resource_member_type',
            'field'    => 'term_id',
            'terms'    => [$type],
        ];
    }
    $context['subjects'] = new Timber\PostQuery($member_thematics);
    $context['types'] = get_terms(['taxonomy' => 'resource_member_type']);

} else {

    if (!empty($type)) {
        $resources['tax_query'][] = [
            'taxonomy' => 'resource_student_type',
            'field'    => 'term_id',
            'terms'    => [$type],
        ];
    }
    $context['types'] = get_terms(['taxonomy' => 'resource_student_type']);
    $context['subjects'] = new Timber\PostQuery($student_subjects);
}

$context['resources'] = new Timber\PostQuery($resources);
$context['member'] = $member;
$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/research.twig' ), $context );