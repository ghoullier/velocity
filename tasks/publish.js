var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var paths = require('./paths');

module.exports = function(){
  // https://github.com/rowoot/gulp-gh-pages/issues/26
  return gulp.src([paths.dist.root + '**/*.*'])
    .pipe(ghPages({
      remoteUrl : 'https://github.com/ghoullier/angular-boilerplate.git',
      branch : 'gh-pages',
      cacheDir : __dirname + '/../.publish/'
    }))
}
