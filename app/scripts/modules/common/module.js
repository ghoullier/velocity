'use strict';

var GeolocationService = require('./service/geolocation');
var TracerFactory = require('./factory/tracer');

module.exports = angular
  .module('velocity.common', [])
  .service('Geolocation', GeolocationService)
  .factory('Tracer', TracerFactory);
