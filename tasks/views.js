var gulp = require('gulp');
var refresh = require('gulp-livereload');
var htmlmin = require('gulp-htmlmin');
var plumber = require('gulp-plumber');
var lrserver = require('./live-reload');
var paths = require('./paths');
var handlers = require('./handlers');

// Views task
module.exports = function() {
  // Get our index.html
  gulp.src(paths.sources.mainHtml)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onError
    }))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
    .pipe(refresh(lrserver));

  // Any other view files from app/views
  gulp.src(paths.sources.views)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onError
    }))
    // Will minimify html
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    // Will be put in the dist/views folder
    .pipe(gulp.dest(paths.dist.views))
    .pipe(refresh(lrserver));
};
