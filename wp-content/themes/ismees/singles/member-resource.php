<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();

/**
 * Timber context assignments
 */
$context['member_resource'] = $timber_post;

Timber::render('pages/member-resource.twig', $context);
