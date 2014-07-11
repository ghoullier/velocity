exports.config = {
  plugins: {
    jshint: {
      pattern: /^app\/.*\.js$/,
      options: {
        sub: true
      }
    },
    "angular-partials": {
      poke: true
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
    }
  },
  modules: {
    definition: false,
    wrapper: function (path, data) {
      console.log('wrapper', path);
      return ";(function (root, ng) {\n" + data  + "\n}(this, this.angular))\n";
    }
  }
};
