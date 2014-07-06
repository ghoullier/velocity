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
    $scope.stations = response.opendata.answer.data.station;
  });
}

ng.module('velocity.home')
  .directive('velocityBikeStations', BikeStationsDirective);
