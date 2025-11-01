import React, { useEffect, useState } from "react";
import { Menu, Search, Mic, User } from "lucide-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "./utils/reducers/AppSlice";
import { YOUTUBE_SUGGESTION_API } from "../Constant";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggetion,setShowSuggetion] = useState(true)
  const dispatch = useDispatch();

  const toggleMenubar = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      getSuggestionsbySearch();
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSuggestionsbySearch = async () => {
    if (!searchQuery) return;

    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
  };

  return (
    <div>
      <header className="flex items-center justify-between px-4 py-2 bg-[#0f0f0f] text-white relative">
        {/* Left Section */}
        <div className="flex items-center space-x-3">
          <Menu className="h-12 cursor-pointer" onClick={toggleMenubar} />
          <img
            className="h-12"
            src="/YouTube-Logo-2017-removebg-preview.png"
            alt="YouTube Logo"
          />
        </div>

        {/* Middle Section (Search Bar) */}
        <div className="flex flex-col w-1/2 max-w-xl relative">
          <div className="flex items-center">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggetion(true)}
              onBlur={() => setShowSuggetion(false)}
              placeholder="Search"
              className="w-full bg-[#121212] text-white border border-[#303030] rounded-l-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-500 placeholder-gray-400"
            />

            <button className="border border-[#303030] rounded-r-full px-4 py-2 bg-[#222222] hover:bg-[#303030]">
              <Search className="h-5 w-5 text-gray-300" />
            </button>
            <button className="ml-3 p-2 rounded-full bg-[#222222] hover:bg-[#303030]">
              <Mic className="h-5 w-5 text-gray-300" />
            </button>
          </div>

          {/* 🔽 Suggestions directly below search input */}
         {showSuggetion  && searchQuery && suggestions.length > 0 && (
            <ul className="absolute top-full left-0 bg-[#1a1919] w-full mt-2 p-2 rounded-lg shadow-lg border border-[#303030] z-50">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 items-center text-md py-1 px-2 hover:bg-[#2a2a2a] cursor-pointer"
                >
                  <Search className="h-4 w-4 text-gray-400" />
                  {item}
                </li>
              ))}
            </ul>
         )}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <User className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white" />
        </div>
      </header>
    </div>
  );
};

export default Head;
