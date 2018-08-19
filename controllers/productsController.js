const mongoose = require("mongoose");
const Product = mongoose.model("Product");
const config = require("../config/database");
const User = require('../models/user');
const jwt = require('jsonwebtoken');
function escapeRegex(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


module.exports = {
  createPost: function(req, res) {
    if (!req.body.title ||
        !req.body.price ||
        !req.body.desc ||
        !req.body.location ||
        !req.body.category ||
        !req.file
    ) {
      res.json({ success: false, message: "Please fill out all fields"});
    } else {
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        desc: req.body.desc,
        location: req.body.location,
        category: req.body.category,
        created_by: req.body.created_by,
        image: req.file.path
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
    }).sort({'created_at': -1})
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
        if (!user) {
          res.json({ success: false, message: 'Invalid user ID' });
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
      }
    });
  },
  deletePost: function(req, res) {
    if (!req.params.id) {
      res.json({ success: false, message: "No post ID was provided" });
    } else {
      Product.findOne({ _id: req.params.id}, (err, product) => {
        if (err) {
          res.json({ success: false, message: "Not a valid post ID" });
        } else {
          if (!product) {
            res.json({ success: false, message: "A post with that ID does not exist" });
          } else {
            User.findOne({ _id: req.decoded.userId}, (err, user) => {
              if (err) {
                res.json({ success: false, message: "Unauthorized access: " + err });
              } else {
                if (user.email !== product.created_by) {
                  res.json({ success: false, message: "You are not authorized to delete this post" });
                } else {
                  product.remove((err) => {
                    if (err) {
                      res.json({ success: false, message: "Could not delete post: " + err });
                    } else {
                      res.json({ success: true, message: "Your post was deleted" });
                    }
                  });
                }
              }
            });
          }
        }
      });
    }
  },
  comment: function(req, res) {
    if (!req.body.comment) {
      res.json({ success: false, message: "A comment is required" });
    } else {
      if (!req.body.id) {
        res.json({ success: false, message: "An ID is required" });
      } else {
        Product.findOne({ _id: req.body.id }, (err, product) => {
          if (err) {
            res.json({ success: false, message: "Not a valid Post ID" });
          } else {
            if (!product) {
              res.json({ success: false, message: "A Post with that ID was not found" });
            } else {
              User.findOne({ _id: req.decoded.userId }, (err, user) => {
                if (err) {
                  res.json({ success: false, message: "Oops, something went wrong: " + err });
                } else {
                  if (!user) {
                    res.json({ success: false, message: "A user with that ID does not exist" });
                  } else {
                    product.comments.push({
                      comment: req.body.comment,
                      commentator: user.username
                    });
                    product.save((err) => {
                      if (err) {
                        res.json({ success: false, message: "Oops, something went wrong. We could not submit your comment" });
                      } else {
                        res.json({ success: true, message: "Your comment has been posted" });
                      }
                    })
                  }
                }
              })
            }
          }
        })
      }
    }
  },
  getProductsByCategory: function(req, res) {
    if (!req.params.category_name) {
      res.json({ success: false, message: "No category was provided" });
    } else {
      Product.find({"category": req.params.category_name}, (err, products) => {
        if (err) {
          res.json({ success: false, message: "Sorry, products in that category do not exist" });
        } else {
          res.json({ success: true, products: products });
        }
      })
    }
  },
  search: function(req, res) {
    if (!req.query.query || req.query.query === undefined || req.query.query === '') {
      res.json({ success: false, message: "Please enter something" })
    } else {
      const regex = new RegExp(escapeRegex(req.query.query), 'gi');
      Product.find({title: regex}, (err, products) => {
        if (err) {
          res.json({ success: false, message: "Uh-oh. Something went wrong: " + err });
        } else {
          if (!products) {
            res.json({ success: false, message: "No results matched your search. Please try something different" });
          } else {
            res.json({ success: true, products: products });
          }
        }
      })
    }
  },
}
