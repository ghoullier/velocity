'use strict';

function CacheStorageProvider() {
  var provider = this;
  var storage = null;

  // Interface
  provider.$get = $get;
  provider.setStrategy = setStrategy;

  // Implementation

  /**
   * @param {DomStorage} strategy
   */
  function setStrategy(strategy) {
    storage = strategy;
  }

  /**
   * @ngInject
   */
  function $get($timeout, $window) {
    // Precondition
    if (null === storage) {
      this.setStrategy($window.localStorage);
    }

    var storageId = 'ng:storage';
    var stores = storage.getItem(storageId) ? JSON.parse(storage.getItem(storageId)) : {};
    var caches = {};
    var waitForPersist = false;

    /**
     * Persist all stores in current storage
     * @return {void}
     */
    function persist() {
      // Use semaphore, to ensure unicity
      if (!waitForPersist) {
        waitForPersist = true;
        // Persist storage is an heavy operation, defer persit when all js operation are done
        $timeout(function persistAsync() {
          storage.setItem(storageId, JSON.stringify(stores));
          waitForPersist = false;
        }, 0);
      }
    }

    function cacheFactory(cacheId) {
      var data = (cacheId in stores) ? stores[cacheId] : {};
      var stats = angular.extend({}, {id: cacheId});

      stores[cacheId] = data;

      // Implemente same internal API as $cacheFactory
      var cache = {

        put: function(key, value) {
          data[key] = value;
          persist();
          return value;
        },

        get: function(key) {
          return data[key];
        },

        remove: function(key) {
          delete data[key];
          persist();
        },

        removeAll: function() {
          data = {};
          persist();
        },

        destroy: function() {
          data = null;
          stats = null;
          delete caches[cacheId];
          delete stores[cacheId];
          persist();
        },

        info: function() {
          return angular.extend({}, stats);
        }
      };

      caches[cacheId] = cache;

      return cache;
    }

    cacheFactory.info = function() {
      var info = {};
      angular.forEach(caches, function(cache, cacheId) {
        info[cacheId] = cache.info();
      });
      return info;
    };

    cacheFactory.get = function(cacheId) {
      return caches[cacheId];
    };

    return cacheFactory;
  }
}

export default CacheStorageProvider;
