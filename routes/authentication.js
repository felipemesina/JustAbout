const User = require("../models/user");
const Product = require("../models/product");
const UserControllers = require("../controllers/UserControllers");
const productsController = require("../controllers/productsController");



module.exports = (router) => {

  router.get("/getPosts", productsController.getPosts);

  router.post("/signUp", UserControllers.signup);

  router.get("/isUsernameAvailable/:username", UserControllers.isUsernameAvailable);

  router.get("/isEmailAvailable/:email", UserControllers.isEmailAvailable);

  router.post("/login", UserControllers.login);

  router.get("/getPostById/:id", productsController.getPostById);

  router.get("/category/:category_name", productsController.getProductsByCategory);

  router.get("/search", productsController.search);

  router.use(UserControllers.authenticateUser);

  router.get("/profile", UserControllers.profile);

  return router;
}
