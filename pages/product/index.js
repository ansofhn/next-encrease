import React, { useEffect, useState } from "react";
import Filter from "../../components/Filter";
import ProductCard from "../../components/ProductCard";
import SearchBar from "../../components/SearchBar";
import SortBar from "../../components/SortBar";
import LandingPageLayout from "../../layouts/LandingPageLayout";
const product = () => {
  // SORTBAR
  const price = [
    { price: "All Price", value: " " },
    { price: "Highest Price", value: "DESC" },
    { price: "Lowest Price", value: "ASC" },
  ];

  const [selected, setSelected] = useState(price[0]);

  const [pagePagination, setPagePagination] = useState(1);

  // FILTER
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState(null);
  const [type, setType] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setFilter([...filter, e.target.value]);
      setPagePagination(1)
    } else {
      const filtered = filter.filter((data) => data !== e.target.value);
      setFilter(filtered);
      setPagePagination(1)
    }
  };

  useEffect(() => {
    console.log(type, "type");
  }, [type]);

  const handleSearch = (e) => {
    setSearch(e);
    setPagePagination(1)
  };

  const handleChangeType = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
      setPagePagination(1)
    } else {
      const filtered = type.filter((data) => data !== e.target.value);
      setType(filtered);
      setPagePagination(1)
    }
  };

  return (
    <div>
      <div className="pt-40 xl:mx-10">
        <div className="p-4 mx-auto lg:px-10 xl:px-0 xl:max-w-screen-xl 2xl:max-w-screen-2xl font-poppins">
          <div className="flex flex-col justify-center gap-y-12 md:p-2">
            <div className="pb-10 space-y-5 text-center">
              <h1 className="text-5xl font-semibold lg:text-6xl text-background">
                Products
              </h1>
              <h2 className="text-sm font-light md:text-base">
                Find the product or service you are looking for here
              </h2>
            </div>
            <div className="flex flex-col items-center gap-4 lg:justify-between lg:flex-row">
              <div className="w-full lg:w-[24%] xl:w-[23%] 2xl:w-[25%]">
                <SearchBar handleSearch={handleSearch} />
              </div>
              <div className="w-full lg:w-[23%]">
                <SortBar
                  selected={selected}
                  setSelected={setSelected}
                  price={price}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="lg:pl-4 lg:order-1">
                <ProductCard
                  filter={filter}
                  selected={selected}
                  search={search}
                  type={type}
                  pagePagination={pagePagination}
                  setPagePagination={setPagePagination}
                />
              </div>
              <div className="px-2 py-6 lg:py-0 lg:w-1/3 xl:w-1/4">
                <Filter
                  handleChange={handleChange}
                  handleChangeType={handleChangeType}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;

product.getLayout = (page) => (
  <LandingPageLayout title="Encrease - Products" children={page} />
);
