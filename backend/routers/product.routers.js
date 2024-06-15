const express = require("express");
const {
  addProduct,
  removeProduct,
  allProducts,
  newcollections,
  popularinwomen,
} = require("../controllers/product.controllers.js");
const productRouter = express.Router();

productRouter.post("/addproduct", addProduct);
productRouter.post("/removeproduct", removeProduct);
productRouter.get("/allproducts", allProducts);
productRouter.get("/newcollections", newcollections);
productRouter.get("/popularinwomen", popularinwomen);

module.exports = {
  productRouter,
};
