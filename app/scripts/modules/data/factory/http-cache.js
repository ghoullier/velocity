'use strict';

/**
 * @ngInject
 */
function HttpCacheFactory($cacheFactory) {
  return $cacheFactory('velocity:http-cache');
}

module.exports = HttpCacheFactory;
