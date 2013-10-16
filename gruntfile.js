module.exports = function(grunt) {
  grunt.initConfig({
    // Configuration du projet et des tâches
    pkg: grunt.file.readJSON('package.json'),
    csslint: {
      // Configuration de la tâche csslint
      options: {
        // Options de la tâche qui écrasent celles par défaut
      },
      // Fichiers à vérifier
      src: ['www/css/*.css']
    },
    cssmin: {
      // Configuration de la tâche cssmin
      options: {
        // Options de la tâche qui écrasent celles par défaut
      },
      combine: {
        files: {
          // Fichier de destination
          'www/css/style.css':
          // Fichiers à concaténer
          []
        }
      }
    },
    jshint: {
      // Fichiers à vérifier
      files: ['gruntfile.js', 'www/js/*.js'],
      // Surcharge les options par défaut
      indent: 2,
      globals: {
        jQuery: true,
        _: true,
        Backbone: true
      },
      // Génération automatique d'un rapport XML
      reporter: 'jslint',
      reporterOutput: 'report/jshint.xml'
    },
    concat: {
      options: {
        // Caractère à utiliser pour séparer les fichiers concaténés
        seperator: ';'
      },
      dist: {
        // Fichiers à concaténer
        src: [],
        // Fichier de destination
        dest: 'www/js/script.js'
      }
    },
    uglify: {
      options: {
        // Insert la date et le nom des fichiers minimifié
        banner: '/* <%= grunt.template.today("dd-mm-yyyy, HH:MM") %> \n <%= concat.dist.src %> */\n'
      },
      dist: {
        files: {
          // Fichier de destination
          'www/js/script.min.js':
          // Fichiers à concaténer
          []
        }
      }
    },
    imagemin: {
      dynamic: {
        files: [{
          // Mode de ciblage automatique
          expand: true,
          // Dossier contenant les sources
          cwd: 'www/img/',
          // Fichiers à prendre en compte
          src: ['*.{png,jpg,gif}'],
          // Dossier de destination
          dest: 'www/img'
        }]
      }
    }
  });
};
