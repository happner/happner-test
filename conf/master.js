
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
    secure: true,
    adminPassword: process.env.ADMIN_PASSWORD,
    // persist: true,
    host: process.env.MASTER_PUBLIC_ADDRESS,
    port: process.env.MASTER_PUBLIC_PORT,
  },

  components: {
    'www': {
      web: {
        routes: {
          static: 'static'
        }
      }
    }
  }

}
