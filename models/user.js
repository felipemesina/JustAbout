const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const bcrypt = require("bcrypt-nodejs");

// :::::: USERNAME VALIDATORS ::::::
const usernameLengthValidator = (username) => {
  if (!username) {
    return false;
  } else {
    if (username.length < 3 || username.length > 15) {
      return false;
    } else {
      return true;
    }
  }
};

const validUsername = (username) => {
  if (!username) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    return regExp.test(username);
  }
};

const usernameValidators = [
  {
    validator: usernameLengthValidator,
    message: 'Username must be between 3-15 characters'
  },
  {
    validator: validUsername,
    message: 'Username may only contain numbers and letters'
  }
];

// :::::: EMAIL VALIDATORS ::::::
const emailLengthValidator = (email) => {
  if (!email) {
    return false;
  } else {
    if (email.length < 10 || email.length > 30) {
      return false;
    } else {
      return true;
    }
  }
}

const validEmail = (email) => {
  if (!email) {
    return false;
  } else {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regExp.test(email);
  }
};

const emailValidators = [
  {
    validator: emailLengthValidator, message: "Email length must be between 10-30 characters"
  },
  {
    validator: validEmail,
    message: 'Invalid email format'
  }
];

// :::::: PASSWORD VALIDATORS ::::::
const passwordLengthValidator = (password) => {
  if (!password) {
    return false;
  } else {
    if (password.length < 8 || password.length > 35) {
      return false;
    } else {
      return true;
    }
  }
};

const validPassword = (password) => {
  if (!password) {
    return false;
  } else {
    const regExp = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,35}$/);
    return regExp.test(password);
  }
};

const passwordValidators = [
  {
    validator: passwordLengthValidator,
    message: 'Password must be between 8-35 characters'
  },
  {
    validator: validPassword,
    message: 'Password must contain at least one uppercase, lowercase, and a number'
  }
];

const UserSchema = new mongoose.Schema({
  username: { type: String, require: true, unique: true, lowercase: true, validate: usernameValidators },
  email: { type: String, require: true, unique: true, lowercase: true, validate: emailValidators },
  password: { type: String, require: true, validate: passwordValidators }
});

UserSchema.pre("save", function(next) {
  if (!this.isModified("password"))
  return next();

  bcrypt.hash(this.password, null, null, (err, hash) => {
    if (err) {
      return next(err);
    } else {
      this.password = hash;
      next();
    }
  });
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model("User", UserSchema);
