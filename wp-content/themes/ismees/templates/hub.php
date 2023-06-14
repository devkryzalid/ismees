<?php
/*
 *	Template Name: Hub
 */
$context = Timber::context();

$subjects = [
    'post_type'      => 'subject',
    'post_status'    => 'publish',
    'orderby'       => 'title',
    'order'          => 'ASC',
    'nopaging'       => true,
];

$all_subjects = new Timber\PostQuery($subjects);

// Hide subjects with category caché and slug = hidden
$filtered_subjects = array_filter($all_subjects->get_posts(), function($subject) {
    return !has_term('hidden', 'subject_category', $subject);
});

$context['subjects'] = $filtered_subjects;
// dd($context['subjects']);

$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/hub.twig' ), $context );
