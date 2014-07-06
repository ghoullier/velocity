PaneDirective.$inject = ['$log'];
function PaneDirective($log) {
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

ng.module('velocity.common')
  .directive('velocityPane', PaneDirective);
