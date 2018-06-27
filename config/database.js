const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://54.193.60.73:27017/justAbout",
  secret: crypto
}
