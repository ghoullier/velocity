'use strict';

/**
 * @ngInject
 */
function BikeStationsDataService(ApiRequest) {

  this.getBikeStations = function getBikeStations() {
    return ApiRequest('getbikestations');
  };
}

module.exports = BikeStationsDataService;
