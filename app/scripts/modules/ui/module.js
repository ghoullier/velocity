'use strict';

var NavigationController = require('./controller/navigation');
var WelcomeController = require('./controller/welcome');
var UiRouteConfig = require('./config/route');

module.exports = angular
  .module('velocity.ui', ['ngRoute', 'ngTouch'])
  .config(UiRouteConfig)
  .controller('NavigationController', NavigationController)
  .controller('WelcomeController', WelcomeController);
