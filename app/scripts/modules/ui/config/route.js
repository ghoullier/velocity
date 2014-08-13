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
   .when('/bikes', {
      templateUrl: 'views/bikes.html',
      controller: 'BikesController as ctrl'
    })
    .otherwise({
      redirectTo: '/welcome'
    }) ;

  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = UiRouteConfig;
