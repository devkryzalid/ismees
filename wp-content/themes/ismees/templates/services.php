<?php
/*
 *	Template Name: Services
 */
$context = Timber::context();

// Param the target array for addsearch custom fields
$post_id = get_the_ID();  

$targets = get_the_terms($post_id, 'page_target');

$target_slugs = [];
if (!empty($targets)) {
    foreach ($targets as $target) {
        if (isset($target->slug)) {
            $target_slugs[] = $target->slug;
        }
    }
}

$context['target'] = $target_slugs;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/services.twig' ), $context );