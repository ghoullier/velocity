'use strict';

/**
 * @ngInject
 */
function WelcomeController($scope) {
  $scope.testVar = 'We are up and running from a required module! :)';
}

module.exports = WelcomeController;
