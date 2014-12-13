'use strict';

/**
 * @ngInject
 */
function LinesViewDataFactory(DataView, LinesData) {
  return DataView(LinesData);
}

export default LinesViewDataFactory;
