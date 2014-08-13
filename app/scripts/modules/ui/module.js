'use strict';

var WelcomeController = require('./controller/welcome');

console.log('WelcomeController', WelcomeController);

module.exports = angular
  .module('demo.ui', [])
  .controller('WelcomeController', WelcomeController);
