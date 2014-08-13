'use strict';

// Require vendors
require('../../vendor/angular/angular');

// Require application modules
var common = require('./modules/common/module');
var ui = require('./modules/ui/module');

angular.module('demo', [
  common.name,
  ui.name
]);
