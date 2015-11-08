var Promise = require('bluebird');

module.exports = function(count, fn) {

  return new Promise(function(resolve, reject) {

    var recurse = function() {

      if (--count <= 0) return resolve();

      var result = fn();

      if (!result) return recurse();

      if (typeof result.then != 'function') return recurse();

      return result.then(recurse).catch(reject)

    }

    recurse();

  });

}
