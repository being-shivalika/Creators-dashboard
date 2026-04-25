const jwt = require("jsonwebtoken");

const userAuth = async (req, res, next) => {
    const token = req.cookies.token;
    
    console.log("Cookie Token:", token); // Debug 1: Is the cookie even arriving?

    if(!token){
        return res.status(401).json({ message: "Unauthorized: No Token" });
    }

    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", tokenDecode); // Debug 2: What is inside the token?

        if(tokenDecode.id){
            req.body.userId = tokenDecode.id;
            next();
        } else {
            return res.status(401).json({ message: "Unauthorized: No ID in token" });
        }
    } catch(error) {
        console.error("JWT Error:", error.message); // Debug 3: Why did verify fail?
        return res.status(401).json({ message: "Unauthorized: Invalid Token" });
    }
}
module.exports = userAuth;