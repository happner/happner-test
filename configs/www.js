
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'www',

  components: {
    'www': {
      accessLevel: 'mesh',
      web: {
        routes: {
          static: 'static'
        }
      }
    }
  },

  datalayer: {
    persist: true,
    secure: true,
    adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.WWW_ADDRESS,
    port: process.env.WWW_PORT,
  },

}
