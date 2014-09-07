'use strict';

/**
 * @ngInject
 */
function BikeStationsController($scope, BikeStationsDataView) {
  $scope.stations = [];
  BikeStationsDataView.get().then(function(stations) {
    $scope.stations = stations;
  });
}

module.exports = BikeStationsController;
