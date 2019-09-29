const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data/db');
const config = require('./config/config');
const text = require('./config/text');
const routes = require('./routes/routes');

// Server init
const app = express();

// Parsing the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing and DB methods
app.use(routes);

// DB connection
db.connect(config.urlMongo, function(err) {
	if (err) {
		return console.log(err);
	};

	// Server’s port — 3012
	app.listen(3012, function() {
		console.log(text.appStart);
	});
});
