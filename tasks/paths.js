module.exports = {
  modules: {
    ui: './app/scripts/modules/ui/',
    templates: './app/scripts/modules/templates/'
  },
  sources: {
    mainHtml: './app/index.html',
    mainJs: './app/scripts/main.js',
    vendorJs: './app/scripts/vendor.js',
    scripts: './app/scripts/**/*.js',
    styles: './app/styles/**/*.scss',
    views: './app/views/**/*.html',
    images: './app/styles/images/**/*.png'
  },
  dist: {
    root: './dist/',
    scripts: './dist/js/',
    styles: './dist/css/',
    images: './dist/css/images/',
    views: './dist/views/'
  }
};
