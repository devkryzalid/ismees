<?php

/**
 * create taxo for Sample
 */
function sample_type_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Types', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Type', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Types', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('type', 'ismees')],
    ];

    register_taxonomy('sample_type', ['sample'], array_merge($argsGlobal, $args));
}
