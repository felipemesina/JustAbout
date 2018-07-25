const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://ec2-13-56-224-216.us-west-1.compute.amazonaws.com:27017/JustAbout",
  secret: crypto
}
