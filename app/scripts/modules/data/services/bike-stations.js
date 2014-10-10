'use strict';

/**
 * @ngInject
 */
function BikeStationsData(ApiService) {
  return ApiService('getbikestations');
}

module.exports = BikeStationsData;
