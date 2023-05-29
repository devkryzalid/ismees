<?php

/**
 * Add subject custom post type
 */
function activity_custom_post_type()
{
    $labels = array(
        'name'                     => 'Activités',
        'singular_name'            => 'Activité',
        'all_items'                => 'Toutes les activités',
        'add_new'                  => 'Ajouter',
        'add_new_item'             => 'Ajouter',
        'edit_item'                => 'Modifier',
        'new_item'                 => 'Nouveau',
        'view_item'                => 'Voir l\'activité',
        'search_items'             => 'Trouver une activité',
        'not_found'                => 'Pas de résultat',
        'not_found_in_trash'       => 'Pas de résultat',
        'menu_name'                => 'Activités',
        'item_published'           => 'Publié',
        'item_published_privately' => 'Publié de façon privée',
        'item_scheduled'           => 'Programmé',
        'item_updated'             => 'Mis à jour',
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