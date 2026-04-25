const express = require("express");
const userAuth = require("../middleware/userAuth");
const getUserData = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.post('/data', userAuth, getUserData);

module.exports = userRouter;