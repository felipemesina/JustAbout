const Product = require("../models/product");
const productsControllers = require("../controllers/productsController");
const multer = require("multer");

//Storage Engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./public/src/assets/images/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

//Accept only these file mime types
const fileFilter= (req, file, cb) => {
  //reject file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(new Error("File must be of jpeg or png type."), false);
  }
}

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024
  },
  fileFilter: fileFilter
});



module.exports = (router) => {

  router.post("/createPost", upload.single('image'), productsControllers.createPost);

  router.put("/updatePost", productsControllers.updatePost);

  router.get("/getPostsThatBelongToUser", productsControllers.getPostsThatBelongToUser);

  router.delete("/deletePost/:id", productsControllers.deletePost);

  router.post("/comment", productsControllers.comment);

  return router;
}
