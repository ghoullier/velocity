HourDirective.$inject = ['$log', 'trace'];
function HourDirective($log, trace) {
  return {
    restrict: 'E',
    scope: {
      title: '@',
      poke: '&onPoke'
    },
    controller: HourController,
    controllerAs: 'ctrl',
    link: function link(scope, element, attr) {
      trace(arguments);
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
    trace(arguments);
  };
}

ng.module('velocity.common')
  .directive('velocityHour', HourDirective);
