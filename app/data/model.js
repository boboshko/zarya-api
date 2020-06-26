const mongoose = require('mongoose');
const config = require('../config/config');

// Creating validation scheme for a received data
const { Schema } = mongoose;

function getCurrentTimestamp() {
  return Math.floor(Date.now() / 1000);
}

// Validation scheme for a received data
const SensorsSchema = new Schema({
  station_id: {
    type: Number,
    required: true,
    default: null,
  },
  created_at: {
    type: Number,
    required: true,
    default: getCurrentTimestamp,
  },
  date_count: {
    type: Number,
    required: true,
    default: null,
  },
  temperature: {
    type: Number,
    required: true,
    default: null,
  },
  pressure: {
    type: Number,
    required: true,
    default: null,
  },
});

// Registering validation scheme as a model
mongoose.model(config.zaryaCollectionName, SensorsSchema);
