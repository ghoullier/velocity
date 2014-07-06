var module = ng.module('velocity.common');
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
      templateUrl: 'modules/common/directives/templates/pane.html'
    };
  }]);
