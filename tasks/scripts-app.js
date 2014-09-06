var gulp = require('gulp');
var util = require('gulp-util');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var plumber = require('gulp-plumber');
var env = require('./env');
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
      debug: !env.production
    }))
    // Anotate angular di
    .pipe(ngAnnotate({
      add: true
    }))
    // Minimify app js only in production
    .pipe(env.production ? uglify({
      mangle: true
    }) : util.noop())
    // Bundle to a single file
    .pipe(concat('app.js'))
    // Output it to our dist folder
    .pipe(gulp.dest(paths.dist.scripts));
};
