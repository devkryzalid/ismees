<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();

/**
 * Timber context assignments
 */
$context['thematic'] = $timber_post;

Timber::render('pages/single-thematic.twig', $context);