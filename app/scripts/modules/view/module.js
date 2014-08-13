'use strict';

var NavigationController = require('./controller/navigation');
var WelcomeController = require('./controller/welcome');
var BikeStationsController = require('./controller/bike-stations');
var UiRouteConfig = require('./config/route');

module.exports = angular
  .module('velocity.view', ['ngRoute', 'ngTouch'])
  .config(UiRouteConfig)
  .controller('NavigationController', NavigationController)
  .controller('WelcomeController', WelcomeController)
  .controller('BikeStationsController', BikeStationsController);
