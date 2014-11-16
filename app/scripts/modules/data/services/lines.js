'use strict';

/**
 * @ngInject
 */
function LinesData(ApiService) {
  return ApiService('getlines');
}

export default LinesData;
