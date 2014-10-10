'use strict';

module.exports = angular
  .module('velocity.view', [
    'ngRoute',
    'ngTouch',
    'ui.map',
    'velocity.common',
    'velocity.data-view',
    'velocity.templates'
  ])
  .config(require('./config/routing'))
  .controller('Navigation', require('./controller/navigation'))
  .controller('Welcome', require('./controller/welcome'))
  .controller('BikeStations', require('./controller/bike-stations'))
  .controller('BikeStationDetail', require('./controller/bike-station-detail'))
  .controller('Lines', require('./controller/lines'))
;
