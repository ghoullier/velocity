'use strict';

/**
 * @ngInject
 */
function BikeStationsData($http, $log, OpenDataApi) {

  function request(command) {
    return $http({
      url: OpenDataApi.url,
      method: 'GET',
      params: {
        version: OpenDataApi.version,
        key: OpenDataApi.key,
        cmd: command
      }
    });
  }

  this.getBikeStations = function getBikeStations() {
    return request('getbikestations');
  };
}

module.exports = BikeStationsData;
