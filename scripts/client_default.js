var repeat = require('../lib/repeat');
var ErrorExit = require('../lib/error_exit');


/**
 * ### .start(name, report, mesh)
 *
 * @api public
 * @param {String} name
 * @param {MeshClient} report
 * @param {MeshClient} client
 *
 */

module.exports.start = function(name, report, client) {

  repeat(10, function() {

    // return promise

  })

  .then(function() {

    // report to marshal

    stat = {};
    return report.exchange.controller.minionUpdate(name, stat)

  })

  .then(function() {

    // return repeat(/*....*/)

    // Report done, with final result

    var doneResult = {};
    return report.exchange.controller.minionDone(name, doneResult);

  })

  .then(function() {

    process.exit(0);

  })

  .catch(ErrorExit(name, report));

}
