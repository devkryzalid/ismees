<?php

/**
 * create taxo for Interventions
 */
function thematic_intervention_taxonomy($labelsGlobal, $argsGlobal)
{
    $labels = [
        'name'          => _x('Interventions', 'taxonomy general name', 'ismees'),
        'singular_name' => _x('Intervention', 'taxonomy singular name', 'ismees'),
        'menu_name'     => __('Interventions', 'ismees'),
    ];
    $args = [
        'labels'  => array_merge($labelsGlobal, $labels),
        'rewrite' => ['slug' => __('interventions', 'ismees')],
    ];

    register_taxonomy('thematic_intervention', ['thematic' ], array_merge($argsGlobal, $args));
}
