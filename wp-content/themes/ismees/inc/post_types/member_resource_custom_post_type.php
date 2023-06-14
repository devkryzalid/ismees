<?php

/**
 * Add subject custom post type
 */
function member_resource_custom_post_type()
{
    $labels = array(
        'name'                     => __('Ressources pour le personnel', 'ismees'),
        'singular_name'            => __('Ressource pour le personnel', 'ismees'),
        'all_items'                => __('Toutes les ressources pour le personnel', 'ismees'),
        'add_new'                  => __('Ajouter', 'ismees'),
        'add_new_item'             => __('Ajouter', 'ismees'),
        'edit_item'                => __('Modifier', 'ismees'),
        'new_item'                 => __('Nouveau', 'ismees'),
        'view_item'                => __('Voir la ressource pour le personnel', 'ismees'),
        'search_items'             => __('Trouver une ressource le personnel', 'ismees'),
        'not_found'                => __('Pas de résultat', 'ismees'),
        'not_found_in_trash'       => __('Pas de résultat', 'ismees'),
        'menu_name'                => __('Ressources pour le personnel', 'ismees'),
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
        'menu_icon'           => 'dashicons-groups',
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => true,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array('slug' => __('ressource-personnel', 'ismees'), 'with_front' => true),
    );
    register_post_type('member-resource', $args);
}
