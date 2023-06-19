<?php

/**
 * create taxo for Interventions
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
        'rewrite' => ['slug' => __('cibles', 'ismees')],
    ];

    register_taxonomy('page_target', ['page' ], array_merge($argsGlobal, $args));
}
