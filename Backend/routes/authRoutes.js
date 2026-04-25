const express = require("express");
const { register, login, logout , setupVerificationEmail, verifyOTP, isAuthenticated , sendResetPasswordOTP, resetPassword} = require("../controllers/AuthController.js");
const userAuth  = require("../middleware/userAuth.js");

const authRouter = express.Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/sendverify", userAuth, setupVerificationEmail);
authRouter.post("/verify-otp", userAuth, verifyOTP);
authRouter.post("/is-auth", userAuth, isAuthenticated);
authRouter.post("/send-reset-password-otp", sendResetPasswordOTP);
authRouter.post("/reset-password", resetPassword);

module.exports = authRouter;
