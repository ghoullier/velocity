'use strict';

/**
 * @ngInject
 */
function CacheConfig($windowProvider, CacheStorageProvider) {
  var $window = $windowProvider.$get();
  CacheStorageProvider.setStrategy($window.sessionStorage);
}

module.exports = CacheConfig;
