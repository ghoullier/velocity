'use strict';

var routes = require('../config/routes');

/**
 * @ngInject
 */
function Navigation() {
  // ViewModel
  var vm = this;

  // Interface

  vm.links = routes
    .filter(function onFilterRoute(route) {
      return !route.params;
    })
    .map(function onMapRoute(route) {
      return {
        title: route.title,
        url: route.url
      };
    })
  ;
}

module.exports = Navigation;
