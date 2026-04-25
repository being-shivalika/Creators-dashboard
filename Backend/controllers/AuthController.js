const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User.js");
const nodemailer = require("nodemailer");
const { transporter } = require("../config/nodeMailer.js");

//register controller
const register = async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({ message: "Please enter all fields" });
    }

    try{
        const existingUser = await UserModel.findOne({ email });
        
        if(existingUser){
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new UserModel({
            name,
            email,
            password: hashedPassword,
        });
        await user.save();

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.cookie("token", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        //sending welcome email to user after registration
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "Welcome to Creators Hub!",
            text: `Hi ${user.name},\n\nWelcome to Creators Hub! Your account has been successfully created. We're excited to have you on board.\n\nBest regards,\nCreators Hub Team`
        }
        await transporter.sendMail(mailOptions);

        res.status(201).json({ success: true, token });

    } catch(error){
        req.json({ success: false, })
    }
}


//login controller
const login = async (req, res) => {
    const { email, password } = req.body;

    if(!email || !password){
        res.status(400).json({ message: "Please enter all fields" });
    }

    try{
        const user = await UserModel.findOne({ email });
        if(!user){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if(!isMatch){
            return res.status(400).json({ message: "Invalid credentials" });
        }

         const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"});

        res.cookie("token", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({ success: true, token });

    }catch(error){
        return res.status(500).json({ message: "Server error" });
    }
}


//logout controller
const logout = async (req, res) => {
    try{
        res.clearCookie("token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        });
        res.status(200).json({ success: true, message: "Logged out successfully" });


    }catch(error){
        return res.status(500).json({ message: "Server error" });
    }
};

const setupVerificationEmail = async (req, res) => { 
    try {
        const { userId } = req.body; 
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if (user.isAccountVerified) {
            return res.status(400).json({ message: "Account already verified" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000);

        user.verifyOTP = otp;
        user.verifyOTPexpireAt = Date.now() + 10 * 60 * 1000; 
        
        await user.save();

        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "ACCOUNT VERIFICATION - OTP",
            text: `Hi ${user.name},\n\nYour verification OTP is: ${otp}...`
        };

        await transporter.sendMail(mailOptions);
        return res.status(200).json({ success: true, message: "Verification email sent" });

    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: "Internal Server Error" }); 
    }
};

//verify OTP and activate user account
const verifyOTP = async (req, res) => {
    // 1. Ensure userId comes from middleware and otp is present
    const { userId, otp } = req.body;

    if(!userId || !otp){
        return res.status(400).json({ message: "Please provide userId and OTP" });
    }

    try {
        const user = await UserModel.findById(userId);
        
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        // 2. Fixed Type Mismatch: Convert both to String for safe comparison
        if(user.verifyOTP === '' || String(user.verifyOTP) !== String(otp)){
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // 3. Fixed Spelling Typo: verifyOTPexpireAt (NOT OPT)
        if(user.verifyOTPexpireAt < Date.now()){
            return res.status(400).json({ message: "OTP expired" });
        }

        user.isAccountVerified = true;
        user.verifyOTP = '';
        user.verifyOTPexpireAt = 0; // Reset expiration
        
        await user.save();
        return res.status(200).json({ success: true, message: "Account verified successfully" });

    } catch(error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
}


//is user authenticated middleware
const isAuthenticated = async (req, res) => {
    try{
        return res.status(200).json({ success: true, message: "User is authenticated" });
    }catch(error){
        return res.status(500).json({ message: "Server error" });
    }

}


//send password reset OTP to user email
const sendResetPasswordOTP = async (req, res) => {
 const { email } = req.body;
    if(!email){
        return res.status(400).json({ message: "Please provide email" });
    }
    try{
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // Generate and send reset password OTP
        const otp = Math.floor(100000 + Math.random() * 900000);

        user.resetOTP = otp;
        user.resetOTPexpireAt = Date.now() + 15 * 60 * 1000; 
        await user.save();
        const mailOptions = {
            from: process.env.SENDER_EMAIL,
            to: user.email,
            subject: "PASSWORD RESET - OTP",
            text: `Hi ${user.name},\n\nYour password reset OTP is: ${otp}. It will expire in 15 minutes. If you did not request a password reset, please ignore this email.`
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: true, message: "Password reset OTP sent" });

        
    }catch(error){
            return res.status(500).json({ message: "Server error" });
    }
    
}


//reset user password after verifying reset OTP
const resetPassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;

    if(!email || !otp || !newPassword){
        return res.status(400).json({ message: "Please provide email, OTP and new password" });
    }
    try{
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // 2. Fixed Type Mismatch: Convert both to String for safe comparison
        if(user.resetOTP === '' || user.resetOTP !== otp){
            return res.status(400).json({ message: "Invalid OTP" });
        }

        // 3. Fixed Spelling Typo: resetOTPexpireAt (NOT OTP)
        if(user.resetOTPexpireAt < Date.now()){
            return res.status(400).json({ message: "OTP expired" });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update user's password
        user.password = hashedPassword;
        user.resetOTP = '';
        user.resetOTPexpireAt = 0; // Reset expiration

        await user.save();
        return res.status(200).json({ success: true, message: "Password reset successfully" });

    }catch(error){
        return res.status(500).json({ message: "Server error" });
    }
}



module.exports = { register, login, logout , setupVerificationEmail, verifyOTP , isAuthenticated, sendResetPasswordOTP, resetPassword};
