'use strict';

/**
 * @ngInject
 */
function BikeDistrictsDataFactory(ApiService) {
  return ApiService('getbikedistricts');
}

module.exports = BikeDistrictsDataFactory;
