const mongoose = require('mongoose');
const config = require('../config/config');

// Creating validation scheme for a received data
const Schema = mongoose.Schema;

// Validation scheme for a received data
const SensorsSchema = new Schema({
  Date: {
    type: Date,
    required: true,
    default: null
  },
  City: {
    type: String,
    required: true,
    default: null
  },
  Street: {
    type: String,
    required: true,
    default: null
  },
  Temperature: {
    type: Number,
    required: true,
    default: null
  },
  Pressure: {
    type: Number,
    required: true,
    default: null
  }
});

// Registering validation scheme as a model
mongoose.model(config.collectionConnect, SensorsSchema);
