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

// Repertory for organisms
Routes::map('/ajax/resources', function ($params) {
    Routes::load('templates/ajax/student-resources.php', array_merge($params, $_POST), 200);
});
