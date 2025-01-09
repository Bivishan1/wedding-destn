"use client";
import React, { useState } from "react";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const Packages = () => {
  const [activeFAQ, setActiveFAQ] = useState(false); // Initializes as `null`, no FAQ is active

  const toggleFAQ = () => {
    // Toggle logic: If clicked FAQ is already active, close it (set to null), otherwise set to the clicked FAQ's index
    // console.log(`toggleFAQ called with index: ${index}`);
    setActiveFAQ((prev) => !prev);
  };

  const premium = ["Feature 1", "Feature 2", "Feature 3"];
  return (
    <div>
      <section id="packages" className="container">
        <h2>Packages</h2>
        <h3 className="text-center text-2xl mb-12">Pick the plans that right for you!</h3>
        <div className="flex justify-center align-middle m-auto gap-10">
          <div className="bg-blue-gray-200 w-1/4 rounded-md p-3">
            <div className="premium">
              <p className="package bg-red-600 hover:bg-red-400 p-5 rounded-md text-center">
                Premium
              </p>
              <div className="border-b-1 border-b-black-500">
                {/* Accordion Header */}
                <div
                  className="packages flex justify-between items-center my-2 cursor-pointer"
                  onClick={() => toggleFAQ()}
                >
                  <h5 className="font-semibold">Features</h5>
                  <span className="text-xl">{activeFAQ ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}</span>
                </div>
                {/* smooth transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeFAQ ? "h-24" : "h-0"
                  }`}
                >
                  <div className="p-2">
                    {activeFAQ &&
                      premium.map((feature, index) => (
                        <p key={index} className="mb-0">
                          {feature}
                        </p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
              <button className="mt-3 px-5 py-3 w-full mx-auto bg-blue-gray-200 border border-red-500 rounded-2xl hover:bg-red-300 transition duration-300 ease-in-out">Select This Plan</button>
          </div>
          <div className="bg-blue-gray-200 w-1/4 rounded-sm p-3">Standard</div>
          <div className="bg-blue-gray-200 w-1/4 rounded-sm p-3">Basic</div>
        </div>
        {/* <div className="packages-info flex gap-10">
          <div className="package bg-blue-gray-200">Premium</div>
          <div className="package">Standard</div>
          <div className="package">Basic</div>
        </div> */}
      </section>
    </div>
  );
};

export default Packages;
