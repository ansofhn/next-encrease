import { Checkbox } from "antd";
import React from "react";
import { categoriesRepository } from "../repository/category";

const Filter = ({ handleChange }) => {
  // Fetching Data
  const { data: dataCategories } = categoriesRepository.hooks.useCategory();
  const categories = dataCategories?.data;

  return (
    <div>
      <div className="my-6 font-bold uppercase text-background">Category</div>
      {categories?.map((data) => {
        return (
          <div className="flex items-center my-2" key={data?.id}>
            <Checkbox
              className="font-poppins  text-sm font-medium text-gray-400"
              value={data?.name}
              onChange={(e) => handleChange(e)}
            >
              {data?.name}
            </Checkbox>
          </div>
        );
      })}
      <div className="mb-6 font-bold uppercase mt-14 text-background">
        Price
      </div>
      <input
        id="default-range"
        type="range"
        value="100"
        className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-gray-400 bg-background"
      />

      <div className="mb-6 font-bold uppercase mt-14 text-background">
        Brand
      </div>
      <div className="flex items-center my-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-gray-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-400"
        >
          ASUS
        </label>
      </div>
      <div className="flex items-center my-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-gray-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-400"
        >
          ACER
        </label>
      </div>
      <div className="flex items-center my-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-gray-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-400"
        >
          DELL
        </label>
      </div>
      <div className="flex items-center my-2">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 bg-gray-100 border-gray-300 rounded accent-gray-500"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-400"
        >
          Samsung
        </label>
      </div>
      <button className="w-full px-8 py-2 my-8 text-sm font-semibold text-white uppercase transition duration-300 border-2 cursor-pointer border-background bg-background hover:bg-softWhite hover:text-background">
        clear all filters
      </button>
    </div>
  );
};

export default Filter;
