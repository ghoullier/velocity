'use strict';

var BikeStationsViewDataService = require('./service/bike-stations');
var LinesViewDataService = require('./service/lines');

module.exports = angular
  .module('velocity.data-view', [
    'velocity.data'
  ])
  .service('BikeStationsViewData', BikeStationsViewDataService)
  .service('LinesViewData', LinesViewDataService);
