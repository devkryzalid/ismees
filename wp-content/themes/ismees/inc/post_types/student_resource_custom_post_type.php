<?php

/**
 * Add subject custom post type
 */
function student_resource_custom_post_type()
{
    $labels = array(
        'name'                     => __('Ressources pour les étudiant.es', 'ismees'),
        'singular_name'            => __('Ressource pour les étudiant.es', 'ismees'),
        'all_items'                => __('Toutes les ressources pour les étudiant.es', 'ismees'),
        'add_new'                  => __('Ajouter', 'ismees'),
        'add_new_item'             => __('Ajouter', 'ismees'),
        'edit_item'                => __('Modifier', 'ismees'),
        'new_item'                 => __('Nouveau', 'ismees'),
        'view_item'                => __('Voir la ressource pour les étudiant.es', 'ismees'),
        'search_items'             => __('Trouver une ressource pour les étudiant.es', 'ismees'),
        'not_found'                => __('Pas de résultat', 'ismees'),
        'not_found_in_trash'       => __('Pas de résultat', 'ismees'),
        'menu_name'                => __('Ressources pour étudiant.es', 'ismees'),
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
        'menu_icon'           => 'dashicons-welcome-learn-more',
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => wp_make_link_relative(get_fields('options')['config_students_resources']),
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array('slug' => __('ressource-etudiant', 'ismees'), 'with_front' => true),
    );
    register_post_type('student-resource', $args);
}
