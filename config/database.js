const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://172.31.12.0:27017/JustAbout",
  secret: crypto
}
