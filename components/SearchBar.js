import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search"
        className="w-full px-3 py-2.5 text-sm border focus:outline-none text-background/90"
      />
      <span className="p-3 text-white border bg-background">
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBar;
