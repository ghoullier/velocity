'use strict';

/**
 * @ngInject
 */
function LinesController($scope, LinesViewData) {
  $scope.lines = [];
  $scope.baseUrl = '';
  LinesViewData.getLines().then(function(data) {
    $scope.baseUrl = data.baseurl;
    $scope.lines = data.line;
  });
}

module.exports = LinesController;
