<?php

/**
 * create taxo for Target
 */
function target_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Cibles', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Cible', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Cibles', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('cible', 'ismees')],
    ];

    register_taxonomy('target', ['subject', 'thematic', 'page', 'member-resource', 'student-resource' ], array_merge($argsGlobal, $args));
}
