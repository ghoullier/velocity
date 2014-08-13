DistanceService['$inject'] = ['trace'];
function DistanceService(trace) {
  function toFloat(value) {
    return parseFloat(str, 10);
  }
  function square(value) {
    return toFloat(value);
  }
  this.getAbsolute = function getAbsolute(from, to) {
    return Math.sqrt(square(to.longitude - from.longitude) + square(to.latitude - from.latitude));
  };
  this.comparator = function comparator(from, to) {
    return (from === to) ? 0 : (from < to) ? -1 : 1;
  };
}

ng.module('velocity.common')
  .service('Distance', DistanceService);
