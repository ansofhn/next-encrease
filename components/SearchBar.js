import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ handleSearch }) => {
  const searchRef = useRef();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchRef.current.value);
    }
  };
  return (
    <div className="flex items-center">
      <input
        ref={searchRef}
        type="text"
        placeholder="Search"
        className="w-full px-3 py-2.5 text-sm border focus:outline-none text-background/90"
        onKeyDown={(e) => handleEnter(e)}
      />
      <span
        className="p-3 text-white border cursor-pointer bg-background"
        onClick={() => handleSearch(searchRef.current.value)}
      >
        <FaSearch />
      </span>
    </div>
  );
};

export default SearchBar;
