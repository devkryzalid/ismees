<?php
/*
 * Template Name: Recherche
 */
require_once 'wp-content/themes/ismees/inc/search.php';

// Setting up the context and parameters for the search
$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects     = empty($_GET['subjects']) ? null : $_GET['subjects'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];
$search       = empty($_GET['search']) ? ' ' : $_GET['search'];
$member       = empty($_GET['member']) ? null : $_GET['member'];

// Initialize an empty hits array
$hits = [];

// Checking if a search term is provided
if (!empty($search)) {
    $custom_fields = [];

    // Add category to custom fields if it's not empty
    if (!empty($category)) {
        $custom_fields['category'] = [$category];
    }

    // Checking if member flag is set and if it's true
    if (!empty($member) && $member == true) {
        if (!empty($type)) {
            $custom_fields['resource_member_type'] = [$type];
        }

        $context['types'] = get_terms(['taxonomy' => 'resource_member_type']);
    } else {
        if (!empty($type)) {
            $custom_fields['resource_student_type'] = [$type];
        }

        $context['types'] = get_terms(['taxonomy' => 'resource_student_type']);
    }

    // Check if subjects parameter is present
    if (!empty($subjects)) {
        if (!is_array($subjects)) {
            $subjects = explode(',', $subjects);
        }
        $custom_fields['subjects'] = $subjects;
    }

    // Call the searchByAddsearch function to fetch the response
    $response = searchByAddsearch($search, ['limit' => 15, 'page' => $paged], $custom_fields);

    // Decode the JSON response body
    $results = json_decode($response->body);

    // Iterate through each hit in the response
    foreach($results->hits as $hit) {
        // Check if custom field exists in the hit

        if(isset($hit->custom_fields)) {

            // Add hit to the hits array
            $hits[] = $hit;
        }
    }
}

// Set the necessary parameters for the context
$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$context['member'] = $member;
$context['results'] = $hits;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

// Render the research page with the given context
Timber::render( array( 'pages/research.twig' ), $context );