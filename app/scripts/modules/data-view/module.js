'use strict';

var DataViewFactory = require('./factory/data-view');
var BikeStationsDataViewFactory = require('./factory/bike-stations');
var LinesDataViewFactory = require('./factory/lines');

module.exports = angular
  .module('velocity.data-view', [
    'velocity.data'
  ])
  .factory('DataView', DataViewFactory)
  .factory('BikeStationsDataView', BikeStationsDataViewFactory)
  .factory('LinesDataView', LinesDataViewFactory);
