import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { FaChevronDown } from "react-icons/fa";

const SortBar = ({ price, selected, setSelected }) => {
  return (
    <Listbox value="selected" onChange={(value) => setSelected(value)}>
      <Listbox.Button
        placeholder="Sort by"
        className="w-full px-4 py-2.5 flex justify-between bg-white items-center text-sm border text-background lg:w-full focus:outline-none"
      >
        <span>{selected?.price}</span>
        <FaChevronDown />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute z-10 py-1 mt-2 overflow-auto text-sm bg-white rounded-sm shadow-lg w-[91.5%] sm:w-[95%] md:w-[96%] lg:w-[216px] xl:w-[295px] 2xl:w-[353px] shadow-background/20 max-h-60 focus:outline-none sm:text-sm">
          {price.map((prices, pricesIdx) => (
            <Listbox.Option
              key={pricesIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 w-full px-4 ${
                  active ? "bg-gray-100 text-background" : "text-backgorund"
                }`
              }
              value={prices}
            >
              {({ selected }) => (
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {prices.price}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

export default SortBar;
