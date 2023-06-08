<?php

global $params;

// set the POST param
$date     = empty($params['date']) ? null : $params['date'];

$activities_args = [
    'post_type'      => 'activity',
    'post_status'    => 'publish',
    'orderby'        => 'meta_value_num',
    'meta_key'       => 'start_date',
    'order'          => 'ASC',
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

$activities = new Timber\PostQuery($activities_args);

if ($activities->found_posts > 0) {
    $response     = '';
    $response    .= Timber::compile('partials/lists/activities-list.twig', ['items' => $activities]);
    $data['html'] = $response;
} else {
    $data['html'] = Timber::compile('partials/ajax/no-result-item.twig', ['activities' => true]);
}

wp_reset_query();
wp_reset_postdata();

return wp_send_json($data);
