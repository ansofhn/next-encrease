import React from "react";

const SortBar = () => {
  return (
    <div class="flex items-center gap-2 lg:justify-end">
      <select
        placeholder="Sort by"
        class="w-full p-2 text-sm border text-background lg:w-2/3 focus:outline-none"
      >
        <option>Highest Price</option>
        <option>Lowest Price</option>
      </select>
    </div>
  );
};

export default SortBar;
