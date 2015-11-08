var Promise = require('bluebird');

module.exports = function(count, fn) {

  return new Promise(function(resolve, reject) {

    console.log('repeat', count);

    // reject(new Error('XXX'));

    resolve();

  });

}
