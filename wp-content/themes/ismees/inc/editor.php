<?php
/**
 * Disable Gutenberg by template
 *
 */
function disable_gutenberg( $can_edit ) {
	if ( ! ( is_admin() && ! empty( $_GET['post'] ) ) ) {
		return $can_edit;
	}
	if ( should_disable( $_GET['post'] ) ) {
		$can_edit = false;
	}

	return $can_edit;
}

function gutenberg_allowed_block_types( $allowed_blocks ) {

	return array(
		'core/image',
		'core/paragraph',
		'core/heading',
		'core/list',
		'core/list-item',
		'core/gallery',
		'core/quote',
		'core/cover',
		'core/file',
		'core/buttons',
		'core/text-columns',
		'core/columns',
		'core/media-text',
		'core/separator',
		'core/embed',
		'core/spacer',
		'core/group',

		'acf/accordion',
		'acf/cta',
		'acf/title-arrow'
	);
}

/**
 * Templates and Page IDs without editor
 *
 */
function should_disable( $id = false ) {
	if ( empty( $id ) ) {
		return false;
	}
	$disabled_ids = [
		//get_option( 'page_on_front' ),
	];
	$disabled_types = [
		//'council_member',
	];
	$disabled_templates = [
		//'templates/landing.php',
	];

	return in_array( intval( $id ), $disabled_ids ) || in_array( get_post_type( $id ), $disabled_types ) || in_array( get_page_template_slug( $id ), $disabled_templates );
}
