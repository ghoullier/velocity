'use strict';

import CacheStorage from './providers/cache-storage';
import Geolocation from './services/geolocation';
import Logger from './services/logger';

export default angular
  .module('velocity.common', [])
  .provider('CacheStorage', CacheStorage)
  .factory('Geolocation', Geolocation)
  .factory('Logger', Logger)
;
