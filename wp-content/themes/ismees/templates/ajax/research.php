<?php

global $params;

$category     = empty($params['category']) ? null : $params['category'];
$type         = empty($params['type']) ? null : $params['type'];
$subjects     = empty($params['subjects']) ? null : $params['subjects'];
$paged        = empty($params['pagenb']) ? 1 : $params['pagenb'];
$search       = empty($params['search']) ? '*' : $params['search'];
$member       = empty($params['member']) ? null : $params['member'];

// ADDSEARCH PARAM AND RESEARCH

$limit = 10;

// set the query strings
$params       = ['page' => $paged, 'limit' => $limit, 'lang' => 'fr'];

$categories = get_terms(['taxonomy' => 'resource_category']);

// AddSearch parameters array, you have to push all your filters in this array
$custom_fields = [];

//Set the document needed to the research
$custom_fields['page'] = ['research'];

if (!empty($member) && $member == true) {
    $custom_fields['resource'] = ['member'];
} else {
    $custom_fields['resource'] = ['student'];
}

if (!empty($category)) {
    if (!is_array($category)) {
        $category = explode(',', $category);
    }
    $custom_fields['category_ids'] = $category;
}

if (!empty($type)) {
    if (!is_array($type)) {
        $type = explode(',', $type);
    }

    $custom_fields['type_id'] = $type;
}

if (!empty($subjects)) {
    if (!is_array($subjects)) {
        $subjects = explode(',', $subjects);
    }

    $custom_fields['subject_ids'] = $subjects;
}

//Push your custom_fields to addSearch
$response = searchByAddsearch($search, $params, $custom_fields);
$results = json_decode($response->body);

if ($results->total_hits > 0) {
    $response     = '';
    $response    .= Timber::compile('partials/lists/addsearch-card-list.twig', ['items' => $results->hits]);
    $data['html'] = $response;
    $data['count'] = $results->total_hits;
    $data['pages_total'] = ceil($results->total_hits / $limit);
} else {
    $data['html'] = Timber::compile('partials/ajax/no-result-item.twig');
    $data['pages_total'] = ceil($results->total_hits / $limit);
    $data['count'] = "0";
}

wp_reset_query();
wp_reset_postdata();

return wp_send_json($data);