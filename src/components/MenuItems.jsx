import React from "react";
import {
  Home,
  Flame,
  Music,
  Gamepad2,
  Newspaper,
  Library,
  PlaySquare,
  Radio,
  Users,
} from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuItems = () => {
  const menu = useSelector((store) => store.appReducer.isMenuOpen);

  return (
    <div
      className="menuItems bg-[#0f0f0f] text-white h-screen overflow-y-auto p-4 space-y-6 transition-all duration-300"
    >
      {/* Home Section */}
      <div>
        {menu && <h1 className="text-sm uppercase text-gray-400 mb-2">Home</h1>}
        <ul className="space-y-2">
          <Link to= "/"
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Home className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Home</span>
          </Link>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <PlaySquare className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Shorts</span>
          </li>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Users className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Subscriptions</span>
          </li>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Library className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Library</span>
          </li>
        </ul>
      </div>

      {/* Subscriptions */}
      <div>
        {menu && (
          <h1 className="text-sm uppercase text-gray-400 mb-2">Subscriptions</h1>
        )}
        <ul className="space-y-2">
          {["MrBeast", "Tech Burner", "TED-Ed", "Netflix India"].map(
            (channel) => (
              <li
                key={channel}
                className={`flex items-center ${
                  menu ? "gap-3" : "justify-center"
                } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
              >
                <Radio className="w-5 h-5" />
                <span className={`${!menu ? "hidden" : "inline"}`}>{channel}</span>
              </li>
            )
          )}
        </ul>
      </div>

      {/* Explore Section */}
      <div>
        {menu && <h1 className="text-sm uppercase text-gray-400 mb-2">Explore</h1>}
        <ul className="space-y-2">
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Flame className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Trending</span>
          </li>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Music className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Music</span>
          </li>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Gamepad2 className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>Gaming</span>
          </li>
          <li
            className={`flex items-center ${
              menu ? "gap-3" : "justify-center"
            } hover:bg-[#272727] p-2 rounded-lg cursor-pointer`}
          >
            <Newspaper className="w-5 h-5" />
            <span className={`${!menu ? "hidden" : "inline"}`}>News</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuItems;
