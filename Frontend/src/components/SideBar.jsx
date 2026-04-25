import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  Calendar,
  Wallet,
  Folder,
  UserRoundCog,
  LogOut,
} from "lucide-react";

const NavItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 hover:bg-purple-100 p-2 rounded cursor-pointer transition-colors group">
    <div className="text-purple-950">{icon}</div>
    <span className="text-gray-700 font-medium whitespace-nowrap">{label}</span>
  </div>
);

const SideBar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-200 p-4  flex-col hidden md:flex w-64 shrink-0">
      <h1 className="text-2xl font-bold creators-hub text-[#3A3F8F] mb-8 px-2">
        CreatorsHub
      </h1>

      <nav className="flex flex-col gap-4 -grow overflow-y-auto">
        <Link to="/content">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
        </Link>
        <Link to="/tasks">
          <NavItem icon={<CheckSquare size={18} />} label="Tasks" />
        </Link>
        <Link to="/collaborations">
          <NavItem icon={<Users size={18} />} label="Collaborations" />
        </Link>
        <Link to="/calendar">
          <NavItem icon={<Calendar size={18} />} label="Calendar" />
        </Link>
        <Link to="/payments">
          <NavItem icon={<Wallet size={18} />} label="Payments" />
        </Link>
        <Link to="/projects">
          <NavItem icon={<Folder size={18} />} label="Projects" />
        </Link>

        <div className="mt-40 flex flex-col gap-4 border-t border-gray-100 pt-4">
          <NavItem icon={<UserRoundCog size={18} />} label="Settings" />
          <div className="flex items-center gap-3 p-2 text-red-600 font-medium cursor-pointer">
            <LogOut size={18} />
            Log Out
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
