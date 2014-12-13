'use strict';

/**
 * @ngInject
 */
function BikeDistrictsData(ApiService) {
  return ApiService('getbikedistricts');
}

export default BikeDistrictsData;
