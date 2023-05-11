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
    'nopaging'       => false,
];

$interventions = get_terms(['taxonomy' => 'thematic_intervention']);

usort($interventions, function($a, $b) {
    $numberA = (int) get_field('number_intervention', $a);
    $numberB = (int) get_field('number_intervention', $b);
    return $numberA - $numberB;
});

$context['thematics'] = new Timber\PostQuery($thematics);
$context['interventions'] = $interventions;
$timber_post = new Timber\Post();
$context['post'] = $timber_post;

Timber::render( array( 'pages/intervention.twig' ), $context );