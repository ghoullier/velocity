'use strict';

/**
 * @ngInject
 */
function BikeStationsController($scope, BikeStationsViewData) {
  $scope.stations = [];
  BikeStationsViewData.getBikeStations().then(function(stations) {
    $scope.stations = stations;
  });
}

module.exports = BikeStationsController;
