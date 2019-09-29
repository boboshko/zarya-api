const ObjectID = require('mongodb').ObjectID;
const db = require('../data/db');
const config = require('../config/config');

// All entries (GET)
exports.all = function(cb) {
	db.get().collection(config.collectionConnect).find().toArray(function(err, docs) {
		cb(err, docs);
	});
};

// Find the the entry by ID (GET)
exports.findById = function(id, cb) {
	db.get().collection(config.collectionConnect).findOne({ _id: ObjectID(id) }, function(err, doc) {
		cb(err, doc);
	});
};

// Create an entry (POST)
exports.create = function(sensorsData, cb) {
	db.get().collection(config.collectionConnect).insertOne(sensorsData, function(err, result) {
		cb(err, result);
	});
};

// Update an entry by ID (PUT)
exports.update = function(id, sensorsData, cb) {
  db.get().collection(config.collectionConnect).updateOne(
    { _id: ObjectID(id) },
    { $set: sensorsData },
    {
        upsert: false,
        multi: false
    },
    function(err, result) {
      cb(err, result);
    }
  );
};

// Delete an entry by ID (Delete)
exports.delete = function(id, cb) {
	db.get().collection(config.collectionConnect).deleteOne(
		{ _id: ObjectID(id) },
		function(err, result) {
			cb(err, result);
		}
	);
};
