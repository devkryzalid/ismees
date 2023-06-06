<?php
// set the query strings

require_once 'wp-content/themes/ismees/inc/search.php';

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);
$categories = wp_get_post_terms($timber_post->ID, 'resource_category', ['fields' => 'names']);
$types = wp_get_post_terms($timber_post->ID, 'resource_member_type', ['fields' => 'names']);

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

/**
 * Timber context assignments
 */
$context['types'] = $types;
$context['categories'] = $categories;

$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($related_posts);
$context['addsearch_array'] = json_encode(createAddSearchArray($timber_post));

Timber::render('pages/single-member-resource.twig', $context);