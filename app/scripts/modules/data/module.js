'use strict';

module.exports = angular
  .module('velocity.data', [
    'ngResource',
    'velocity.common'
  ])
  .config(require('./config/cache'))
  .constant('OpenDataApi', require('./constant/api'))
  .factory('HttpCache', require('./factory/http-cache'))
  .factory('ApiService', require('./factory/api-service'))
  .service('BikeDistrictsData', require('./factory/bike-districts'))
  .service('BikeStationsData', require('./factory/bike-stations'))
  .service('LinesData', require('./factory/lines'))
;
