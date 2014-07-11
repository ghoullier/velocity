BikeStationsDirective.$inject = ['$log'];
function BikeStationsDirective($log) {
  return {
    require: '^velocityTabs',
    restrict: 'E',
    scope: {
      title: '@'
    },
    controller: BikeStationsController,
    controllerAs: 'ctrl',
    link: function link(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
      scope.stations = [];
    },
    templateUrl: 'modules/home/directives/templates/bike-stations.html'
  };
}

BikeStationsController.$inject = ['$scope', 'DataService', 'trace'];
function BikeStationsController($scope, DataService, trace) {
  DataService.getBikeStations().success(function onGetBikeStations(response) {
    trace(arguments);
    var stations = response.opendata.answer.data.station;
    $scope.stations = stations.map(function (station) {
      return {
        id: station.number,
        latitude: station.latitude,
        longitude: station.longitude,
        showWindow: true,
        title: station.name,
        slotsavailable: station.slotsavailable,
        bikesavailable: station.bikesavailable,
        district: station.district
      };
    });
  });
  $scope.selectedItems = [];
  $scope.mapZoom = 12;
  $scope.mapCenter = {"latitude":48.11231522486975,"longitude":-1.6686243808593515};
  $scope.gridOptions = {
    data: 'stations',
    multiSelect: true,
    selectedItems: $scope.selectedItems,
    columnDefs: [{
        field: 'id',
        displayName: 'Id'
      }, {
        field: 'title',
        displayName: 'Title'
      }, {
        field: 'slotsavailable',
        displayName: 'Places disponibles'
      }, {
        field: 'bikesavailable',
        displayName: 'Vélos disponibles'
      }, {
        field: 'district',
        displayName: 'District'
      }
    ]
  };
}

ng.module('velocity.home')
  .directive('velocityBikeStations', BikeStationsDirective);
