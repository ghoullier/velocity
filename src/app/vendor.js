'use strict';

require('./shiv/html5shiv.js');
require('./shiv/base64.js');
require('./shiv/json2.js');
require('./shiv/es5-shim.js');
require('./shiv/respond.js');

document.createElement('ng-include');
document.createElement('ng-pluralize');
document.createElement('ng-view');
document.createElement('ng:include');
document.createElement('ng:pluralize');
document.createElement('ng:view');


// Require vendors
require('../../vendor/angular/angular');
require('../../vendor/angular-resource/angular-resource');
require('../../vendor/angular-route/angular-route');
