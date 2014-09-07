'use strict';

/**
 * @ngInject
 */
function ApiServiceFactory($http, HttpCache, OpenDataApi) {
  var defautParams = {
      version: OpenDataApi.version,
      key: OpenDataApi.key
    };
  function getQueryParams(command, args) {
    var params = angular.extend({}, defautParams, {
      cmd: command
    });
    angular.forEach(args, function onEachArg(value, key) {
      params['param[' + key + ']'] = value;
    });
    return params;
  }
  return function ApiService(command) {
    return {
      get: function(args) {
        return $http({
          url: OpenDataApi.url,
          method: 'GET',
          params: getQueryParams(command, args),
          cache: HttpCache
        });
      }
    };
  };
}

module.exports = ApiServiceFactory;
