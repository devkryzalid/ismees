const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

var path = require('path');

// Used for hot-reload css
const localDomain = 'http://localhost';

// Build all page scripts as separate files, named after the template
// These files will be automatically loaded on a same-name template
const pages = require('glob')
  // Fetch all page-specific script files
  .sync(__dirname + "/assets/scripts/pages/*.js")
  // Build an entry object for each file, to be chained inside webpack
  .reduce((files, f) => {
    const file = f.split('/').pop().slice(0, -3);
    return { ...files, [file]: { import: '/assets/scripts/pages/' + file + '.js', filename: 'scripts/pages/[name].js' } }
  }, {});

// Main webpack builder
module.exports = {
  entry: {
    'app': ['./assets/scripts/main.js', './assets/styles/main.scss'],
    'editor': ['./assets/scripts/editor.js', './assets/styles/editor.scss'],
    ...pages
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].js',
    // Hash assets and keep the same folder structure in output
    assetModuleFilename: p => {
      const filepath = path.dirname(p.filename).split('/').slice(1).join('/');
      return `${ filepath }/[name].[hash][ext][query]`;
    },
    clean: true
  },
  plugins: [
    // Minify css
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css',
    }),
    
    // Css hot-reload
    new BrowserSyncPlugin({
      proxy: localDomain,
      files: [ 'dist/*.scss' ],
      injectCss: true, 
      open: false,
    }, { reload: false }),

    // Copy favicons
    new CopyPlugin({
      patterns: [{ from: "./assets/favicon", to: "./favicon" },],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
};