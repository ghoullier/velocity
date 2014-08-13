'use strict';

/**
 * @ngInject
 */
function BikeStationDetailController($scope, $routeParams, BikeStationsViewData) {
  $scope.station = {};
  $scope.map = {};
  $scope.options = {
    center: new google.maps.LatLng(35.784, -78.670),
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
}

module.exports = BikeStationDetailController;
