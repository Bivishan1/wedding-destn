"use client";
import React, { useState } from "react";
import AccordionM from "@/components/atoms/AccordionM";
import Calendar from "@/components/organisms/Calendar";
import CarouselC from "@/components/molecules/CarouselC";

const Plans = () => {
  const [minVal, setMinVal] = useState(1000);
  const [maxVal, setMaxVal] = useState(3000);
  const min = 0;
  const max = 5000;

  const items = ["Resorts0", "Resorts1", "Resorts2"];
  const vendors = ["Photographers", "Lights", "Flowers"];

  // carousel lists
  const venues = ["Chandragiri Resort", "Venue 1", "Venue 2"];

  const venueDescriptions: Record<string, string> = {
    "Chandragiri Resort":
      "Experience luxury at Chandragiri Resort with breathtaking views and top-notch amenities.",
    "Venue 1":
      "A beautiful event space perfect for weddings, conferences, and celebrations.",
    "Venue 2":
      "A cozy retreat with modern facilities, ideal for corporate gatherings and private events.",
    "Venue 3":
      "A scenic getaway featuring lush greenery and state-of-the-art event spaces.",
  };

  const imageMap: Record<string, string[]> = {
    "Chandragiri Resort": ["/img/rupakot.jpg", "/img/trending1.jpg", "/img/trending3.jpg"],
    "Venue 1": ["/img/rupakot.jpg", "/img/trending2.jpg", "/img/trending3.jpg"],
    "Venue 2": ["/img/rupakot.jpg", "/img/trending2.jpg", "/img/trending1.jpg"],
  };

  return (
    <div className="lg:w-[1207px] md:w-[550px] mx-auto flex justify-center gap-5">
      {/* Sidebar */}
      <div className="filter-sidbar w-[328px]">
        <h1 className="text-xl font-medium">Filters</h1>
        <div className="budget-section">
          <h2 className="text-xl font-bold text-opacity-25 mt-7">Budget</h2>
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
          <AccordionM items={items} heading={"Venue"} />
        </div>
        {/* Horizontal Line  */}
        <div className="border-b border-gray-300 my-10"></div>
        {/* Date & Time */}

        <h4>Wedding Date and Timeline</h4>
        <Calendar />
        {/* Horizontal Line  */}
        <div className="border-b border-gray-300 my-10"></div>
        {/* Vendors selection */}
        <AccordionM items={vendors} heading={"Vendor"} />
      </div>
      {/* Hero Content */}
      <div className="main-content p-5 w-[1082px] mt-14">
        <div className="trending-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {venues.map((venue, index) => (
            <CarouselC
              key={index}
              title={venue}
              venuesD={venueDescriptions[venue]}
              imageMap={imageMap}
              button={"Add"}
            />
          ))}
          {venues.map((venue, index) => (
            <CarouselC
              key={index}
              title={venue}
              venuesD={venueDescriptions[venue]}
              imageMap={imageMap}
            />
          ))}
          {venues.map((venue, index) => (
            <CarouselC
              key={index}
              title={venue}
              venuesD={venueDescriptions[venue]}
              imageMap={imageMap}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plans;
