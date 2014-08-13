var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var package = require('../package');
var paths = require('./paths');

module.exports = function() {
  // https://github.com/rowoot/gulp-gh-pages/issues/26
  return gulp.src([paths.dist.root + '**/*.*'])
    .pipe(ghPages({
      remoteUrl : package.repository.url,
      branch : 'gh-pages',
      cacheDir : __dirname + '/../.publish/'
    }))
}
