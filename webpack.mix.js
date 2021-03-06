let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent Api for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copyDirectory('resources/assets/images', 'public/images')
    .copyDirectory('resources/assets/fonts', 'public/fonts')
    .copyDirectory('resources/assets/sass/vendor', 'public/vendor/css')
    .copyDirectory('resources/assets/js/vendor', 'public/vendor/js')
    .copyDirectory('resources/assets/sass/vendor', 'public/vendor/css');
