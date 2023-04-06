# ismees

ismees is an empty wordpress theme template made for Kryzalid projects

## Installation

Install it like a normal WP but `wp-config-sample.php` contains information for a more secure WP configuration.
Table prefixes are changed, configurations are disabled, and some http settings are changed.
It's just for minimum security and improved performance.

AND OBVIOUSLY, CHANGE "Authentication Unique Keys and Salts" values in `wp-config.php`.

After the configuration, go to the wp-content/themes/ directory and *wordpress-ismees* theme.

### Install Timber

```bash
cd wp-content/themes/wordpress-ismees/
composer install
```

### Compile and minify assets

```bash
cd wp-content/themes/wordpress-ismees/
```

Using webpack auto-reload on save
```bash
yarn run dev
```

Minify css and js for production
```bash
yarn run build
```

## Usage

Pre-install plugins

* ACF (Admin customization)
* YOAST (SEO support)
* Wicked folder (Organize Medias and pages in Folder)
* itheme security
* WP-Rocket (cache and optimisation)

## Documentations
[Timber](https://timber.github.io/docs/)

[ACF](https://www.advancedcustomfields.com/resources/)
