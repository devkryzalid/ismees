<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();
$categories = get_primary_taxonomy($timber_post->ID, 'resource_category', true);

$related_posts = [
    'post_type'      => 'member-resource',
    'post_status'    => 'publish',
    'posts_per_page' => 6,
    'post__not_in'   => [$timber_post->ID],
    'tax_query'      => [
        [
            'taxonomy' => 'resource_category',
            'field'    => 'term_id',
            'terms'    => $categories,
        ]
    ]
];

/**
 * Timber context assignments
 */
$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($related_posts);

Timber::render('pages/member-resource.twig', $context);

