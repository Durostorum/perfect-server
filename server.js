const express = require("express");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const https = require("https");
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();

// Passport initialize
require("./config/strategies")(passport);

// Connect to mongoDB
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/perfectServer";

mongoose.connect(MONGODB_URI);

// Express Body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/", require("./routes/api/auth"));
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
