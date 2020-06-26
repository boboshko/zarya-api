const { ObjectID } = require('mongodb');
const db = require('../data/db');
const config = require('../config/config');

// Get all documents (GET)
exports.all = function (cb) {
  db.get().collection(config.zaryaCollectionName).find().toArray((err, docs) => {
    cb(err, docs);
  });
};

// Get the last document (GET)
exports.last = function (cb) {
  db.get().collection(config.zaryaCollectionName).findOne(

    {},

    {
      sort: { _id: -1 },
    },

    (err, doc) => {
      cb(err, doc);
    },
  );
};

// Find the the entry by ID (GET)
exports.findById = function (id, cb) {
  db.get().collection(config.zaryaCollectionName).findOne({ _id: ObjectID(id) }, (err, doc) => {
    cb(err, doc);
  });
};

// Create an entry (POST)
exports.create = function (sensorsData, cb) {
  db.get().collection(config.zaryaCollectionName).insertOne(sensorsData, (err, result) => {
    cb(err, result);
  });
};

// Update an entry by ID (PUT)
exports.update = function (id, sensorsData, cb) {
  db.get().collection(config.zaryaCollectionName).updateOne(
    { _id: ObjectID(id) },
    { $set: sensorsData },
    {
      upsert: false,
      multi: false,
    },
    (err, result) => {
      cb(err, result);
    },
  );
};

// Delete an entry by ID (Delete)
exports.delete = function (id, cb) {
  db.get().collection(config.zaryaCollectionName).deleteOne(
    { _id: ObjectID(id) },
    (err, result) => {
      cb(err, result);
    },
  );
};
