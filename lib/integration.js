module.exports.error = function(e) {
  console.error(e.stack || e.message);
  process.exit(1);
}

module.exports.runGateway = function(www, master) {

}

module.exports.runSecure = function(server) {

}

module.exports.runInsecure = function(server) {

}

module.exports.runMarshal = function(marshal) {

}
