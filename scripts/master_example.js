
/**
 * ### .start(scriptName, $happn, opts)
 *
 * @api public
 * @param {String} scriptName
 * @param {ComponentInstance} $happn master/controller
 * @param {Object} opts
 *
 * #### call from browser console
 *
 * > action('controller.runScript', 'example', {opts: 1});
 *
 */

var Promise = require('bluebird');

module.exports.start = function(scriptName, $happn, opts) {

  $happn.log.info('running script \'%s\', opts: \'%j\'', scriptName, opts);

  /**
   *
   *  1. Prepare state
   *     -------------
   *
   *     Target mesh nodes may need some state assembly in preparation for tests.
   * 
   *     eg.  create test users/groups/permissions at $happn.exchange.secure
   * 
   *
   */


  // QUICK HACK: get stats from the 2 target mesh nodes at interval
  //             could call existing system components there

  var stop = false;

  var interval = setInterval(function() {

    if (stop) {
      clearInterval(interval);
      return;
    }

    Promise.all([

      // node_modules/controller/lib/target.js
      $happn.exchange.secure.controller.getStats(),
      $happn.exchange.insecure.controller.getStats(),

    ])

    .spread(function(secureStats, insecureStats) {

      // ssh test@test1.happner.net tail -f /var/log/test1.happner.net/gateway-1.log
      console.log('STATS from %s', 'secure', secureStats);
      console.log('STATS from %s', 'insecure', insecureStats);
    })

    .catch(function(e) {
      $happn.log.error('failed to get stats', e);
    });


  }, 1000);



  // QUICK HACK: pretend that script takes 10 seconds

  setTimeout(function() {stop = true}, 10000);




  /**
   *
   * 2. Spawn test minions
   *    ------------------
   *
   *    $happn is the master/controller ComponentInstance and has
   *    see: node_modules/controller/lib/master
   *
   */   

  $happn.exchange.controller.spawnMinions(5, {

    type: 'client',
    script: 'default',
    endpoint: 'insecure',
    config: 'default'

  }).then(function(){}).catch(function(){})




  /**
   * 
   * 3. Finished
   *    --------
   *
   *    todo
   *
   */

}

