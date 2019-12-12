const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const config = require('config');
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

/*router.get("/", (req, res) => {
  res.json("vie")
});*/

router.post("/cart", (req, res) => {
  let checkout = { items: (req.body) }
  console.log(checkout, "Moi et Toi")
  return cartModel.create(checkout)

});

app.use("/", router);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'))

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")));
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));