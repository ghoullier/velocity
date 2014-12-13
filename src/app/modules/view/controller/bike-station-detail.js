'use strict';

/**
 * @ngInject
 */
function BikeStationDetail($routeParams, BikeStationsDataView, Geolocation) {
  // ViewModel
  var vm = this;

  // Interface

  vm.station = {};
  vm.map = {};
  vm.options = {
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  vm.markers = [];
  vm.geolocalize = geolocalize;

  // Initialize

  BikeStationsDataView.getById($routeParams.id).then(function (station) {
    var position = new google.maps.LatLng(station.latitude, station.longitude);
    vm.station = station;
    vm.map.panTo(position);
    vm.markers.push(new google.maps.Marker({
      map: vm.map,
      position: position,
      icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png'
    }));
  });

  // Implementation

  function geolocalize() {
    Geolocation.getCurrentPosition().then(function onGetCurrentPosition(geoposition) {
      var coords = geoposition.coords;
      var center = new google.maps.LatLng(coords.latitude, coords.longitude);
      vm.map.setCenter(center);
      vm.markers.push(new google.maps.Marker({
        map: vm.map,
        position: center,
        icon: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png'
      }));
    });
  }
}

export default BikeStationDetail;
