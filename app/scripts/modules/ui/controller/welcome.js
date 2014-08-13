'use strict';

/**
 * @ngInject
 */
function WelcomeController($scope, Tracer) {
  Tracer.trace(WelcomeController);
  $scope.testVar = 'We are up and running from a required module! :)';
}

module.exports = WelcomeController;
