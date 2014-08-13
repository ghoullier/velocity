'use strict';

var OpenDataApi = require('./constant/api');
var BikeStationsData = require('./service/bike-stations');
var HttpCache = require('./factory/http-cache');

module.exports = angular
  .module('velocity.data', ['ngResource'])
  .constant('OpenDataApi', OpenDataApi)
  .factory('HttpCache', HttpCache)
  .service('BikeStationsData', BikeStationsData);
