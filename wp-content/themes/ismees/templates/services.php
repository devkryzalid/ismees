<?php
/*
 *	Template Name: Services
 */
$context = Timber::context();

$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/services.twig' ), $context );