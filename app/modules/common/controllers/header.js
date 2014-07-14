HeaderController.$inject = ['$scope', '$log', 'trace'];
function HeaderController($scope, $log, trace) {
  $log.log('HeaderCtrl', arguments);

  $scope.headerInfo = {
    test: 'poke'
  };

  this.poke = function poke() {
    $log.log('HeaderCtrl::poke');
  };
}

ng.module('velocity.common')
  .controller('HeaderController', HeaderController);
