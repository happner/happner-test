
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and ammend .env.sample to .env');
  process.exit(1);
}

module.exports = {

  name: 'master',
  host: process.env.MASTER_PUBLIC_ADDRESS,
  port: process.env.MASTER_PUBLIC_PORT,

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