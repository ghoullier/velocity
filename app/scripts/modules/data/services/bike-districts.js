'use strict';

/**
 * @ngInject
 */
function BikeDistrictsData(ApiService) {
  return ApiService('getbikedistricts');
}

module.exports = BikeDistrictsData;
