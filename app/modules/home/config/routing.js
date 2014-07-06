ng.module('velocity.home')
  .constant('routing', [{
    name: 'home',
    url: '/home',
    templateUrl: 'modules/home/partials/home.html',
    controller: 'HomeController as home'
  }, {
    name: 'iwowu',
    url: '/iwowu',
    templateUrl: 'modules/home/partials/iwowu.html'
  }]);
