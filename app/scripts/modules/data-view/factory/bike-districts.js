'use strict';

/**
 * @ngInject
 */
function BikeDistrictsViewDataFactory($q, DataView, BikeDistrictsData) {
  return DataView(BikeDistrictsData);
}

module.exports = BikeDistrictsViewDataFactory;
