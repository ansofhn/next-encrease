import { Checkbox, Slider } from "antd";
import React from "react";
import { categoriesRepository } from "../repository/category";

const Filter = ({ handleChange }) => {
  // Fetching Data
  const { data: dataCategories } = categoriesRepository.hooks.useCategory();
  const categories = dataCategories?.data;

  const onChange = (value) => {
    console.log(value, "change");
  };

  const onAfterChange = (value) => {
    console.log(value, "after");
  };

  const categoryType = [
    {
      name: "goods",
      value: "goods",
    },
    {
      name: "services",
      value: "services",
    },
  ];

  return (
    <div>
      <div className="my-6 font-bold uppercase text-background">Category</div>
      {categories?.map((data) => {
        return (
          <div className="flex items-center my-2" key={data?.id}>
            <Checkbox
              className="text-sm font-medium text-gray-400 font-poppins"
              value={data?.id}
              onChange={(e) => handleChange(e)}
            >
              {data?.name}
            </Checkbox>
          </div>
        );
      })}
      <div className="mb-12 font-bold uppercase mt-14 text-background">
        Price
      </div>
      <Slider
        trackStyle={{
          backgroundColor: "#23374D", // change this to the color you want
        }}
        range
        defaultValue={[0, 100]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />

      <div className="mb-6 font-bold uppercase mt-14 text-background">
        Product Type
      </div>
      {categoryType?.map((data) => {
        return (
          <div className="flex items-center my-2">
            <Checkbox
              className="text-sm font-medium text-gray-400 capitalize font-poppins"
              value={data?.name}
              onChange={(e) => handleChange(e)}
            >
              {data?.name}
            </Checkbox>
          </div>
        );
      })}
      <button className="w-full px-8 py-2 my-12 text-sm font-semibold text-white uppercase transition duration-300 border-2 cursor-pointer border-background bg-background hover:bg-softWhite hover:text-background">
        clear all filters
      </button>
    </div>
  );
};

export default Filter;
