const mongoose = require("mongoose");
const User = mongoose.model("User");
const jwt = require("jsonwebtoken");
const config = require("../config/database");

module.exports = {
  signup: function(req, res) {
    if (!req.body.username ||
        !req.body.email ||
        !req.body.password
    ) {
      res.json({ success: false, message: "All fields are required" });
    } else {
      const user = new User({
        username: req.body.username.toLowerCase(),
        email: req.body.email.toLowerCase(),
        password: req.body.password
      });
        user.save((err) => {
          if (err) {
            if (err.code === 11000) {
              res.json({ success: false, message: "A user with that username/email already exists" });
            } else {
                if (err.errors) {
                  if (err.errors.email) {
                    res.json({ success: false, message: err.errors.email.message });
                  } else {
                      if (err.errors.username) {
                        res.json({ success: false, message: err.errors.username.message });
                      } else {
                          if (err.errors.password) {
                            res.json({ success: false, message: err.errors.password.message });
                          } else {
                              res.json({ success: false, message: err });
                            }
                        }
                    }
                  } else {
                      res.json({ success: false, message: 'Sorry, an error occurred: ', err });
                    }
                }
            } else {
              res.json({ success: true, message: 'You are now registered!' });
              }
      });
    }
  },
  isUsernameAvailable: function(req, res) {
    if (!req.params.username) {
      res.json({ success: false, message: "Please provide a username" });
    } else {
      User.findOne({ username: req.params.username }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err })
        } else {
          if (user) {
            res.json({ success: false, message: "An account with that username already exists" });
          } else {
            res.json({ success: true, message: "Username is available" });
          }
        }
      });
    }
  },
  isEmailAvailable: function(req, res) {
    if (!req.params.email) {
      res.json({ success: false, message: "Please provide an email" });
    } else {
      User.findOne({ email: req.params.email }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err })
        } else {
          if (user) {
            res.json({ success: false, message: "An account with that email already exists" });
          } else {
            res.json({ success: true, message: "Email is available" });
          }
        }
      });
    }
  },
  login: function(req, res) {
    if (
      !req.body.username ||
      !req.body.password
    ) {
      res.json({ success: false, message: "Username and password required"});
    } else {
      User.findOne({ username: req.body.username.toLowerCase() }, (err, user) => {
        if (err) {
          res.json({ success: false, message: err })
        } else {
          if (!user) {
            res.json({ success: false, message: "An account with that username was not found"});
          } else {
            const validatePassword = user.comparePassword(req.body.password);
            if (!validatePassword) {
              res.json({ success: false, message: "Invalid password" });
            } else {
              const token = jwt.sign({ userId: user._id }, config.secret, { expiresIn: "24h" });
              res.json({ success: true, message: "Logging in", token: token, user: { username: user.username } })
            }
          }
        }
      })
    }
  },
  authenticateUser: function(req, res, next) {
    console.log("This is the authentication controller...")
    const token = req.headers['authorization'];
    console.log(jwt);
    console.log(token);
    if (!token) {
      res.json({ success: false, message: "No token was provided!!!" });
    } else {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          res.json({ success: false, message: "Ivalid Token: " + err});
        } else {
          req.decoded = decoded
          next();
        }
      })
    }
  },
  profile: function(req, res) {
    User.findOne({ _id: req.decoded.userId}).select("username email").exec( (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!user) {
          res.json({ success: false, message: "Sorry, no user was found" });
        } else {
          res.json({ success: true, user: user });
        }
      }
    })
  }
}
