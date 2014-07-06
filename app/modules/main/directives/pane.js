var module = ng.module('velocity.main');
module
  .directive('velocityPane', [function() {
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
      templateUrl: 'modules/main/directives/templates/pane.html'
    };
  }]);
