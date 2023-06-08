<?php
/*
 * Template Name: Recherche
 */
require_once 'wp-content/themes/ismees/inc/search.php';

$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects     = empty($_GET['subjects']) ? null : $_GET['subjects'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];
$search       = empty($_GET['search']) ? '*' : $_GET['search'];
$member       = empty($_GET['member']) ? null : $_GET['member'];

$member_thematics = [
    'post_type'      => 'thematic',
    'post_status'    => 'publish',
    'orderby'       => 'date',
    'posts_per_page' =>  15,
    'paged'          => $paged,
    'nopaging'       => true,
];

$student_subjects = [
    'post_type'      => 'subject',
    'post_status'    => 'publish',
    'orderby'       => 'date',
    'posts_per_page' =>  15,
    'paged'          => $paged,
    'nopaging'       => true,
];

// AddSearch parameters array, you have to push all your filters in this array
$custom_fields = [];

//Set the documents needed to the research
$custom_fields['page'] = ['research'];

if (!empty($member) && $member == true) {
    $custom_fields['resource'] = ['member'];
} else {
    $custom_fields['resource'] = ['student'];
}

if (!empty($category)) {
    if (!is_array($category)) {
        $category = explode(',', $category);
    }
    $custom_fields['category_ids'] = $category;
}

if (!empty($type)) {
    if (!is_array($type)) {
        $type = explode(',', $type);
    }
    $custom_fields['type_id'] = $type;
}

if (!empty($subjects)) {
    if (!is_array($subjects)) {
        $subjects = explode(',', $subjects);
    }
    $custom_fields['subject_ids'] = $subjects;
}

// Push your custom_fields to addSearch
$response = searchByAddsearch($search, ['limit' => 10, 'page' => $paged], $custom_fields);

$results = json_decode($response->body);

$context['types_students'] = get_terms(['taxonomy' => 'resource_student_type']);
$context['types_members'] = get_terms(['taxonomy' => 'resource_member_type']);

$context['subjects_members'] = new Timber\PostQuery($member_thematics);
$context['subjects_students'] = new Timber\PostQuery($student_subjects);

$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$context['member'] = $member;
$context['results'] = $results->hits;
$context['total'] = $results->total_hits;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/research.twig' ), $context );