import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Authentication/Login";
import Home from "./Pages/Home";
import Signup from "./Pages/Authentication/Signup";
import EmailVerify from "./Pages/Authentication/EmailVerify";
import ResetPassword from "./Pages/Authentication/ResetPassword";
import Navbar from "./components/Navbar";
import LandingPage from "./Pages/LandingPage";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-email" element={<EmailVerify />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default App;
