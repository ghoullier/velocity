'use strict';

// Require vendors
require('../../vendor/angular/angular');
require('../../vendor/angular-resource/angular-resource');
require('../../vendor/angular-route/angular-route');
require('../../vendor/angular-touch/angular-touch');

// Require application modules
var common = require('./modules/common/module');
var data = require('./modules/data/module');
var viewData = require('./modules/view-data/module');
var ui = require('./modules/ui/module');

angular.module('velocity', [
  common.name,
  data.name,
  viewData.name,
  ui.name
]);
