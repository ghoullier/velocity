'use strict';

// Require vendors
require('../../vendor/angular/angular');
require('../../vendor/angular-resource/angular-resource');
require('../../vendor/angular-route/angular-route');
require('../../vendor/angular-touch/angular-touch');
require('../../vendor/angular-ui-utils/ui-utils');
require('../../vendor/angular-ui-map/ui-map');

// Require application modules
var common = require('./modules/common/module');
var data = require('./modules/data/module');
var viewData = require('./modules/view-data/module');
var view = require('./modules/view/module');

angular.module('velocity', [
  common.name,
  data.name,
  viewData.name,
  view.name
]);
