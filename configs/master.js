
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'master',

  modules: {
    'controller': {
      path: 'controller.Master'
    }
  },

  components: {
    'controller': {
      accessLevel: 'mesh'
    }
  },

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.MASTER_ADDRESS,
    port: process.env.MASTER_PORT,
  },

  endpoints: {
    'secure': {
      config: {
        host: process.env.SECURE_ADDRESS,
        port: process.env.SECURE_PORT,
        username: '_ADMIN',
        password: process.env.ADMIN_PASSWORD,
      }
    },

    'insecure': {
      config: {
        host: process.env.INSECURE_ADDRESS,
        port: process.env.INSECURE_PORT,
      }
    }
  },

}
