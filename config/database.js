const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://54.193.59.89:27017/JustAbout",
  secret: crypto
}
