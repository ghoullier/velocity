'use strict';

/**
 * @ngInject
 */
function LinesViewDataService($q, LinesData) {

  this.getLines = function getLines() {
    var deferred = $q.defer();

    function onGetLinesWithSuccess(response) {
      deferred.resolve(response.data.opendata.answer.data);
    }

    LinesData
      .getLines()
      .then(onGetLinesWithSuccess, deferred.reject);

    return deferred.promise;
  };

  this.getLinesById = function getLinesById(id) {
    var deferred = $q.defer();

    function onGetLines(lines) {
      lines.forEach(function (line) {
        if (id === line.id) {
          deferred.resolve(line);
        }
      });
    }

    this.getBikeStations().then(onGetLines, deferred.reject);

    return deferred.promise;
  };
}

module.exports = LinesViewDataService;
