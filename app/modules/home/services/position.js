Geoposition['$inject'] = ['$q', '$window', 'trace'];
function Geoposition($q, $window, trace) {

  this.getCurrent = function getCurrent() {
    var deferred = $q.defer();

    $window.navigator.geolocation.getCurrentPosition(deferred.resolve, deferred.reject);

    return deferred.promise;
  };
}

ng.module('velocity.home')
  .service('Geoposition', Geoposition);
