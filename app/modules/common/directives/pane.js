ng.module('velocity.common')
  .directive('velocityPane', [velocityPaneDirective]);

/**
 * Velocity Pane Directive
 * @return {ngDirective}
 */
function velocityPaneDirective() {
  return {
    require: '^velocityTabs',
    restrict: 'E',
    transclude: true,
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: 'modules/common/directives/templates/pane.html'
  };
}
