'use strict';

/**
 * @ngInject
 */
function UiRouteConfig($routeProvider, $locationProvider) {
  $routeProvider
   .when('/welcome', {
      templateUrl: 'views/welcome.html',
      controller: 'WelcomeController'
    })
    .otherwise({
      redirectTo: '/welcome'
    }) ;

  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = UiRouteConfig;
