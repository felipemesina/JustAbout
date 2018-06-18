const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://172.31.3.63/justAbout",
  secret: crypto
}
