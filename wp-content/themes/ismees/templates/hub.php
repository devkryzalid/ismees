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

$context['subjects'] = new Timber\PostQuery($subjects);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/hub.twig' ), $context );