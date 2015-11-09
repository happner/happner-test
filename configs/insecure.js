
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'insecure',

  modules: {
    'controller': {
      path: 'controller.Target'
    }
  },

  components: {
    'controller': {
      accessLevel: 'mesh',
    }
  },

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.INSECURE_ADDRESS,
    port: process.env.INSECURE_PORT,
  },
  
};

