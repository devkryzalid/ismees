<?php

/**
 * Add subject custom post type
 */
function student_resource_custom_post_type()
{
    $labels = array(
        'name'                     => 'Ressources pour les étudiant.es',
        'singular_name'            => 'Ressource pour les étudiant.es',
        'all_items'                => 'Toutes les ressources pour les étudiant.es',
        'add_new'                  => 'Ajouter',
        'add_new_item'             => 'Ajouter',
        'edit_item'                => 'Modifier',
        'new_item'                 => 'Nouveau',
        'view_item'                => 'Voir la ressource pour les étudiant.es',
        'search_items'             => 'Trouver une ressource pour les étudiant.es',
        'not_found'                => 'Pas de résultat',
        'not_found_in_trash'       => 'Pas de résultat',
        'menu_name'                => 'Ressources pour étudiant.es',
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
        'menu_icon'           => 'dashicons-welcome-learn-more',
        'show_in_nav_menus'   => true,
        'show_in_admin_bar'   => true,
        'publicly_queryable'  => true,
        'exclude_from_search' => false,
        'has_archive'         => true,
        'query_var'           => true,
        'can_export'          => true,
        'rewrite'             => array('slug' => __('ressource-etudiant', 'ismees'), 'with_front' => true),
    );
    register_post_type('student_resource', $args);
}
