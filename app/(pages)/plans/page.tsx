"use client";
import React, { useState} from "react";
import AccordionM from "@/components/atoms/AccordionM";
import Calendar from "@/components/organisms/Calendar";

const Plans = () => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(3000);
  const min = 0;
  const max = 5000;

  const items= ['Resorts0','Resorts1','Resorts2'];
  return (
    <div className="lg:w-[1207px] md:w-[550px] mx-auto flex justify-center gap-5">
      {/* Sidebar */}
      <div className="filter-sidbar w-[328px]">
        <h1 className="text-xl font-medium">Filters</h1>
        <div className="budget-section">
          <h2 className="text-xl font-bold text-opacity-25 mt-7">
            Budget
          </h2>
          <div className="range flex gap-4 items-center">
            <div className="min relative">
              <p>Min</p>
              <div className="relative">
                <input
                  type="number"
                  value={`${minVal}`}
                  onChange={(e) => {
                    const value = Math.min(Number(e.target.value), maxVal - 1);
                    setMinVal(value);
                  }}
                  className="w-28 p-2 pl-8 border rounded-md mt-1 relative"
                  min={min}
                  max={max}
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                  Rs.
                </span>
              </div>
            </div>
            <span className="pt-6">to</span>
            <div className="max">
              <p>Max</p>
              <div className="relative">
                <input
                  type="number"
                  value={maxVal}
                  onChange={(e) => {
                    const value = Math.max(Number(e.target.value), minVal + 1);
                    setMaxVal(value);
                  }}
                  className="w-28 p-2 pl-8 border rounded-md mt-1"
                  min={min}
                  max={max}
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
                  Rs.
                </span>
              </div>
            </div>
          </div>
          {/* Custom Range Slider */}
          <div className="mt-8 relative h-1">
            {/* Slider Track */}
            <div className="absolute w-full h-[6px] bg-red-200 rounded-full top-1/2 -translate-y-1/2"></div>

            {/* Active Range */}
            <div
              className="absolute h-[6px] bg-red-500 rounded-full top-1/2 -translate-y-1/2"
              style={{
                left: `${(minVal / max) * 100}%`,
                width: `${((maxVal - minVal) / max) * 100}%`,
              }}
            ></div>

            {/* Min Thumb */}
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              onChange={(e) =>
                setMinVal(Math.min(Number(e.target.value), maxVal - 1))
              }
              className="absolute w-full h-2 appearance-none opacity-0 z-20 cursor-pointer"
            />

            {/* Max Thumb */}
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              onChange={(e) =>
                setMaxVal(Math.max(Number(e.target.value), minVal + 1))
              }
              className="absolute w-full h-2 appearance-none opacity-0 z-20 cursor-pointer"
            />

            {/* Custom Thumb Indicators */}
            <div
              className="absolute w-6 h-6 bg-white border-2 border-red-500 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md pointer-events-none"
              style={{ left: `${(minVal / max) * 100}%` }}
            ></div>
            <div
              className="absolute w-6 h-6 bg-white border-2 border-red-500 rounded-full top-1/2 -translate-y-1/2 -translate-x-1/2 shadow-md pointer-events-none"
              style={{ left: `${(maxVal / max) * 100}%` }}
            ></div>
          </div>
        </div>
        {/* Horizontal Line  */}
        <div className="border-b border-gray-300 my-10"></div>
              {/* Venue Accordion */}
              <div className="venue mb-7">

        <AccordionM items={items} heading={'Venue'}/>
              </div>
               {/* Horizontal Line  */}
        <div className="border-b border-gray-300 my-10"></div>
        {/* Date & Time */}

        <h4>Wedding Date and Timeline</h4>
        <Calendar/>

      </div>
      {/* Hero Content */}
      <div className="main-content w-[1082px]">
        <p className="">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui esse et
          in blanditiis molestias nostrum necessitatibus quas error, quis
          quibusdam voluptate repellat dolorum consequuntur obcaecati nobis,
          impedit architecto soluta hic?
        </p>
      </div>
    </div>
  );
};

export default Plans;
