const express = require("express");
const app = express();
const router = express.Router();
const mongoose = require("mongoose");
const config = require("./config/database");
const path = require("path");
const authentication = require("./routes/authentication")(router);
const products = require("./routes/products")(router);
const bodyParser = require("body-parser");

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Server Problem: ", err);
  } else {
    console.log("Connection Successful. Connected to " + config.uri);
  }
});

//Body Parser Middlerware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/uploads", express.static("uploads"));
app.use(express.static(__dirname + "/public/dist/"));
app.use("/authentication", authentication);
app.use("/products", products);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/dist/index.html"));
});

app.listen(3200, () => {
  console.log("Server is listening on port 3200");
});
