ng.module('velocity.home', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', velocityHomeModuleConfig]);

/**
 * Configure Home Module
 * @param  {Object} $stateProvider
 * @param  {Oject} $urlRouterProvider
 * @return {void}
 */
function velocityHomeModuleConfig($stateProvider, $urlRouterProvider) {
  console.log(arguments.callee.name, arguments);
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'modules/home/partials/home.html'
    })
    .state('poke', {
      url: '/poke',
      template: '<velocity-hour></velocity-hour>'
    });
}
