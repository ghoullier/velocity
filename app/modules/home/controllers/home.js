HomeController['$inject'] = ['$scope', '$log', 'trace'];
function HomeController($scope, $log, trace) {
  trace(arguments);
  $scope.debug = 'debug';
}

ng.module('velocity.home')
  .controller('HomeController', HomeController);
