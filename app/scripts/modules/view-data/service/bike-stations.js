'use strict';

/**
 * @ngInject
 */
function BikeStationsViewDataService($q, BikeStationsData) {

  this.getBikeStations = function getBikeStations() {
    var deferred = $q.defer();

    function onGetBikeStationsWithSuccess(response) {
      var stations = response.data.opendata.answer.data.station;
      stations = stations.map(function (station) {
        return {
          id: station.number,
          latitude: station.latitude,
          longitude: station.longitude,
          showWindow: true,
          title: station.name,
          slotsavailable: station.slotsavailable,
          bikesavailable: station.bikesavailable,
          district: station.district
        };
      });
      deferred.resolve(stations);
    }

    BikeStationsData
      .getBikeStations()
      .then(onGetBikeStationsWithSuccess, deferred.reject);

    return deferred.promise;
  };
}

module.exports = BikeStationsViewDataService;
