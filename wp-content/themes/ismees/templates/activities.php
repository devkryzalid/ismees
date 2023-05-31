<?php
/*
 *	Template Name: Activités
 */
$context = Timber::context();


// Get current date in YYYYMM format
$current_date = date('Ym');

// If date parameter is in the URL, use that. Otherwise, use the current date
$date = !empty($_GET['date']) ? $_GET['date'] : $current_date;

$dateObj = DateTime::createFromFormat('Ym', $date);

// Get previous month
$prevDate = date('Ym', strtotime('-1 month', strtotime($current_date . '01')));

$activities = [
    'post_type'      => 'activity',
    'post_status'    => 'publish',
    'orderby'        => 'date',
    'posts_per_page' =>  -1,
    'paged'          => $paged,
    'nopaging'       => true,
    'meta_query'     => [
        'relation' => 'OR',
        [
            'key'     => 'start_date',
            'value'   => $date,
            'compare' => 'LIKE',
        ],
        [
            'key'     => 'end_date',
            'value'   => $date,
            'compare' => 'LIKE',
        ]
    ],
];

$context['activities'] = new Timber\PostQuery($activities);
$timber_post = new Timber\Post();
$context['post'] = $timber_post;
$context['params'] = $_GET;
$context['month'] = $dateObj->format('F'); // F gives full text representation of month

$context['prevDate'] = $prevDate;
$context['date'] = $date;
$context['currentDate'] = $current_date;

Timber::render( array( 'pages/activities.twig' ), $context );