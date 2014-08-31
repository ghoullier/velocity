var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var paths = require('./paths');
var handlers = require('./handlers');

module.exports = function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
  return gulp.src([paths.sources.mainJs])
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onError
    }))
    // Bundle sources
    .pipe(browserify({
      insertGlobals: true
    }))
    // Anotate angular di
    .pipe(ngAnnotate({
      remove: true,
      add: true
    }))
    .pipe(uglify({
      mangle: true
    }))
    // Bundle to a single file
    .pipe(concat('bundle.js'))
    // Output it to our dist folder
    .pipe(gulp.dest(paths.dist.scripts));
};
