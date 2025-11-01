import React from "react";
import MenuItems from "./MenuItems";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const Sidebar = () => {
  const menu = useSelector((store) => store.appReducer.isMenuOpen);

  return (
    <div className="flex bg-[#0f0f0f] text-white min-h-screen overflow-hidden">
      {/* Sidebar */}
      {menu && (
        <aside className="w-64 fixed h-full bg-[#0f0f0f] border-r border-gray-700 overflow-y-auto">
          <MenuItems />
        </aside>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 min-h-screen overflow-y-auto transition-all duration-300 ${
          menu ? "ml-64" : "ml-0"
        }`}
      >
        <div className="w-full overflow-x-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
