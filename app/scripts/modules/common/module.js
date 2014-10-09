'use strict';

module.exports = angular
  .module('velocity.common', [])
  .provider('CacheStorage', require('./provider/cache-storage'))
  .service('Geolocation', require('./service/geolocation'))
  .factory('Tracer', require('./factory/tracer'))
;
