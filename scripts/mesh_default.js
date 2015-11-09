var repeat = require('../lib/repeat');
var ErrorExit = require('../lib/error_exit');


/**
 * ### .start(name, report, mesh)
 *
 * @api public
 * @param {String} name
 * @param {MeshClient} report
 * @param {Mesh} mesh
 *
 * #### call from browser console
 *
 * To run this script on minion connecting to secure/insecure mesh.
 *
 * > action('controller.spawnMinions', 1, {type: 'mesh', script: 'default', endpoint: 'insecure'});
 * > action('controller.spawnMinions', 1, {type: 'mesh', script: 'default', endpoint: 'secure', user: {username: '', password: ''} });
 */

module.exports.start = function(name, report, mesh) {


  repeat(10, function() {

    // repeat 10 times, one at a time

    // NB: will only do one at a time if a promise is returned

    return mesh.exchange.default.test({a: 1});

  })

  .then(function() {

    // report to marshal

    stat = {};
    return report.exchange.controller.minionUpdate(name, stat)

  })

  .then(function() {

    // must return, it's the promise that pends the next '.then'

    return repeat(10, function() {

      // repeat 10 times, one at a time

      return mesh.exchange.default.test({a: 2});

    })

  })

  .then(function() {

    newstat = {};
    return report.exchange.controller.minionUpdate(name, newstat)

  })

  .then(function() {

    // Report done, with final result

    var doneResult = {};
    return report.exchange.controller.minionDone(name, doneResult);

  })

  .then(function() {

    process.exit(0);

  })

  // Catch and report error and exit

  .catch(ErrorExit(name, report));

};
