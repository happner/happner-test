
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'master',

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.MASTER_PRIVATE_ADDRESS,
    port: process.env.MASTER_PRIVATE_PORT,
  },

  endpoints: {
    'marshal': {
      config: {
        host: process.env.MARSHAL_PRIVATE_ADDRESS,
        port: process.env.MARSHAL_PRIVATE_PORT,
      }
    }
  },

}
