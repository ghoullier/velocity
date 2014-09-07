'use strict';

var CacheConfig = require('./config/cache');
var OpenDataApi = require('./constant/api');
var HttpCacheFactory = require('./factory/http-cache');
var ApiRequestFactory = require('./factory/api-request');
var BikeDistrictsDataService = require('./service/bike-districts');
var BikeStationsDataService = require('./service/bike-stations');
var LinesDataService = require('./service/lines');

module.exports = angular
  .module('velocity.data', [
    'ngResource',
    'velocity.common'
  ])
  .config(CacheConfig)
  .constant('OpenDataApi', OpenDataApi)
  .factory('HttpCache', HttpCacheFactory)
  .factory('ApiRequest', ApiRequestFactory)
  .service('BikeDistrictsData', BikeDistrictsDataService)
  .service('BikeStationsData', BikeStationsDataService)
  .service('LinesData', LinesDataService);
