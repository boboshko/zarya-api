const mongoose = require('mongoose');
const Sensors = require('../models/sensors');
const config = require('../config/config');
require('../data/model');

// Connect validation scheme for incoming data
const SensorsSchema = mongoose.model(config.zaryaCollectionName);

// Get all documents (GET)
exports.all = function (req, res) {
  Sensors.all((err, docs) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(docs);
  });
};

// Get the last document (GET)
exports.last = function (req, res) {
  Sensors.last((err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

// Find the the entry by ID (GET)
exports.findById = function (req, res) {
  Sensors.findById(req.params.id, (err, doc) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(doc);
  });
};

// Create an entry (POST)
exports.create = function (req, res) {
  const sensorsData = SensorsSchema(req.body);
  Sensors.create(sensorsData, (err, result) => {
    if (err) {
      console.log(err);
      return res.sendStatus(500);
    }
    res.send(sensorsData);
  });
};

// Update an entry by ID (PUT)
exports.update = function (req, res) {
  Sensors.update(
    req.params.id,
    req.body,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
};

// Delete an entry by ID (Delete)
exports.delete = function (req, res) {
  Sensors.delete(
    req.params.id,
    (err, result) => {
      if (err) {
        console.log(err);
        return res.sendStatus(500);
      }
      res.sendStatus(200);
    },
  );
};
