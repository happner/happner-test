module.exports = function(name, report) {

  return function(e) {

    var ee = {};
    ee.name = e.name;
    ee.message = e.message;
    Object.keys(e).forEach(function(key) {
      ee[key] = e[key];
    });

    try {
      report.exchange.controller.minionError(name, ee)

      .then(function() {
        process.exit(1);
      })

      .catch(function (e){
        console.error(e);
        process.exit(1);
      })

    } catch (ee) {
      process.exit(1);
    }

  }

}
