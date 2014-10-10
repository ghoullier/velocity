'use strict';

module.exports = angular
  .module('velocity.data-view', [
    'velocity.data'
  ])
  .factory('DataView', require('./services/data-view'))
  .factory('BikeStationsDataView', require('./services/bike-stations'))
  .factory('LinesDataView', require('./services/lines'))
;
