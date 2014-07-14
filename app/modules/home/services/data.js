BikesStationsData['$inject'] = ['$http', '$log', 'trace'];
function BikesStationsData($http, $log, trace) {
  var url = "http://data.keolis-rennes.com/json/?version=2.0&key=618UNE6MRZ1E43L&cmd=";

  function request(command) {
    return $http.get(url + command);
  }

  this.getBikeStations = function getBikeStations() {
    return request('getbikestations');
  };
}

ng.module('velocity.home')
  .service('BikesStationsData', BikesStationsData);
