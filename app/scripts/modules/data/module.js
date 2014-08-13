'use strict';

var OpenDataApi = require('./constant/api');
var BikeStationsData = require('./service/bike-stations');

module.exports = angular
  .module('velocity.data', ['ngResource'])
  .constant('OpenDataApi', OpenDataApi)
  .service('BikeStationsData', BikeStationsData);
