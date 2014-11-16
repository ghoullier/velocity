'use strict';

/**
 * @ngInject
 */
function LinesViewDataFactory($q, DataView, LinesData) {
  return DataView(LinesData);
}

module.exports = LinesViewDataFactory;
