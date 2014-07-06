ng.module('velocity.common')
  .service('trace', ['$log', traceService]);

/**
 * Trace Service
 * @param  {Object} $log
 * @return {ngService}
 */
function traceService($log) {
  function trace(args) {
    $log.log(args.callee.name, args);
  }
  return trace;
}
