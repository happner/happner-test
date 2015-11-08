try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports.createConfig = function(name, endpointConfig, user) {

  var endpoints = {};
  endpoints[endpointConfig.name] = {
    config: endpointConfig.config
  }
  
  return {
    name: name,
    datalayer: {
      host: '127.0.0.1',
      port: 0,
    },
    endpoints: endpoints,
  }

}
