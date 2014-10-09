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
  .config(require('./config/route'))
  .controller('NavigationController', require('./controller/navigation'))
  .controller('WelcomeController', require('./controller/welcome'))
  .controller('BikeStationsController', require('./controller/bike-stations'))
  .controller('BikeStationDetailController', require('./controller/bike-station-detail'))
  .controller('LinesController', require('./controller/lines'))
;
