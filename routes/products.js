const Product = require("../models/product");
const productsControllers = require("../controllers/productsController");
const multer = require("multer");

//Storage Engine
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + file.originalname);
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

  /*
  LOCATED IN THE AUTHENTICATION ROUTES FILE TO BY PASS AUTHENTICATION MIDDLEWARE
  router.get("/getPosts", productsController.getPosts);

  router.get("/getPostById/:id", productsController.getPostById);

  router.get("/:category_name", productsController.getProductsByCategory);
  */

  return router;
}
