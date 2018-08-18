const crypto = require("crypto").randomBytes(256).toString("hex");

module.exports =  {
  uri: "mongodb://felipemesina:Incarcasswetrust17@ec2-54-219-143-86.us-west-1.compute.amazonaws.com:27017/justAbout",
  secret: crypto
}
