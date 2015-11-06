module.exports.error = function(e) {
  console.error(e.stack || e.message);
  process.exit(1);
}

module.exports.runMaster = function(www, master, secure, insecure) {

  // www - mesh node connected to internet
  // master - mesh node connected to private vlan - controls marshal
  // secure - mesh node connected to private vlan - secure server for minions to use
  // insecure - mesh node connected to private vlan - insecure server for minions to use

}

module.exports.runMarshal = function(marshal) {

}
