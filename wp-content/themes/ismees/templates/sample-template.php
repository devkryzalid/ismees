<?php
/*
 *	Template Name: Page Exemple
 */
$context = Timber::context();
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/sample-template.twig' ), $context );