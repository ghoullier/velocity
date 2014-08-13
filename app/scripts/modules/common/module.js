'use strict';

var TracerFactory = require('./factory/tracer');

module.exports = angular
  .module('velocity.common', [])
  .factory('Tracer', TracerFactory);
