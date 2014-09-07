'use strict';

/**
 * @ngInject
 */
function LinesDataFactory(ApiService) {
  return ApiService('getlines');
}

module.exports = LinesDataFactory;
