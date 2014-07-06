ng.module('velocity.home', ['ui.router'])
  .config([
    '$stateProvider',
    '$urlRouterProvider',
    'routing',
    velocityHomeModuleConfig
  ]);

/**
 * Configure Home Module
 * @param  {Object} $stateProvider
 * @param  {Oject} $urlRouterProvider
 * @param  {Array} routing
 * @return {void}
 */
function velocityHomeModuleConfig($stateProvider, $urlRouterProvider, routing) {
  console.log(arguments.callee.name, arguments);
  // Default route
  $urlRouterProvider.otherwise('/home');
  // Register all routes
  routing.forEach(function(route) {
    $stateProvider.state(route);
  });
}
