import React, { useContext } from "react";
import { AuthContext } from "../context/AuthCONTEXT";

const Header = () => {
  const { userData } = useContext(AuthContext);

  return (
    <div className="bg-white shadow-sm p-4 flex justify-between items-center">
      <div>
        <h1 className="text-xl font-semibold">
          Welcome back, {userData ? userData.name : "User"} 👋
        </h1>
        <p className="text-gray-500 text-sm">
          Here's what's happening with your creator journey today.
        </p>
      </div>

      <div>
        <button className="bg-[#4C5BD4] text-white px-4 py-2 rounded hover:scale-105 transition">
          + New Project
        </button>
      </div>
    </div>
  );
};

export default Header;
