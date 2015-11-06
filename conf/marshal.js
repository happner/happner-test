
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'marshal',

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
      }
    }
  },

}
