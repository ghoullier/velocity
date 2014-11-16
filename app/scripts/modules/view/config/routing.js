'use strict';

var routes = require('./routes');

/**
 * @ngInject
 */
function UiRouteConfig($routeProvider, $locationProvider) {

  // Register all routes
  routes.forEach(function onEachRoute(route) {
    $routeProvider.when(route.url, {
      templateUrl: route.templateUrl,
      controller: route.controller,
      resolve: route.resolve
    });
    if (route.otherwise) {
      $routeProvider.otherwise({
        redirectTo: route.url
      });
    }
  });

  // Configure html5
  $locationProvider.html5Mode(false);
}

module.exports = UiRouteConfig;
