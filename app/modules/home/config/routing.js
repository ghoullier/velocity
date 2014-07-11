ng.module('velocity.home')
  .constant('routing', [{
    name: 'home',
    url: '/home',
    templateUrl: 'modules/home/partials/home.html',
    controller: 'HomeController as home'
  }, {
    name: 'bike-stations',
    url: '/bike-stations',
    templateUrl: 'modules/home/partials/bike-stations.html'
  }]);
