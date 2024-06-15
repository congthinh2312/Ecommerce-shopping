const express = require("express");
const { productRouter } = require("./product.routers.js");
const { userRouter } = require("./user.routers.js");
const rootRouter = express.Router();

rootRouter.use("/", productRouter);
rootRouter.use("/", userRouter);

module.exports = {
  rootRouter,
};
