'use strict';

/**
 * @ngInject
 */
function LinesController($scope, LinesDataView) {
  $scope.lines = [];
  $scope.baseUrl = '';
  LinesDataView.get().then(function(data) {
    $scope.baseUrl = data.baseurl;
    $scope.lines = data.line;
  });
}

module.exports = LinesController;
