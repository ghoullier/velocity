exports.config = {
  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/
    }
  },
  files: {
    javascripts: {
      joinTo: {
        'javascripts/app.js': /^app/,
        'javascripts/vendor.js': /^(?!app)/
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css'
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  }
};
