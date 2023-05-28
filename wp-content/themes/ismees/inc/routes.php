<?php
/**
 * This file contains all Timber routing routes
 */

/**
 * Ajax calls
 */
// Job subcategories

//Routes::map('/ajax/job_category/:category/children', function( $params ) {
	//Routes::load('templates/ajax/job_subcategories.php', $params, 200);
//});

// Repertory for students
Routes::map('/ajax/resources/students', function ($params) {
    Routes::load('templates/ajax/student-resources.php', array_merge($params, $_POST), 200);
});
// Repertory for members
Routes::map('/ajax/resources/members', function ($params) {
    Routes::load('templates/ajax/member-resources.php', array_merge($params, $_POST), 200);
});
// General search
Routes::map('/ajax/resources/all', function ($params) {
    Routes::load('templates/ajax/research.php', array_merge($params, $_POST), 200);
});
/**
 * URL for search page
 */
Routes::map('/resultats-de-recherche', function ($params) {
	Routes::load('templates/research.php', array_merge($params, $_POST), 200);
});
