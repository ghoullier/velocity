BikeStationsDirective['$inject'] = ['$log'];
function BikeStationsDirective($log) {
  return {
    restrict: 'E',
    scope: {},
    controller: BikeStationsController,
    controllerAs: 'ctrl',
    link: function link(scope, element, attrs) {
      scope.stations = [];
    },
    templateUrl: 'modules/home/directives/templates/bike-stations.html'
  };
}

BikeStationsController['$inject'] = ['$scope', 'BikesStationsViewData', 'trace'];
function BikeStationsController($scope, BikesStationsViewData, trace) {
  BikesStationsViewData.getBikeStations().then(function onGetBikeStations(stations) {
    trace(arguments);
    $scope.stations = stations;
  });
  $scope.selectedItems = [];
  $scope.mapZoom = 12;
  $scope.mapCenter = {
    "latitude":48.11231522486975,
    "longitude":-1.6686243808593515
  };
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
