const express = require("express");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
const https = require("https");
const routes = require("./routes");
var cors = require("cors");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
// Passport initialize
require("./config/strategies")(passport);

// Connect to mongoDB
const MONGODB_URI = keys.Mongo.mongoURI || "mongodb://localhost/perfectServer";

mongoose.connect(MONGODB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Express Body parser
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());

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
app.use("/", require("./routes/api/user"));
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
