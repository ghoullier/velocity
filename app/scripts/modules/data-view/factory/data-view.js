'use strict';

function getDataViewByResponseDefault(response) {
  return response.data.opendata.answer.data;
}

function onMapDataViewDefault(data) {
  return data;
}

function GenericDataViewService($q, DataService, getDataViewByResponse, onMapDataView) {

  this.get = function get() {
    var deferred = $q.defer();

    function onGetWithSuccess(response) {
      var data = (getDataViewByResponse || getDataViewByResponseDefault)(response);
      if (angular.isArray(data)) {
        data = data.map((onMapDataView || onMapDataViewDefault));
      }
      deferred.resolve(data);
    }

    DataService.get().then(onGetWithSuccess, deferred.reject);

    return deferred.promise;
  };

  this.getById = function getById(id) {
    var deferred = $q.defer();

    function onGet(data) {
      data.forEach(function (item) {
        if (id === item.id) {
          deferred.resolve(item);
        }
      });
      deferred.reject();
    }

    this.get().then(onGet, deferred.reject);

    return deferred.promise;
  };
}

/**
 * @ngInject
 */
function DataViewServiceFactory($q) {

  return function factory(DataService, getDataViewByResponse, onMapDataView) {
    return new GenericDataViewService($q, DataService, getDataViewByResponse, onMapDataView);
  };
}

module.exports = DataViewServiceFactory;
