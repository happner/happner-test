var repeat = require('../lib/repeat');
var error = require('../lib/error');


/**
 * ### .start(name, report, mesh)
 *
 * @api public
 * @param {String} name
 * @param {MeshClient} report
 * @param {Mesh} mesh
 *
 */

module.exports.start = function(name, report, mesh) {


  repeat(10, function() {

    // repeat 10 times one at a time

  })

  .then(function() {

    // report to marshal

    stat = {};
    report.exchange.controller.minionUpdate(name, stat)

  })

  .then(function() {

    // must return, it's the promise that pends the next '.then'

    return repeat(10, function() {

      // repeat 10 times one at a time

    })

  })

  .then(function() {

    newstat = {};
    report.exchange.controller.minionUpdate(name, newstat)

  })

  .then(function() {

    // Report done, with final result

    var doneResult = {};
    return report.exchange.controller.minionDone(name, doneResult);

  })

  .then(function() {

    process.exit(0);

  })

  // Catch and report error

  .catch(error(name, report))

};
