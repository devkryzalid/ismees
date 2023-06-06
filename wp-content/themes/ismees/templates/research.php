<?php
/*
 *	Template Name: Recherche
 */
require_once 'wp-content/themes/ismees/inc/search.php';

$context      = Timber::context();
$category     = empty($_GET['category']) ? null : $_GET['category'];
$type         = empty($_GET['type']) ? null : $_GET['type'];
$subjects     = empty($_GET['subjects']) ? null : $_GET['subjects'];
$paged        = empty($_GET['pagenb']) ? 1 : $_GET['pagenb'];
$search       = empty($_GET['search']) ? ' ' : $_GET['search'];
$member       = empty($_GET['member']) ? null : $_GET['member'];


if (!empty($search)) {
    $custom_fields = [];

    if (!empty($category)) {
        $custom_fields['category'] = [$category];
    }

    if (!empty($member) && $member == true) {
        if (!empty($type)) {
            $custom_fields['resource_member_type'] = [$type];
        }

        // $context['subjects'] = new Timber\PostQuery($member_thematics);
        $context['types'] = get_terms(['taxonomy' => 'resource_member_type']);

    } else {
        if (!empty($type)) {
            $custom_fields['resource_student_type'] = [$type];
        }

        $context['types'] = get_terms(['taxonomy' => 'resource_student_type']);
        // $context['subjects'] = new Timber\PostQuery($student_subjects);
    }

    if (!empty($subjects)) {
        if (!is_array($subjects)) {
            $subjects = explode(',', $subjects);
        }
        $custom_fields['subjects'] = $subjects;
    }

    $response = searchByAddsearch($search, ['limit' => 15, 'page' => $paged], $custom_fields);

    $results = json_decode($response->body);

    // dd($results->total_hits);

    $hits = $results->hits;
    // $total_items = $results->total_hits;
}

$context['categories'] = get_terms(['taxonomy' => 'resource_category']);
$context['member'] = $member;
$context['results'] = new Timber\PostQuery($hits);
// $context['total'] = new Timber\PostQuery($total_items);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;

Timber::render( array( 'pages/research.twig' ), $context );