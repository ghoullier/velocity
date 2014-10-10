'use strict';

module.exports = angular
  .module('velocity.common', [])
  .provider('CacheStorage', require('./providers/cache-storage'))
  .factory('Geolocation', require('./services/geolocation'))
  .factory('Logger', require('./services/logger'))
;
