const express = require('express');
const mongoose = require('mongoose');
//const config = require('config');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config()
const router = express.Router();
const { cartModel } = require("./models");


const PORT = process.env.PORT || 3001
const app = express();
mongoose.connect(process.env.mongodburi, { useNewUrlParser: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(bodyParser.json())
router.get("/", (req, res) => {
  res.json("vie")
});

router.post("/cart", (req, res) => {
  let checkout = { items: (req.body) }
  console.log(checkout, "Moi et Toi")
  return cartModel.create(checkout)

});

app.use("/", router);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));