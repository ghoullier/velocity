'use strict';

/**
 * @ngInject
 */
function HttpCache(CacheStorage) {
  return CacheStorage('velocity:http-cache');
}

module.exports = HttpCache;
