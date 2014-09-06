var gulp = require('gulp');

// Dev task
gulp.task('default', ['build', 'watch'], require('./tasks/default'));

// Build task
gulp.task('build', ['views', 'templates', 'images', 'styles', 'lint', 'scripts']);

// JSHint task
gulp.task('lint', require('./tasks/lint'));

// Styles task
gulp.task('styles', require('./tasks/styles'));

// Scripts task
gulp.task('scripts', ['scripts.app', 'scripts.vendor']);

// Application scripts task
gulp.task('scripts.app', require('./tasks/scripts-app'));

// Vendor scripts task
gulp.task('scripts.vendor', require('./tasks/scripts-vendor'));

// Views task
gulp.task('views', require('./tasks/views'));

// Templates task
gulp.task('templates', require('./tasks/templates'));

// Images task
gulp.task('images', require('./tasks/images'));

// Watch task
gulp.task('watch', ['lint'], require('./tasks/watch'));

// Publish task
gulp.task('publish', ['build'], require('./tasks/publish'));
