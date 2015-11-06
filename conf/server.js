
try {
  require('dotenv-safe').load();
} catch (e) {
  console.error(e.message);
  console.error('\nsuggestion: copy and amend .env.sample to .env');
  process.exit(1);
}

module.exports.secure = {
  name: 'secure',

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.SECURE_ADDRESS,
    port: process.env.SECURE_PORT,
  },
};

module.exports.insecure = {
  name: 'insecure',

  datalayer: {
    persist: true,
    // secure: true,
    // adminPassword: process.env.ADMIN_PASSWORD,
    host: process.env.INSECURE_ADDRESS,
    port: process.env.INSECURE_PORT,
  },
};

