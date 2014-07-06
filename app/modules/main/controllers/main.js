var module = ng.module('velocity.main');
module.controller('MainCtrl', ['$scope', '$log', 'trace', function($scope, $log, trace) {
  $log.log('MainCtrl', arguments);

  $scope.count = 0;

  function increment() {
    trace(arguments);
    // Increment counter
    ++$scope.count;
  }
  this.increment = increment;
}]);
