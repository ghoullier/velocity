var gulp = require('gulp');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var paths = require('./paths');
var handlers = require('./handlers');

// JSHint task
module.exports = function() {
  return gulp.src(paths.sources.scripts)
    // Catch errors
    .pipe(plumber({
      errorHandler: handlers.onError
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};
