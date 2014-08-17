var gulp = require('gulp');
var jshint = require('gulp-jshint');
var paths = require('./paths');

// JSHint task
module.exports = function() {
  return gulp.src(paths.sources.scripts)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
};
