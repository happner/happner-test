
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  // name: 'marshal', // allow random name

  modules: {
    'controller': {
      path: 'controller.Marshal'
    }
  },

  components: {
    'controller': {
      accessLevel: 'mesh',

      // master: 'endpoint/componentName'
      // (point to remote controller.Server instance)
      master: 'master/controller'
    }
  },

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.MARSHAL_ADDRESS,
    port: process.env.MARSHAL_PORT,
  },

  endpoints: {
    'master': {
      config: {
        host: process.env.MASTER_ADDRESS,
        port: process.env.MASTER_PORT,
        username: '_ADMIN',
        password: process.env.ADMIN_PASSWORD,
      }
    }
  },

}
