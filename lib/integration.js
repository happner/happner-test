var Promise = require('bluebird');

module.exports.error = function(e) {
  console.error(e.stack || e.message);
  process.exit(1);
}

module.exports.runGateway = function(www, master) {

  // www and master are separate mesh nodes because www listens
  // on public interface (internet) and master listens on private lan.
  // --> would be nice to have more than one listening datalayer

  // master mesh as parameter to www compnent start method so that
  // www can call methods on master.

  www.exchange.www.start(master, function() {});

  var controllerEvent = master.event.controller;

  return Promise.all([

    controllerEvent.onAsync('marshal/created', function(data, meta) {

      console.log('marshal/created', data);

    }),

    controllerEvent.onAsync('marshal/destroyed', function(data, meta) {

      console.log('marshal/destroyed', data);

    }),

    // TODO: There are more events coming from the marhals that
    //       the master could proxy out here for browser... 

  ])

  .then(function() {

    // Pass www mesh to master/controller start for interval emit update to browser

    return master.exchange.controller.start(www);

  });

}

module.exports.runSecure = function(server) {

}

module.exports.runInsecure = function(server) {

}

module.exports.runMarshal = function(marshal) {

  return marshal.exchange.controller.start();

}
