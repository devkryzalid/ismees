<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);
$subjects = $timber_post->meta('subjects');

//GET THE CUSTOMS FIELDS FOR ADDSEARCH
$categories = wp_get_post_terms($timber_post->ID, 'resource_category', ['fields' => 'names']);
$type = get_primary_taxonomy($timber_post->ID, 'resource_student_type', true);
$subjects_addSearch = $timber_post->meta('subjects');

if ($type) {
    $icon = get_field('icon', $type);
}

/**
 * Timber context assignments
 */
$context['type'] = $type->name;
$context['categories'] = $categories;
$context['subjects_addSearch'] = $subjects_addSearch;
$context['icon'] = $icon;

$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($subjects);
$context['addsearch_array'] = createAddSearchArray($timber_post);

Timber::render('pages/single-student-resource.twig', $context);