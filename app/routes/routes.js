const express = require('express');
const sensorsData = require('../controllers/sensors');
const auth = require('../data/auth');

// Routing module init
const router = express.Router();

// Path to the home page
router.get('/zarya', (req, res) => {
  res.send('Zarya API is running');
});

// All entries (GET)
router.get('/zarya/read/all', auth.auth, sensorsData.all);

// Get the last document (GET)
router.get('/zarya/read/last', auth.auth, sensorsData.last);

// Find the the entry by ID (GET)
router.get('/zarya/read/:id', auth.auth, sensorsData.findById);

// Create an entry (POST)
router.post('/zarya/add', auth.auth, sensorsData.create);

// Update an entry by ID (PUT)
router.put('/zarya/edit/:id', auth.auth, sensorsData.update);

// Delete an entry by ID (DELETE)
router.delete('/zarya/delete/:id', auth.auth, sensorsData.delete);

// Export the router
module.exports = router;
