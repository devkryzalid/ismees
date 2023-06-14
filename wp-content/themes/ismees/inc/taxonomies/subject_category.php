<?php

/**
 * create taxo for Resource type
 */
function subject_category_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Catégories', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Catégorie', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Catégories', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('student-type', 'ismees')],
    ];

    register_taxonomy('subject_category', ['subject'], array_merge($argsGlobal, $args));
}