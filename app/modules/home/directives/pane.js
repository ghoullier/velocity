HomePaneDirective['$inject'] = ['$log'];
function HomePaneDirective($log) {
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

ng.module('velocity.home')
  .directive('velocityHomePane', HomePaneDirective);
