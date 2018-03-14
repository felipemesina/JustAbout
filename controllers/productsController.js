const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const config = require("../config/database");
const User = require('../models/user');
const jwt = require('jsonwebtoken');


module.exports = {
  createPost: function(req, res) {
    if (!req.body.title ||
        !req.body.price ||
        !req.body.desc ||
        !req.body.location
    ) {
      res.json({ success: false, message: "Please fill out all fields"});
    } else {
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        desc: req.body.desc,
        location: req.body.location,
        created_by: req.body.created_by
      });
      product.save((err) => {
        if (err) {
          if (err.errors) {
            if (err.errors.title) {
              res.json({ success: false, message: err.errors.title.message });
            } else {
              res.json({  success: false, message: err.errmsg});
            }
          } else {
            res.json({ success: false, message: "Could not create post. Error: " + err });
          }
        } else {
          res.json({ success: true, message: "Your post has been listed" });
        }
      })
    }
  },
  getPosts: function(req, res) {
    Product.find({}, (err, products) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
        if (!products) {
          res.json({ success: false, message: 'Sorry, we could not find any posts' });
        } else {
          res.json({ success: true, products: products });
        }
      }
    }).sort({ 'created_at': -1 });
  },
  getPostById: function(req, res) {
    if (!req.params.id) {
      res.json({ success: false, message: 'No product ID was provided.' });
    } else {
      Product.findOne({ _id: req.params.id }, (err, product) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid product id' });
        } else {
          if (!product) {
            res.json({ success: false, message: 'Post not found.' });
          } else {
              res.json({ success: true, product: product });
          }
        }
      });
    }
  },
  updatePost: function(req, res) {
    if (!req.body._id) {
      res.json({ success: false, message: 'No product id provided' });
    } else {
      Product.findOne({ _id: req.body._id }, (err, product) => {
        if (err) {
          res.json({ success: false, message: 'Not a valid product id' });
        } else {
          if (!product) {
            res.json({ success: false, message: 'Product id was not found.' });
          } else {
            User.findOne({ _id: req.decoded.userId }, (err, user) => {
              if (err) {
                res.json({ success: false, message: err });
              } else {
                if (!user) {
                  res.json({ success: false, message: 'Unable to authenticate user.' });
                } else {
                  if (user.email !== product.created_by) {
                    res.json({ success: false, message: 'You are not authorized to edit this blog post.' });
                  } else {
                    product.title = req.body.title;
                    product.price = req.body.price;
                    product.desc = req.body.desc;
                    product.location = req.body.location;
                    product.save((err) => {
                      if (err) {
                        if (err.errors) {
                          res.json({ success: false, message: 'Please ensure form is filled out properly' });
                        } else {
                          res.json({ success: false, message: err });
                        }
                      } else {
                        res.json({ success: true, message: 'Your post has been updated' });
                      }
                    });
                  }
                }
              }
            });
          }
        }
      });
    }
  },
  getPostsThatBelongToUser: function(req, res) {
    User.findOne({ _id: req.decoded.userId}, (err, user) => {
      if (err) {
        res.json({ success: false, message: err });
      } else {
          Product.find({ 'created_by': user.email }, (err, products) => {
            if (err) {
              res.json({ success: false, message: err });
            } else {
              if (!products) {
                res.json({ success: false, message: 'No posts to display yet' });
              } else {
                res.json({ success: true, products: products });
              }
            }
          });
      }
    });
  }
}
