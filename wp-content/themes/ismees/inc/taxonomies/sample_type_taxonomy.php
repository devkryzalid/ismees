<?php

/**
 * create taxo for Sample
 */
function sample_type_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Cibles', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Cible', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Cibles', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('thematic-target', 'ismees')],
    ];

    register_taxonomy('thematic_target', ['thematic'], array_merge($argsGlobal, $args));
}
