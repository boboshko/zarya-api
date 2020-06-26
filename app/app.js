const express = require('express');
const bodyParser = require('body-parser');
const db = require('./data/db');
const config = require('./config/config');
const routes = require('./routes/routes');

// Server init
const app = express();

// Parsing the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routing and DB methods
app.use(routes);

// DB connection
db.connect(config.zaryaUrlMongo, (err) => {
  if (err) {
    return console.log(err);
  }

  // Listen to port
  app.listen(config.zaryaPort, () => {
    console.log(`Zarya API has started on port ${config.zaryaPort}.`);
  });
});
