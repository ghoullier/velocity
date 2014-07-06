DataService.$inject = ['$http', '$log', 'trace'];
function DataService($http, $log, trace) {
  var url = "http://data.keolis-rennes.com/json/?version=2.0&key=618UNE6MRZ1E43L&cmd=";

  function request(command) {
    return $http.get(url + command);
  }

  function getBikeStations() {
    return request('getbikestations');
  }

  return {
    getBikeStations: getBikeStations
  };
}

ng.module('velocity.home')
  .factory('DataService', DataService);
