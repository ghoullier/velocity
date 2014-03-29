function Deferred() {
  var deferred,
      p = new Promise(function(resolve, reject) {
        dfd = {
          resolve: resolve,
          reject: reject
        };
      });

  return {
    promise: p,
    resolve: deferred.resolve.bind(deferred),
    reject: deferred.reject.bind(deferred)
  };
};

module.exports = Deferred;
