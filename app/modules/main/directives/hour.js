var module = ng.module('velocity.main');
module
  .directive('velocityHour', ['$log', function($log) {
    return {
      restrict: 'E',
      scope: {
        title: '@',
        poke: '&onPoke'
      },
      controller: ['$scope', function($scope) {
        $scope.test = 'me';

        this.foo = function foo() {
          $log.log('velocityHour::controller::foo');
        };
      }],
      controllerAs: 'ctrl',
      link: function (scope, element, attr) {
        console.log('velocityHour', scope);
        scope.hour = '10h';
      },
      templateUrl: 'modules/main/directives/templates/hour.html'
    };
  }]);
