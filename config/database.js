const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "http://localhost:27017/justAbout",
  secret: crypto
}
