'use strict';

function toInt(value) {
  return parseInt(value, 10);
}

/**
 * @ngInject
 */
function BikeStationsDataViewFactory(DataView, BikeStationsData) {

  function getBikeStationsDataViewByResponse(response) {
    return response.data.opendata.answer.data.station;
  }

  function onMapBikeStationsDataView(station) {
    return {
      id: station.number,
      latitude: station.latitude,
      longitude: station.longitude,
      name: station.name,
      totalslots: toInt(station.slotsavailable) + toInt(station.bikesavailable),
      slotsavailable: toInt(station.slotsavailable),
      bikesavailable: toInt(station.bikesavailable),
      district: station.district
    };
  }

  return DataView(BikeStationsData, getBikeStationsDataViewByResponse, onMapBikeStationsDataView);
}

export default BikeStationsDataViewFactory;
