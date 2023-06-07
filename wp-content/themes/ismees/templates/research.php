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
$search       = empty($_GET['search']) ? ' ' : $_GET['search'];
$member       = empty($_GET['member']) ? null : $_GET['member'];

// Initialize an empty hits array for addSearch results
$hits = [];

if (!empty($search)) {
    $custom_fields = [];

    if (!empty($category)) {
        $custom_fields['category'] = [$category];
    }

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
    }

    if (!empty($subjects)) {
        if (!is_array($subjects)) {
            $subjects = explode(',', $subjects);
        }
        $custom_fields['subjects'] = $subjects;
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
}

$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$context['member'] = $member;
$context['results'] = $hits;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/research.twig' ), $context );