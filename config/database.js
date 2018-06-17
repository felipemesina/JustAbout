const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "http://172.31.1.230",
  secret: crypto
}
