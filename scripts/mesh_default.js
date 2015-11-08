module.exports.start = function(name, report, mesh) {

  setInterval(function() {

    stat = {};
    report.exchange.controller.minionUpdate(name, stat) // <-----------------------
    .then(function() {}).catch(function() {});

  }, 888);

  setTimeout(function() {

    mesh.stop()

    .then(function() {
      var result = {};
      return report.exchange.controller.minionDone(name, result); // <-----------------------
    })

    .then(function() {
      return report.stop();
    })

    .then(function() {
      process.exit(0);
    })

    .catch(function(e) {
      console.error('error stopping script', e);
      process.exit(1);
    })

  }, 5000);

};
