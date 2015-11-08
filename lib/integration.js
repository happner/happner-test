var Promise = require('bluebird');

module.exports.error = function(e) {
  console.error(e.stack || e.message);
  process.exit(1);
}

module.exports.runGateway = function(www, master) {

  // master mesh as parameter to www compnent start method

  www.exchange.www.start(master, function() {});

  var controllerEvent = master.event.controller;

  Promise.all([

    controllerEvent.onAsync('marshal/created', function(data, meta) {

      console.log('marshal/created', data);

    }),

    controllerEvent.onAsync('marshal/destroyed', function(data, meta) {

      console.log('marshal/destroyed', data);

    }),

    // TODO: There are more event coming from the marhals that
    //       the master could proxy out here for browser... 

  ])

  .then(function() {

    // Pass www mesh to master/controller start.

    return master.exchange.controller.start(www);

  });

}

module.exports.runSecure = function(server) {

}

module.exports.runInsecure = function(server) {

}

module.exports.runMarshal = function(marshal) {

  marshal.exchange.controller.start();

}
