const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  latestOrder: { type: Array },
  mostOrderedItems: { type: String },
  orderHistory: Array,
  userId: { type: String },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
