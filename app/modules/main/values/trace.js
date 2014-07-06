var module = ng.module('velocity.main');
module.service('trace', ['$log', function($log) {
  function trace(args) {
    $log.log(args.callee.name, args);
  }
  return trace;
}]);
