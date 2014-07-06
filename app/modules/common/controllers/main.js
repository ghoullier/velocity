MainController.$inject = ['$scope', '$log', 'trace'];
function MainController($scope, $log, trace) {
  $log.log('MainCtrl', arguments);

  $scope.count = 0;

  function increment() {
    trace(arguments);
    // Increment counter
    ++$scope.count;
  }
  this.increment = increment;
}

ng.module('velocity.common');
  .controller('MainController', MainController);
