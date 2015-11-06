var Promise = require('bluebird');

module.exports.error = function(e) {
  console.error(e.stack || e.message);
  process.exit(1);
}

module.exports.runGateway = function(www, master) {

  www.exchange.www.start(function() {});

  var controllerEvent = master.event.controller;

  Promise.all([

    controllerEvent.onAsync('marshal/created', function(data, meta) {

      console.log('marshal/created', data);

    }),

    controllerEvent.onAsync('marshal/destroyed', function(data, meta) {

      console.log('marshal/destroyed', data);

    }),

  ])

  .then(function() {

    return master.exchange.controller.start();

  })

}

module.exports.runSecure = function(server) {

}

module.exports.runInsecure = function(server) {

}

module.exports.runMarshal = function(marshal) {

  marshal.exchange.controller.start();

}
