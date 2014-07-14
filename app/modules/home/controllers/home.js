HomeController['$inject'] = ['$scope', '$log', 'trace'];
function HomeController($scope, $log, trace) {
  trace(arguments);
  $scope.debug = 'debug';
  this.poke = function poke() {
    $log.log($scope.debug);
  };
}

ng.module('velocity.home')
  .controller('HomeController', HomeController);
