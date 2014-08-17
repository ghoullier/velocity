var gulp = require('gulp');
var paths = require('./paths');

module.exports = function() {
  // Watch our scripts, and when they change run lint and scripts
  gulp.watch([paths.sources.scripts],[
    'lint',
    'scripts'
  ]);
  // Watch our sass files
  gulp.watch([paths.sources.styles], [
    'styles'
  ]);

  gulp.watch([paths.sources.views], [
    'views'
  ]);
};
