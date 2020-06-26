const { MongoClient } = require('mongodb');
const config = require('../config/config');

// Empty variable to store DB connection
const state = {
  db: null,
};

// DB connection
exports.connect = function (url, done) {
  if (state.db) {
    return done();
  }

  // Connection to MongoDB
  MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      return done(err);
    }

    // Selected DB connection
    state.db = db.db(config.zaryaDbName);
    done();
  });
};

// Export the connection
exports.get = function () {
  return state.db;
};
