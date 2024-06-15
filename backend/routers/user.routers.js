const express = require("express");
const {
  signup,
  login,
  addtocart,
  removefromcart,
  getcart,
} = require("../controllers/user.controllers.js");
const { fetchUser } = require("../middlewares/auth/authenticate.js");
const userRouter = express.Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.post("/addtocart", fetchUser, addtocart);
userRouter.post("/removefromcart", fetchUser, removefromcart);
userRouter.post("/getcart", fetchUser, getcart);

module.exports = {
  userRouter,
};
