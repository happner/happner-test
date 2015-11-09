var repeat = require('../lib/repeat');
var ErrorExit = require('../lib/error_exit');


/**
 * ### .start(name, report, mesh)
 *
 * @api public
 * @param {String} name
 * @param {MeshClient} report
 * @param {null} client
 * @param {Object} opts
 *
 * #### call from browser console
 *
 * To run this script on none minion connecting to secure/insecure mesh.
 *
 * > action('controller.spawnMinions', 1, {type: 'none', script: 'default', endpoint: 'insecure'});
 * > action('controller.spawnMinions', 1, {type: 'none', script: 'default', endpoint: 'secure', user: {username: '', password: ''} });
 *
 */
module.exports.start = function(name, report, client, opts) {

  repeat(10, function() {
    // return promise
  })

  .then(function() {
    stat = {};
    return report.exchange.controller.minionUpdate(name, stat)
  })

  .then(function() {
    var doneResult = {};
    return report.exchange.controller.minionDone(name, doneResult);
  })

  .then(function() {
    process.exit(0);
  })

  .catch(ErrorExit(name, report));

}
