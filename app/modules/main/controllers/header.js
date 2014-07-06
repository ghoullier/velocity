var module = ng.module('velocity.main');
module.controller('HeaderCtrl', ['$scope', '$log', 'trace', function($scope, $log, trace) {
  $log.log('HeaderCtrl', arguments);

  $scope.headerInfo = {
    test: 'poke'
  };

  this.poke = function poke() {
    $log.log('HeaderCtrl::poke');
  };
}]);
