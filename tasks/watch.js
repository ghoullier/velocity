var gulp = require('gulp');
var paths = require('./paths');

module.exports = function() {
  // Watch our scripts, and when they change run lint and scripts
  gulp.watch([paths.sources.vendorJs],[
    'lint',
    'scripts.vendor'
  ]);
  // Watch our scripts, and when they change run lint and scripts
  gulp.watch([paths.sources.scripts],[
    'lint',
    'scripts.app'
  ]);
  // Watch our sass files
  gulp.watch([paths.sources.styles], [
    'styles'
  ]);

  gulp.watch([paths.sources.mainHtml], [
    'views'
  ]);

  gulp.watch([paths.sources.views], [
    'templates'
  ]);
};
