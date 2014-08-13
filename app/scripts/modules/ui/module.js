'use strict';

var WelcomeController = require('./controller/welcome');

console.log('WelcomeController', WelcomeController);

module.exports = angular
  .module('velocity.ui', ['ngRoute', 'ngTouch'])
  .controller('WelcomeController', WelcomeController);
