'use strict';

/**
 * @ngInject
 */
function UiRouteConfig($routeProvider, $locationProvider) {
  $routeProvider
   .when('/welcome', {
      templateUrl: 'views/welcome.html',
      controller: 'WelcomeController as ctrl'
    })
   .when('/bike-stations', {
      templateUrl: 'views/bike-stations.html',
      controller: 'BikeStationsController as ctrl'
    })
   .when('/bike-stations/:id', {
      templateUrl: 'views/bike-station-detail.html',
      controller: 'BikeStationDetailController as ctrl'
    })
    .otherwise({
      redirectTo: '/welcome'
    }) ;

  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = UiRouteConfig;
