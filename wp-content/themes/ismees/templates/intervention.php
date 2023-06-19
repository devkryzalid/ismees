<?php
/*
 *	Template Name: Intervention
 */
$context = Timber::context();

$thematics = [
    'post_type'      => 'thematic',
    'post_status'    => 'publish',
    'orderby'       => 'title',
    'order'          => 'ASC',
    'nopaging'       => true,
];

$interventions = get_terms(['taxonomy' => 'thematic_intervention']);

usort($interventions, function($a, $b) {
    $numberA = (int) get_field('number_intervention', $a);
    $numberB = (int) get_field('number_intervention', $b);
    return $numberA - $numberB;
});

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
$context['thematics'] = new Timber\PostQuery($thematics);
$context['interventions'] = $interventions;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/intervention.twig' ), $context );