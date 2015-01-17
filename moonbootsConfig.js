var path = require('path');
var config = require('getconfig');
var templatizer = require('templatizer');
var stylizer = require('stylizer');

// for reuse
var appDir = path.join(__dirname, '/src/node_modules');
var cssDir = path.join(__dirname, '/src/assets/css');
var styleDir = path.join(__dirname, '/src/styles');

module.exports = {
  appPath: '/{p*}',
  moonboots: {
    jsFileName: 'ampersand-example',
    cssFileName: 'ampersand-example',
    main: path.join(appDir, '/client.js'),
    developmentMode: config.isDev,
    libraries: [ /* Client-Side libraries (non-common.js) */ ],
    stylesheets: [
      path.join(cssDir, '/normalize.css'),
      path.join(cssDir, '/foundation.css'),
      path.join(cssDir, '/index.css')
    ],
    beforeBuildJS: function() {
      if (config.isDev) {
        templatizer([
          path.join(appDir, '/app/templates'),
          path.join(appDir, '/home/templates'),
          path.join(appDir, '/info/templates')
        ], path.join(appDir, '/templates.js'));
      }
    },
    beforeBuildCSS: function(done) {
      if (!config.isDev) {
        done();
        return;
      }
      stylizer({
        infile: path.join(styleDir, '/index.styl'),
        outfile: path.join(cssDir, '/index.css'),
        development: true,
        // Beware there's an issue with watch on OSX that causes issues with
        // watch if you're not running node 0.10.25 or later.
        watch: path.join(__dirname, '/src/**/*.styl')
      }, done);
    }
  }
};
