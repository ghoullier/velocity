'use strict';

module.exports = angular
  .module('velocity.data-view', [
    'velocity.data'
  ])
  .factory('DataView', require('./factory/data-view'))
  .factory('BikeStationsDataView', require('./factory/bike-stations'))
  .factory('LinesDataView', require('./factory/lines'))
;
