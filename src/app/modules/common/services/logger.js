'use strict';

/**
* @ngInject
*/
function Logger($log) {
  // Interface
  var service = {
    trace: trace
  };
  return service;

  // Implementation

  function trace(caller) {
    $log.log(caller.name);
  }
}

export default Logger;
