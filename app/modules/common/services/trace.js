TraceService.$inject = ['$log'];
function TraceService($log) {
  function trace(args) {
    $log.log(args.callee.name, args);
  }
  return trace;
}

ng.module('velocity.common')
  .factory('trace', TraceService);
