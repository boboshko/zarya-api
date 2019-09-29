const MongoClient = require('mongodb').MongoClient;
const config = require('../config/config');

// Empty variable to store DB connection
const state = {
	db: null
};

// DB connection
exports.connect = function(url, done) {
	if (state.db) {
		return done();
	};

	// Connection to MongoDB
	MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
		if (err) {
			return done(err);
		};

		// Selected DB connection
		state.db = db.db(config.dbConnect);
		done();
	});
};

// Export the connection
exports.get = function() {
	return state.db;
};
