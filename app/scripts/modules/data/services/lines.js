'use strict';

/**
 * @ngInject
 */
function LinesData(ApiService) {
  return ApiService('getlines');
}

module.exports = LinesData;
