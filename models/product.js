const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// :::::: USERNAME VALIDATORS ::::::
const titleLengthValidator = (title) => {
  if (!title) {
    return false;
  } else {
    if (title.length < 3 || title.length > 25) {
      return false;
    } else {
      return true;
    }
  }
};

const validTitle = (title) => {
  if (!title) {
    return false;
  } else {
    const regExp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    return regExp.test(title);
  }
};

const titleValidators = [
  {
    validator: titleLengthValidator,
    message: 'Title must be between 3-25 characters'
  },
  {
    validator: validTitle,
    message: 'Title may only contain numbers and letters'
  }
];

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, validate: titleValidators },
  price: { type: String, required: true },
  desc: { type: String, required: true },
  location: { type: String, required: true },
  category: {type: String, required: true },
  image: { type: String, required: true },
  comments: [{
    comment: { type: String },
    commentator: { type: String },
    created_at: { type: Date, default: Date.now()}
  }],
  created_by: { type: String },
  created_at: { type: Date, default: Date.now()}
});

module.exports = mongoose.model("Product", ProductSchema);
