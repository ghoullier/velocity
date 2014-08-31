'use strict';

/**
 * @ngInject
 */
function BikeStationDetailController($scope, $routeParams, BikeStationsViewData, Geolocation) {
  $scope.station = {};
  $scope.map = {};
  $scope.options = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  $scope.markers = [];
  BikeStationsViewData.getBikeStationById($routeParams.id).then(function (station) {
    var position = new google.maps.LatLng(station.latitude, station.longitude);
    $scope.station = station;
    $scope.map.panTo(position);
    $scope.markers.push(new google.maps.Marker({
      map: $scope.map,
      position: position,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png'
    }));
  });
  function geolocalize() {
    Geolocation.getCurrentPosition().then(function onGetCurrentPosition(geoposition) {
      var coords = geoposition.coords;
      var center = new google.maps.LatLng(coords.latitude, coords.longitude);
      $scope.map.setCenter(center);
      $scope.markers.push(new google.maps.Marker({
        map: $scope.map,
        position: center,
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png'
      }));
    });
  }
  this.geolocalize = geolocalize;
}

module.exports = BikeStationDetailController;
