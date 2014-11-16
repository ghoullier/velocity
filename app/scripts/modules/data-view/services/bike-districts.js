'use strict';

/**
 * @ngInject
 */
function BikeDistrictsViewDataFactory($q, DataView, BikeDistrictsData) {
  return DataView(BikeDistrictsData);
}

export default BikeDistrictsViewDataFactory;
