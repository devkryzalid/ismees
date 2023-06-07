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

// Initialize an empty hits array for addSearch results
$hits = [];

$custom_fields = [];

//Set the documents needed to the research
$custom_fields['page'] = ['research'];

if (!empty($member) && $member == true) {
    $context['types'] = get_terms(['taxonomy' => 'resource_member_type']);

    $member_thematics = [
        'post_type'      => 'thematic',
        'post_status'    => 'publish',
        'orderby'       => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => true,
    ];

    $context['subjects'] = new Timber\PostQuery($member_thematics);
    $custom_fields['resource'] = ['member'];
} else {
    $context['types'] = get_terms(['taxonomy' => 'resource_student_type']);

    $student_subjects = [
        'post_type'      => 'subject',
        'post_status'    => 'publish',
        'orderby'       => 'date',
        'posts_per_page' =>  15,
        'paged'          => $paged,
        'nopaging'       => true,
    ];

    $context['subjects'] = new Timber\PostQuery($student_subjects);
    $custom_fields['resource'] = ['student'];
}

if (!empty($category)) {
    $custom_fields['category_ids'] = [$category];
}

if (!empty($type)) {
    $custom_fields['type_id'] = [$type];
}

if (!empty($subjects)) {
    if (!is_array($subjects)) {
        $subjects = explode(',', $subjects);
    }
    $custom_fields['subjects_ids'] = $subjects;
}

// Call the searchByAddsearch function to fetch the response
$response = searchByAddsearch($search, ['limit' => 15, 'page' => $paged], $custom_fields);

$results = json_decode($response->body);

// Iterate through each hit in the response
foreach($results->hits as $hit) {
    // Check if custom field exists in the hit
    if(isset($hit->custom_fields)) {
        $hits[] = $hit;
    }
}

$context['member'] = $member;
$context['results'] = $hits;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/research.twig' ), $context );
