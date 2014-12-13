'use strict';

import CacheConfig from './config/cache';
import OpenDataApi from './constant/api';
import HttpCache from './services/http-cache';
import ApiService from './services/api-service';
import BikeDistrictsData from './services/bike-districts';
import BikeStationsData from './services/bike-stations';
import LinesData from './services/lines';

export default angular
  .module('velocity.data', [
  'ngResource',
  'velocity.common'
  ])
  .config(CacheConfig)
  .constant('OpenDataApi', OpenDataApi)
  .factory('HttpCache', HttpCache)
  .factory('ApiService', ApiService)
  .factory('BikeDistrictsData', BikeDistrictsData)
  .factory('BikeStationsData', BikeStationsData)
  .factory('LinesData', LinesData)
;
