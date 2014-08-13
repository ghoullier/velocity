'use strict';

/**
 * @ngInject
 */
function BikeStationDetailController($scope, $routeParams, BikeStationsViewData) {
  $scope.station = {};
  BikeStationsViewData.getBikeStationById($routeParams.id).then(function (station) {
    $scope.station = station;
  });
}

module.exports = BikeStationDetailController;
