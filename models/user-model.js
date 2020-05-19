const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  provider: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart: { type: String },
});

module.exports = User = mongoose.model("User", UserSchema);
