<?php
/*
 *	Template Name: Hub
 */
$context = Timber::context();

$thematics = [
    'post_type'      => 'thematic',
    'post_status'    => 'publish',
    'orderby'       => 'title',
    'order'          => 'ASC',
    'nopaging'       => false,
];

$context['thematics'] = new Timber\PostQuery($thematics);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/hub.twig' ), $context );