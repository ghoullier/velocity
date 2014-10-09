'use strict';

/**
 * @ngInject
 */
function UiRouteConfig($routeProvider, $locationProvider) {
  $routeProvider
   .when('/welcome', {
      templateUrl: 'views/welcome.html',
      controller: 'Welcome as vm'
    })
   .when('/bike-stations', {
      templateUrl: 'views/bike-stations.html',
      controller: 'BikeStations as vm'
    })
   .when('/bike-stations/:id', {
      templateUrl: 'views/bike-station-detail.html',
      controller: 'BikeStationDetail as vm'
    })
   .when('/lines', {
      templateUrl: 'views/lines.html',
      controller: 'Lines as vm'
    })
    .otherwise({
      redirectTo: '/welcome'
    });

  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = UiRouteConfig;
