'use strict';

import RoutingConfig from './config/routing';
import Navigation from './controller/navigation';
import Welcome from './controller/welcome';
import BikeStations from './controller/bike-stations';
import BikeStationDetail from './controller/bike-station-detail';
import Lines from './controller/lines';

export default angular
  .module('velocity.view', [
    'ngRoute',
    'velocity.common',
    'velocity.data-view',
    'velocity.templates'
  ])
  .config(RoutingConfig)
  .controller('Navigation', Navigation)
  .controller('Welcome', Welcome)
  .controller('BikeStations', BikeStations)
  .controller('Lines', Lines)
;
