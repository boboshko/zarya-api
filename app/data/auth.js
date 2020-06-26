const basicAuth = require('express-basic-auth');

// Login and password to auth the requests
// Change that for your own values
const zaryaUsers = { yourSecretLogin: 'yourSecretPSWD' };

// HTTP client auth
exports.auth = basicAuth({
  users: zaryaUsers,

  // Browser auth by URL-request
  // Better keep a default value here
  challenge: false,
});
