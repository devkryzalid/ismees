<?php

/**
 * Add subject custom post type
 */
function activity_custom_post_type()
{
    $labels = array(
        'name'                     => __('Activités', 'ismees'),
        'singular_name'            => __('Activité', 'ismees'),
        'all_items'                => __('Toutes les activités', 'ismees'),
        'add_new'                  => __('Ajouter', 'ismees'),
        'add_new_item'             => __('Ajouter', 'ismees'),
        'edit_item'                => __('Modifier', 'ismees'),
        'new_item'                 => __('Nouveau', 'ismees'),
        'view_item'                => __('Voir l\'activité', 'ismees'),
        'search_items'             => __('Trouver une activité', 'ismees'),
        'not_found'                => __('Pas de résultat', 'ismees'),
        'not_found_in_trash'       => __('Pas de résultat', 'ismees'),
        'menu_name'                => __('Activités', 'ismees'),
        'item_published'           => __('Publié', 'ismees'),
        'item_published_privately' => __('Publié de façon privée', 'ismees'),
        'item_scheduled'           => __('Programmé', 'ismees'),
        'item_updated'             => __('Mis à jour', 'ismees'),
    );
    $args = array(
        'labels'              => $labels,
        'hierarchical'        => false,
        'supports'            => array('title', 'editor', 'thumbnail'),
        'public'              => true,
        'show_ui'             => true,
        'show_in_menu'        => true,
        'show_in_rest'        => true,
        'menu_position'       => null,
        'menu_icon'           => 'dashicons-bell',
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => true,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array('slug' => __('activité', 'ismees'), 'with_front' => true),
    );
    register_post_type('activity', $args);
}
