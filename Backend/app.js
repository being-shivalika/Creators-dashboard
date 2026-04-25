require('dotenv/config');
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db.js");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes.js");
const userRoutes = require("./routes/userRoutes.js");
const userRouter = require('./routes/userRoutes.js');
const dns = require('dns');

//change dns
dns.setServers(['1.1.1.1','8.8.8.8']);

const app = express();

// connect DB AFTER env is loaded
connectDB();
app.use(cookieParser());

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
    credentials: true
}));
//API endpoints
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use("/api/auth", authRoutes);
app.use("/api/user", userRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});