<?php

/**
 * create taxo for Subject
 */
function subject_type_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Cibles', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Cible', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Cibles', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('subject-target', 'ismees')],
    ];

    register_taxonomy('subject_target', ['subject'], array_merge($argsGlobal, $args));
}
