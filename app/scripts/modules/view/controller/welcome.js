'use strict';

var pkg = require('../../../../../package');

/**
 * @ngInject
 */
function WelcomeController($scope) {
  $scope.appVersion = pkg.version;
}

module.exports = WelcomeController;
