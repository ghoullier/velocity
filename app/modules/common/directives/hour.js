HourDirective.$inject = ['$log'];
function HourDirective($log) {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      poke: '&onPoke'
    },
    controller: HourController,
    controllerAs: 'ctrl',
    link: function (scope, element, attr) {
      console.log('velocityHour', scope);
      scope.hour = '10h';
    },
    templateUrl: 'modules/common/directives/templates/hour.html'
  };
}

HourController.$inject = ['$log', 'trace'];
function HourController($scope, trace) {
  trace(arguments);

  $scope.test = 'me';

  this.foo = function foo() {
    $log.log('velocityHour::controller::foo');
  };
}

ng.module('velocity.common')
  .directive('velocityHour', HourDirective);
