'use strict';

/**
 * @ngInject
 */
function TracerFactory($log) {
  function trace(caller) {
    $log.log(caller.name);
  }
  return {
    trace: trace
  };
}

module.exports = TracerFactory;
