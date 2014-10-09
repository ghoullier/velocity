var gulp = require('gulp');
var refresh = require('gulp-livereload');
var cache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var lrserver = require('./live-reload');
var paths = require('./paths');

module.exports = function () {
  return gulp.src(paths.sources.views)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(cache({
      filename: 'module.js',
      module: 'velocity.templates',
      moduleSystem: 'Browserify',
      root: 'views/',
      standalone: true
    }))
    .pipe(gulp.dest(paths.modules.templates))
    .pipe(refresh(lrserver));
};
