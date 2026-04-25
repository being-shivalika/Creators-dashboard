const userModel = require("../models/User.js");


const getUserData = async (req , res)=>{
    try{
        const {userId} = req.body;
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ success: true, userData: {
            email: user.email,
            isAccountVerified: user.isAccountVerified,
            
        } });

        }catch(error){
            res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = getUserData;