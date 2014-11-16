'use strict';

/**
 * @ngInject
 */
function Lines(LinesDataView) {
  // ViewModel
  var vm = this;

  // Interface

  vm.lines = [];
  vm.baseUrl = '';

  LinesDataView.get({
    size: 100
  }).then(function(data) {
    vm.baseUrl = data.baseurl;
    vm.lines = data.line;
  });
}

export default Lines;
