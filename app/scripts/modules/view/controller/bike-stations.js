'use strict';

/**
 * @ngInject
 */
function BikeStations(BikeStationsDataView) {
  // ViewModel
  var vm = this;

  // Interface

  vm.stations = [];

  BikeStationsDataView.get().then(function(stations) {
    vm.stations = stations;
  });
}

module.exports = BikeStations;
