'use strict';

/**
 * @ngInject
 */
function HttpCacheFactory(CacheStorage) {
  return CacheStorage('velocity:http-cache');
}

module.exports = HttpCacheFactory;
