'use strict';

var UiRouteConfig = require('./config/route');
var NavigationController = require('./controller/navigation');
var WelcomeController = require('./controller/welcome');
var BikeStationsController = require('./controller/bike-stations');
var BikeStationDetailController = require('./controller/bike-station-detail');
var LinesController = require('./controller/lines');

module.exports = angular
  .module('velocity.view', [
    'ngRoute',
    'ngTouch',
    'ui.map',
    'velocity.common',
    'velocity.view-data'
  ])
  .config(UiRouteConfig)
  .controller('NavigationController', NavigationController)
  .controller('WelcomeController', WelcomeController)
  .controller('BikeStationsController', BikeStationsController)
  .controller('BikeStationDetailController', BikeStationDetailController)
  .controller('LinesController', LinesController);
