'use strict';

var BikeStationsViewData = require('./service/bike-stations');

module.exports = angular
  .module('velocity.view-data', [
    'velocity.data'
  ])
  .service('BikeStationsViewData', BikeStationsViewData);
