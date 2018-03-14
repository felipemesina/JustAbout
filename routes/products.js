const Product = require("../models/product");
const productsControllers = require("../controllers/productsController");

module.exports = (router) => {

  router.post("/createPost", productsControllers.createPost);

  router.put("/updatePost", productsControllers.updatePost);

  router.get("/getPostsThatBelongToUser", productsControllers.getPostsThatBelongToUser);


  return router;
}
