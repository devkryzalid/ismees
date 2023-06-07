<?php
// set the query strings

$context = Timber::context();
$timber_post = new Timber\Post();
$category = get_primary_taxonomy($timber_post->ID, 'resource_category', true);

$related_posts = [
    'post_type'      => 'student-resource',
    'post_status'    => 'publish',
    'posts_per_page' => 6,
    'orderby'        => 'date',
    'post__not_in'   => [$timber_post->ID],
    'tax_query'      => [
        [
            'taxonomy' => 'resource_category',
            'field'    => 'term_id',
            'terms'    => $category,e
        ]
    ]
];

//GET THE CUSTOMS FIELDS FOR ADDSEARCH
$subjects = $timber_post->meta('subjects');

$subjects_addsearch = [];

if(is_array($subjects)){
    foreach ($subjects as $subject) {
        $subjects_addsearch[] = $subject->name . ";" . $subject->id . ";";
    }
}

$categories = wp_get_post_terms($timber_post->ID, 'resource_category');

$category_addsearch = [];

// Get the name and the ID for each category
foreach ($categories as $category) {
    if (isset($category->name) && isset($category->term_id)) {
        $category_addsearch[] = $category->name . ";" . $category->term_id . ";";
    }
}

$type = get_primary_taxonomy($timber_post->ID, 'resource_student_type', true);

// Get the name and the ID of the type
if ($type && isset($type->name) && isset($type->id)) {
    $type_addsearch = $type->name . ";" . $type->id . ";";
} else {
    $type_addsearch = null;
}
// Get the type icon
if ($type) {
    $icon = get_field('icon', $type);
}
// END OF THE CUSTOM FIELDS

/**
 * Timber context assignments
 */
$context['type_addsearch'] = $type_addsearch;
$context['categories_addsearch'] = $category_addsearch;
$context['subjects_addsearch'] = $subjects_addsearch;
$context['icon'] = $icon;

$context['post'] = $timber_post;
$context['related_posts'] = new Timber\PostQuery($related_posts);
$context['addsearch_array'] = createAddSearchArray($timber_post);

Timber::render('pages/single-student-resource.twig', $context);