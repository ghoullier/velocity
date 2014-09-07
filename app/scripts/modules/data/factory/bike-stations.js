'use strict';

/**
 * @ngInject
 */
function BikeStationsDataFactory(ApiService) {
  return ApiService('getbikestations');
}

module.exports = BikeStationsDataFactory;
