<?php

$context = Timber::context();

$timber_post = new Timber\Post();
/**
 * Timber context assignments
 */

$context['page'] = $timber_post;

Timber::render('pages/page.twig', $context);