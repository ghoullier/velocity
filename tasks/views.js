var gulp = require('gulp');
var refresh = require('gulp-livereload');
var lrserver = require('./live-reload');
var paths = require('./paths');

// Views task
module.exports = function() {
  // Get our index.html
  gulp.src(paths.sources.mainHtml)
    // And put it in the dist folder
    .pipe(gulp.dest(paths.dist.root))
    .pipe(refresh(lrserver));

  // Any other view files from app/views
  gulp.src(paths.sources.views)
    // Will be put in the dist/views folder
    .pipe(gulp.dest(paths.dist.views))
    .pipe(refresh(lrserver));
};
