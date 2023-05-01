<?php

/**
 * create taxo for Resource type
 */
function resource_category_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Catégories', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Catégorie', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Catégories', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('catégories', 'ismees')],
    ];

    register_taxonomy('resource_category', ['student-resource', 'member-resource' ], array_merge($argsGlobal, $args));
}