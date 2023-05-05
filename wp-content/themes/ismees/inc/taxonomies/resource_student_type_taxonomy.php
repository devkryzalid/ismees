<?php

/**
 * create taxo for Resource type
 */
function resource_student_type_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Types', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Type', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Types', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('student-type', 'ismees')],
    ];

    register_taxonomy('resource_student_type', ['student-resource'], array_merge($argsGlobal, $args));
}