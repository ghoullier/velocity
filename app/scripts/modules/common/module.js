'use strict';

var TracerFactory = require('./factory/tracer');

module.exports = angular
  .module('demo.common', [])
  .factory('Tracer', TracerFactory);
