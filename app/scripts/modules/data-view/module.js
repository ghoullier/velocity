'use strict';

import DataView from './services/data-view';
import BikeStationsDataView from './services/bike-stations';
import LinesDataView from './services/lines';

export default angular
  .module('velocity.data-view', [
    'velocity.data'
  ])
  .factory('DataView', DataView)
  .factory('BikeStationsDataView', BikeStationsDataView)
  .factory('LinesDataView', LinesDataView)
;
