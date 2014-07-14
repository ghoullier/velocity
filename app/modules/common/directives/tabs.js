TabsDirective.$inject = ['$log'];
function TabsDirective($log) {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: TabsController,
    controllerAs: 'ctrl',
    templateUrl: 'modules/common/directives/templates/tabs.html'
  };
}

TabsController.$inject = ['$scope'];
function TabsController($scope) {
  var panes = $scope.panes = [];

  this.select = function select(pane) {
    angular.forEach(panes, function(pane) {
      pane.selected = false;
    });
    pane.selected = true;
  };

  this.addPane = function addPane(pane) {
    if (0 === panes.length) {
      this.select(pane);
    }
    panes.push(pane);
  };
}

ng.module('velocity.common')
  .directive('velocityTabs', TabsDirective);
