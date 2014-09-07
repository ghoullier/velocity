'use strict';

/**
 * @ngInject
 */
function LinesDataService(ApiRequest) {
  this.get = function get() {
    return ApiRequest('getlines', {
      size: 100
    });
  };
}

module.exports = LinesDataService;
