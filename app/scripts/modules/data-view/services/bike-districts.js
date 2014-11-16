'use strict';

/**
 * @ngInject
 */
function BikeDistrictsViewDataFactory(DataView, BikeDistrictsData) {
  return DataView(BikeDistrictsData);
}

export default BikeDistrictsViewDataFactory;
