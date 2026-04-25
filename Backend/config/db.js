const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URL:", process.env.MONGO_URL); 

    await mongoose.connect(process.env.MONGO_URL);

    console.log("DB connected");
  } catch (err) {
    console.log("DB error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;