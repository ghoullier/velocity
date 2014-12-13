'use strict';

/**
 * @ngInject
 */
function HttpCache(CacheStorage) {
  return CacheStorage('velocity:http-cache');
}

export default HttpCache;
