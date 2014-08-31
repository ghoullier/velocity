'use strict';

var CacheConfig = require('./config/cache');
var OpenDataApi = require('./constant/api');
var BikeStationsData = require('./service/bike-stations');
var HttpCache = require('./factory/http-cache');

module.exports = angular
  .module('velocity.data', [
    'ngResource',
    'velocity.common'
  ])
  .config(CacheConfig)
  .constant('OpenDataApi', OpenDataApi)
  .factory('HttpCache', HttpCache)
  .service('BikeStationsData', BikeStationsData);
