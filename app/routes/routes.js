const express = require('express');
const config = require('../config/config');
const text = require('../config/text');
const sensorsData = require('../controllers/sensors');
const auth = require('../data/auth');

// Routing module init
const router = express.Router();

// Path to the home page
router.get(config.urlServer, function(req, res) {
  res.send(text.server);
});

// All entries (GET)
router.get(config.urlRequest, auth.auth, sensorsData.all);

// Find the the entry by ID (GET)
router.get(config.urlRequest+config.urlID, auth.auth, sensorsData.findById);

// Create an entry (POST)
router.post(config.urlRequest, auth.auth, sensorsData.create);

// Update an entry by ID (PUT)
router.put(config.urlRequest+config.urlID, auth.auth, sensorsData.update);

// Delete an entry by ID (Delete)
router.delete(config.urlRequest+config.urlID, auth.auth, sensorsData.delete);

// Export the router
module.exports = router;
