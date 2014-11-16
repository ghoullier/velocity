'use strict';

/**
 * @ngInject
 */
function Geolocation($q, $window) {
  // Interface

  var service = {
    getCurrentPosition: getCurrentPosition
  };
  return service;

  // Implementation

  function getCurrentPosition() {
    var deferred = $q.defer();

    $window.navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);

    return deferred.promise;
  }
}

export default Geolocation;
