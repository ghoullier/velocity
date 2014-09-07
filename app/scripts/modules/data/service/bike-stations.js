'use strict';

/**
 * @ngInject
 */
function BikeStationsDataService(ApiRequest) {
  this.get = function get() {
    return ApiRequest('getbikestations');
  };
}

module.exports = BikeStationsDataService;
