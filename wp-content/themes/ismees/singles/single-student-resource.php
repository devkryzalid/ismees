<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);
$categories = wp_get_post_terms($timber_post->ID, 'resource_category', ['fields' => 'names']);
$types = wp_get_post_terms($timber_post->ID, 'resource_student_type', ['fields' => 'names']);

$related_posts = [
    'post_type'      => 'student-resource',
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
    ],
];

/**
 * Timber context assignments
 */
$context['types'] = implode(',', $types);
$context['categories'] = implode(',', $categories);

$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($related_posts);
$context['addsearch_array'] = createAddSearchArray($timber_post);

Timber::render('pages/single-student-resource.twig', $context);