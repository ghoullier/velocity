var gulp = require('gulp');
var refresh = require('gulp-livereload');
var htmlmin = require('gulp-htmlmin');
var lrserver = require('./live-reload');
var paths = require('./paths');

// Views task
module.exports = function() {
  // Get our index.html
  gulp.src(paths.sources.mainHtml)
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
    .pipe(refresh(lrserver));

  // Any other view files from app/views
  gulp.src(paths.sources.views)
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // Will be put in the dist/views folder
    .pipe(gulp.dest(paths.dist.views))
    .pipe(refresh(lrserver));
};
