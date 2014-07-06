ng.module('velocity.common')
  .directive('velocityTabs', [velocityTabsDirective]);

/**
 * Velocity Tabs Directive
 * @return {[type]}
 */
function velocityTabsDirective() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: ['$scope', function($scope) {
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
    }],
    controllerAs: 'ctrl',
    templateUrl: 'modules/common/directives/templates/tabs.html'
  };
}
