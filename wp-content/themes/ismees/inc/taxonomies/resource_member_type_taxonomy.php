<?php

/**
 * create taxo for Resource type
 */
function resource_member_type_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Types', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Type', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Types', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('member-type', 'ismees')],
    ];

    register_taxonomy('resource_member_type', ['member-resource' ], array_merge($argsGlobal, $args));
}