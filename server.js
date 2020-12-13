// ==============================================================================
// Dependencies & Required Files
// ==============================================================================

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./models");
const routes = require("./routes");

// ==============================================================================
// Express & Middleware
// ==============================================================================

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routing (API and React Views)

// app.use('./api/auth', require('routes/api/auth'));
// app.use('/api/users', require('routes/api/users'));
// app.use('/api/adopters', require('routes/api/adopters'));
// const app.use = require("./routes/api/user.js");
// const routes = require("./routes/api/adopters.js");
// const routes = require("./routes/api/dog.js");

require("./routes/api/dog.js")(app);


// ==============================================================================
// Database Sync Options
// ==============================================================================

// set to true to clear the database
const syncOptions = { force: false };

// ==============================================================================
// Server
// ==============================================================================

db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
