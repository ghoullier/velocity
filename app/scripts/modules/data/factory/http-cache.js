'use strict';

/**
 * @ngInject
 */
function HttpCacheFactory(CacheStorage) {
  var cache = CacheStorage;
  return cache('velocity:http-cache');
}

module.exports = HttpCacheFactory;
