'use strict';

/**
 * @ngInject
 */
function BikeStationsDataService($http, $log, HttpCache, OpenDataApi) {

  function request(command) {
    return $http({
      url: OpenDataApi.url,
      method: 'GET',
      params: {
        version: OpenDataApi.version,
        key: OpenDataApi.key,
        cmd: command
      },
      cache: HttpCache
    });
  }

  this.getBikeStations = function getBikeStations() {
    return request('getbikestations');
  };
}

module.exports = BikeStationsDataService;
