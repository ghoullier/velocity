var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var refresh = require('gulp-livereload');
var lrserver = require('./live-reload');
var paths = require('./paths');

// Styles task
module.exports = function() {
  return gulp.src(paths.sources.styles)
    // The onerror handler prevents Gulp from crashing when you make a mistake in your SASS
    .pipe(sass({onError: function(e) { console.log(e); } }))
    // Optionally add autoprefixer
    .pipe(autoprefixer("last 2 versions", "> 1%"))
    // These last two should look familiar now :)
    .pipe(gulp.dest(paths.dist.styles))
    .pipe(refresh(lrserver));
};
