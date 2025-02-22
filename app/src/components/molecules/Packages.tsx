"use client";
import React, { useState } from "react";
import { UpIcon } from "../../../../public/icons";
import { DownIcon } from "../../../../public/icons";
const  Packages = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

 // Toggle logic: If clicked FAQ is already active, close it (set to null), otherwise set to the clicked FAQ's index
 const toggleFAQ = (index: number) => {
setActiveFAQ(activeFAQ === index ? null : index);
};

  const packages = ["Basic", "Premium", "Standard"];
  const features: Record<string, string[]> = {
    premium: ["Premium 1", "Premium 2", "Premium 3"],
    standard: ["Standard1", "Standard2", "Standard3"],
    basic: ["Basic1", "Basic2", "Basic3"],
  };

  return (
    <div>
      <section id="packages">
        <h2 className="text-3xl">Packages</h2>
        <h3 className="text-center font-medium mb-12">
          Pick the plans that right for you!
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-start gap-10">
          {packages.map((pack, index) => (
            <div key={index} className="bg-blue-gray-50 rounded-md p-3 md:w-full sm:w-2/3 sm:mx-auto">
              <div className="packages">
                <p className={`package  ${pack.toLowerCase() === 'standard'? 'bg-[#FF939D]  text-darkRed font- hover:bg-[#FF6F7D] font-bold': 'bg-red-500 hover:bg-red-400 text-white'} p-5 rounded-md text-center  font-light text-2xl`}>
                  {pack}
                </p>
                <div className="">
                  {/* Accordion Header */}
                  <div
                    className="packages flex justify-between items-center my-2 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5 className="py-4">Features</h5>
                    <span
              className={`text-xl transition-transform duration-300 transform ${
                activeFAQ === index ? "rotate-45" : "rotate-0"
              }`}
            >
              {activeFAQ === index ? <DownIcon/> : <UpIcon/>}
            </span>
                  </div>
                  {/* smooth transition */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      activeFAQ === index ? "h-24" : "h-0"
                    }`}
                  >
                    <div className="p-2">
                      {activeFAQ === index &&
                        features[pack.toLowerCase()].map(
                          (feature: string, i: number) => (
                            <p key={i} className="mb-0">
                              ● {feature}
                            </p>
                          )
                        )}
                    </div>
                  </div>
                </div>
              </div>
              <button className="mt-3 px-3 py-2 w-full mx-auto bg-blue-gray-50 border border-red-500 rounded-full hover:bg-red-300 transition duration-300 ease-in-out">
                Select This Plan
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Packages;
