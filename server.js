const express = require("express");
const app = express();
const mongoose = require("mongoose");
const config = require("./config/database");
const path = require("path");

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Server Problem: ", err);
  } else {
    console.log("Connection Successful. Connected to " + config.uri);
  }
});

app.use(express.static(__dirname + "/public/dist/"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/dist/index.html"));
});

app.listen(3200, () => {
  console.log("Server is listening on port 3200");
});
