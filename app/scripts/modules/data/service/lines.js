'use strict';

/**
 * @ngInject
 */
function LinesDataService(ApiRequest) {

  this.getLines = function getLines() {
    return ApiRequest('getlines', {
      size: 100
    });
  };
}

module.exports = LinesDataService;
