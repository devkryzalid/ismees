<?php
/*
 *	Template Name: À propos
 */
$context = Timber::context();


$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/about.twig' ), $context );