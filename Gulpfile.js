var gulp = require('gulp');

// Dev task
gulp.task('default', ['views', 'styles', 'lint', 'scripts', 'watch'], require('./tasks/default'));

// JSHint task
gulp.task('lint', require('./tasks/lint'));

// Styles task
gulp.task('styles', require('./tasks/styles'));

// Scripts task
gulp.task('scripts', require('./tasks/scripts'));

// Views task
gulp.task('views', require('./tasks/views'));

// Watch task
gulp.task('watch', ['lint'], require('./tasks/watch'));

// Publish task
gulp.task('publish', ['lint', 'styles', 'scripts', 'views'], require('./tasks/publish'));
