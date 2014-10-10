'use strict';

module.exports = angular
  .module('velocity.data', [
    'ngResource',
    'velocity.common'
  ])
  .config(require('./config/cache'))
  .constant('OpenDataApi', require('./constant/api'))
  .factory('HttpCache', require('./services/http-cache'))
  .factory('ApiService', require('./services/api-service'))
  .factory('BikeDistrictsData', require('./services/bike-districts'))
  .factory('BikeStationsData', require('./services/bike-stations'))
  .factory('LinesData', require('./services/lines'))
;
