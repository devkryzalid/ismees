<?php
/*
 *	Template Name: Activités
 */
$context = Timber::context();

$activities = [
    'post_type'      => 'activity',
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'posts_per_page' =>  15,
    'paged'          => $paged,
    'nopaging'       => true,
    'meta_query'     => [],
];

$context['activities'] = new Timber\PostQuery($activities);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/activities.twig' ), $context );