'use strict';

var CacheConfig = require('./config/cache');
var OpenDataApi = require('./constant/api');
var HttpCacheFactory = require('./factory/http-cache');
var ApiServiceFactory = require('./factory/api-service');
var BikeDistrictsDataFactory = require('./factory/bike-districts');
var BikeStationsDataFactory = require('./factory/bike-stations');
var LinesDataFactory = require('./factory/lines');

module.exports = angular
  .module('velocity.data', [
    'ngResource',
    'velocity.common'
  ])
  .config(CacheConfig)
  .constant('OpenDataApi', OpenDataApi)
  .factory('HttpCache', HttpCacheFactory)
  .factory('ApiService', ApiServiceFactory)
  .service('BikeDistrictsData', BikeDistrictsDataFactory)
  .service('BikeStationsData', BikeStationsDataFactory)
  .service('LinesData', LinesDataFactory);
