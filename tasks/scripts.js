var gulp = require('gulp');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var paths = require('./paths');

module.exports = function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out)
  return gulp.src([paths.sources.mainJs])
    // Bundle sources
    .pipe(browserify({
      insertGlobals: true
    }))
    // Anotate angular di
    .pipe(ngAnnotate({
      remove: true,
      add: true
    }))
    // .pipe(uglify({
    //   mangle: true
    // }))
    // Bundle to a single file
    .pipe(concat('bundle.js'))
    // Output it to our dist folder
    .pipe(gulp.dest(paths.dist.scripts));
};
