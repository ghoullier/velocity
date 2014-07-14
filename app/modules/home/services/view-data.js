BikesStationsViewData['$inject'] = ['$q', 'BikesStationsData', 'trace'];
function BikesStationsViewData($q, BikesStationsData, trace) {

  this.getBikeStations = function getBikeStations() {
    var deferred = $q.defer();

    function onGetBikeStationsWithSuccess(response) {
      trace(arguments);
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

    BikesStationsData
      .getBikeStations()
      .then(onGetBikeStationsWithSuccess, deferred.reject);

    return deferred.promise;
  };
}

ng.module('velocity.home')
  .service('BikesStationsViewData', BikesStationsViewData);
