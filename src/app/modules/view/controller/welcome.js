'use strict';

var pkg = require('../../../../../package');

/**
 * @ngInject
 */
function Welcome() {
  // ViewModel
  var vm = this;

  // Interface

  vm.appVersion = pkg.version;
}

export default Welcome;
