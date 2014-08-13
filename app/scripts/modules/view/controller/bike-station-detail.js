'use strict';

/**
 * @ngInject
 */
function BikeStationDetailController($scope, $routeParams, BikeStationsViewData, Geolocation) {
  $scope.station = {};
  $scope.map = {};
  $scope.options = {
    center: new google.maps.LatLng(48.111, -1.695),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  $scope.markers = [];
  BikeStationsViewData.getBikeStationById($routeParams.id).then(function (station) {
    $scope.station = station;
    var position = new google.maps.LatLng(station.latitude, station.longitude);
    $scope.map.panTo(position);
    $scope.markers.push(new google.maps.Marker({
      map: $scope.map,
      position: position
    }));
  });
  Geolocation.getCurrentPosition().then(function (geoposition) {
    var coords = geoposition.coords;
    var center = new google.maps.LatLng(coords.latitude, coords.longitude);
    $scope.map.setCenter(center);
  });
}

module.exports = BikeStationDetailController;
