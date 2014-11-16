'use strict';

/**
 * @ngInject
 */
function BikeStations(BikeStationsDataView, stations) {
  // ViewModel
  var vm = this;

  // Interface

  vm.stations = stations;
}

export default BikeStations;
