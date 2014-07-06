HomeModuleConfig.$inject = ['$stateProvider', '$urlRouterProvider', 'routing'];
function HomeModuleConfig($stateProvider, $urlRouterProvider, routing) {
  console.log(arguments.callee.name, arguments);
  // Default route
  $urlRouterProvider.otherwise('/home');
  // Register all routes
  routing.forEach(function(route) {
    $stateProvider.state(route);
  });
}

ng.module('velocity.home', ['ui.router'])
  .config(HomeModuleConfig);
