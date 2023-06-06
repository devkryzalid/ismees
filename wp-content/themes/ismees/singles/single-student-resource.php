<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);
$subjects = $timber_post->meta('subjects');

//GET THE CUSTOMS FIELDS FOR ADDSEARCH
$categories = wp_get_post_terms($timber_post->ID, 'resource_category', ['fields' => 'names']);
$types = wp_get_post_terms($timber_post->ID, 'resource_student_type', ['fields' => 'names']);
$subjects_addSearch = implode(';', $timber_post->meta('subjects'));

/**
 * Timber context assignments
 */
$context['types'] = implode(';', $types);
$context['categories'] = implode(';', $categories);
$context['subjects_addSearch'] = $subjects_addSearch;

$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($subjects);
$context['addsearch_array'] = createAddSearchArray($timber_post);

Timber::render('pages/single-student-resource.twig', $context);