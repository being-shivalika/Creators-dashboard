import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <Link to={"/signup"}>
        <button className="sm:w-32 border rounded-xl p-2 m-10">Sign up</button>
      </Link>
      <Link to={"/login"}>
        <button className="sm:w-32 border rounded-xl p-2 m-10">Login</button>
      </Link>
    </>
  );
};

export default Navbar;
