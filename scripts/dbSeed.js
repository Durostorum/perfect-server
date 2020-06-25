const mongoose = require("mongoose");
const db = require("../models");
const keys = require("../config/keys");
mongoose.connect(keys.Mongo.mongoURI || "mongodb://localhost/perfectServer");

// require("./drinkPairings")(db);
// require("./foodPairings")(db);
require("./menu")(db);
require("./user")(db);
