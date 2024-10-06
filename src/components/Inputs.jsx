import React from "react";
import { BiCurrentLocation, BiSearch } from "react-icons/bi";

const Inputs = () => {
  return (
    <>
      <div className="flex flex-row justify-center my-6">
        <div className="flex flex-row justify-center items-center w-3/4 space-x-4">
          <input
            type="text"
            placeholder="Type city..."
            className=" text-gray-900 h-8 w-full rounded-md px-1 text-xl shadow-xl capitalize font-light focus:outline-none placeholder:lowercase"
          />
          <BiSearch
            size={30}
            className=" cursor-pointer transition ease-in-out hover:scale-110"
          />
          <BiCurrentLocation
            size={30}
            className=" cursor-pointer transition ease-in-out hover:scale-110"
          />
        </div>
        <div className="flex flex-row w-1/4 items-center justify-center">
          <button className="text-2xl font-medium transition ease-in-out hover:scale-125">
            ºC
          </button>
          <div className="text-2xl font-medium mx-1">|</div>
          <button className="text-2xl font-medium transition ease-in-out hover:scale-125">
            ºF
          </button>
        </div>
      </div>
    </>
  );
};

export default Inputs;
