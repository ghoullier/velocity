'use strict';

/**
 * @ngInject
 */
function BikeStationsData(ApiService) {
  return ApiService('getbikestations');
}

export default BikeStationsData;
