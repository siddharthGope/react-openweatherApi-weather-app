import React from "react";

const Forecast = () => {
  const data = [1, 2, 3, 4];
  return (
    <div>
      <div className="fle items-center justify-start mt-6">
        <p className="font-medium uppercase"></p>
      </div>
      <hr className="my-1" />

      <div className="flex items-center justify-between">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">Wed</p>
            <img
              src="https://www.accuweather.com/images/components/core/base-image-color.jpg"
              alt="weather-icon"
              className="w-8 my-1 rounded-2xl"
            />
            <p className="font-medium">12</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
