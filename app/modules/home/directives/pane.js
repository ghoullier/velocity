ng.module('velocity.home')
  .directive('velocityHomePane', [velocityHomePaneDirective]);

/**
 * Velocity Home Pane Directive
 * @return {ngDirective}
 */
function velocityHomePaneDirective() {
  return {
    require: '^velocityTabs',
    restrict: 'E',
    scope: {
      title: '@'
    },
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: 'modules/home/directives/templates/pane.html'
  };
}
