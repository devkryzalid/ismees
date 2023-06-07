<?php
// set the query strings

require_once 'wp-content/themes/ismees/inc/search.php';

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);

$related_posts = [
    'post_type'      => 'member-resource',
    'post_status'    => 'publish',
    'posts_per_page' => 6,
    'orderby'        => 'date',
    'post__not_in'   => [$timber_post->ID],
    'tax_query'      => [
        [
            'taxonomy' => 'resource_category',
            'field'    => 'term_id',
            'terms'    => $category,
        ]
    ]
];

//GET THE CUSTOMS FIELDS FOR ADDSEARCH
$subjects = $timber_post->meta('subjects');

$subjects_addsearch_names = [];
$subjects_addsearch_ids = [];

if(is_array($subjects)){
    foreach ($subjects as $subject) {
        $subjects_addsearch_names[] = $subject->name;
        $subjects_addsearch_ids[] = $subject->id;
    }
}

$categories = wp_get_post_terms($timber_post->ID, 'resource_category');

$category_addsearch_names = [];
$category_addsearch_ids = [];

// Get the name and the ID for each category
foreach ($categories as $category) {
    $category_addsearch_names[] = $category->name;
    $category_addsearch_ids[] = $category->term_id;
}

$type = get_primary_taxonomy($timber_post->ID, 'resource_member_type', true);

$type_addsearch_name = null;
$type_addsearch_id = null;

// Get the name and the ID of the type
if ($type && isset($type->name) && isset($type->id)) {
    $type_addsearch_name = $type->name;
    $type_addsearch_id = $type->id;
}

// Get the type icon
if ($type) {
    $icon = get_field('icon', $type);
}
// END OF THE CUSTOM FIELDS


/**
 * Timber context assignments
 */
// Addsearch context
$context['type_addsearch_name'] = $type_addsearch_name;
$context['type_addsearch_id'] = $type_addsearch_id;
$context['categories_addsearch_names'] = $category_addsearch_names;
$context['categories_addsearch_ids'] = $category_addsearch_ids;
$context['subjects_addsearch_names'] = $subjects_addsearch_names;
$context['subjects_addsearch_ids'] = $subjects_addsearch_ids;
 $context['icon'] = $icon;

// Post context
$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($related_posts);

Timber::render('pages/single-member-resource.twig', $context);