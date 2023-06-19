<?php

$context = Timber::context();

$timber_post = new Timber\Post();
/**
 * Timber context assignments
 */

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
$context['page'] = $timber_post;

Timber::render('pages/page.twig', $context);