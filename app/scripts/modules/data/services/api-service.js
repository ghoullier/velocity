'use strict';

/**
 * @ngInject
 */
function ApiServiceFactory($http, HttpCache, OpenDataApi) {
  // Interface
  return ApiService;

  // Implementation

  function ApiService(command) {
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
  }

  function getQueryParams(command, args) {
    var defautParams = {
      version: OpenDataApi.version,
      key: OpenDataApi.key
    };
    var params = angular.extend({}, defautParams, {
      cmd: command
    });
    angular.forEach(args, function onEachArg(value, key) {
      params['param[' + key + ']'] = value;
    });
    return params;
  }
}

module.exports = ApiServiceFactory;
