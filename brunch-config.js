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
      },
      order: {
        before: [
          'app/modules/*/module.js'
        ],
        after: [
          'app/bootstrap.js'
        ]
      }
    },
    stylesheets: {
      joinTo: 'stylesheets/app.css'
    },
    templates: {
      joinTo: 'javascripts/app.js'
    }
  },
  modules: {
    definition: false,
    wrapper: function (path, data) {
      return ";(function (root, ng) {\n" + data  + "\n}(this, this.angular))\n";
    }
  }
};
