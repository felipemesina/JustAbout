const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://54.183.153.132:27017/JustAbout",
  secret: crypto
}
