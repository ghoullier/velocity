'use strict';

var CacheStorageProvider = require('./provider/cache-storage');
var GeolocationService = require('./service/geolocation');
var TracerFactory = require('./factory/tracer');

module.exports = angular
  .module('velocity.common', [])
  .provider('CacheStorage', CacheStorageProvider)
  .service('Geolocation', GeolocationService)
  .factory('Tracer', TracerFactory);
