const express = require("express");
const userController = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");

const userRouter = express.Router();

userRouter.post("/user/signup", userController.register);
userRouter.post("/user/login", userController.login);
userRouter.get("/users", verifyToken, userController.getAllUsers);
userRouter.get("/users/:id", verifyToken, userController.getUserById);
userRouter.put("/users/:id", verifyToken, userController.updateUser);
userRouter.delete("/users/:id", verifyToken, userController.deleteUser);

module.exports = userRouter;
