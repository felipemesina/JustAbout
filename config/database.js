const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://172.31.31.161:27017/JustAbout",
  secret: crypto
}
