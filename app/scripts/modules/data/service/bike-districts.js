'use strict';

/**
 * @ngInject
 */
function BikeDistrictsDataService(ApiRequest) {
  this.get = function get() {
    return ApiRequest('getbikedistricts');
  };
}

module.exports = BikeDistrictsDataService;
