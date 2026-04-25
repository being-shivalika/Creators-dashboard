import React, { useState } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Dashboard from "./Dashboard/Dashboard";

const Home = () => {
  // Lift the state here so both Header (toggle) and Sidebar can use it
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden bg-linear-to-br from-blue-100 to-pink-100">
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setIsOpen(true)} />

        <main className="p-6 flex-1 overflow-y-auto">
          <h2 className="text-xl font-semibold">
            <Dashboard />
          </h2>
        </main>
      </div>
    </div>
  );
};

export default Home;
