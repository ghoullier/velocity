var gulp = require('gulp');
var cache = require('gulp-angular-templatecache');
var htmlmin = require('gulp-htmlmin');
var paths = require('./paths');

module.exports = function () {
  gulp.src(paths.sources.views)
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(cache({
      module: 'velocity.view',
      root: 'views/',
      filename: 'app.templates.js'
    }))
    .pipe(gulp.dest(paths.dist.scripts));
};
