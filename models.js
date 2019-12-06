const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Cart = new Schema({
  items: []
});
const cartModel = mongoose.model("cart", Cart)
module.exports = { cartModel }