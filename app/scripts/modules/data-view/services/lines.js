'use strict';

/**
 * @ngInject
 */
function LinesViewDataFactory($q, DataView, LinesData) {
  return DataView(LinesData);
}

export default LinesViewDataFactory;
