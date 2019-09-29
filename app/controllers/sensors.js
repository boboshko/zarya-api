const mongoose = require('mongoose');
const Sensors = require('../models/sensors');
const config = require('../config/config');
require('../data/model');

// Connect validation scheme for incoming data
const SensorsSchema = mongoose.model(config.collectionConnect);

// All entries (GET)
exports.all = function(req, res) {
	Sensors.all(function(err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		};
		res.send(docs);
	});
};

// Find the the entry by ID (GET)
exports.findById = function(req, res) {
	Sensors.findById(req.params.id, function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		};
		res.send(doc);
	});
};

// Create an entry (POST)
exports.create = function(req, res) {
 const sensorsData = SensorsSchema(req.body);
 Sensors.create(sensorsData, function(err, result) {
  if (err) {
   console.log(err);
   return res.sendStatus(500);
  };
  res.send(sensorsData);
 });
};

// Update an entry by ID (PUT)
exports.update = function(req, res) {
	Sensors.update(
		req.params.id,
		req.body,
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			};
			res.sendStatus(200);
		}
	);
};

// Delete an entry by ID (Delete)
exports.delete = function(req, res) {
	Sensors.delete(
		req.params.id,
		function(err, result) {
			if (err) {
				console.log(err);
				return res.sendStatus(500);
			};
			res.sendStatus(200);
		}
	);
};
