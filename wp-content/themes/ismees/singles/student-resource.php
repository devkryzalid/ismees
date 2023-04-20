<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();

/**
 * Timber context assignments
 */
$context['student_resource'] = $timber_post;

Timber::render('pages/student-resource.twig', $context);

