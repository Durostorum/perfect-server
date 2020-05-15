const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String },
  googleId: { type: String },
  thumbnail: { type: String },
  facebookId: { type: String },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
