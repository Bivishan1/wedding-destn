"use client";
import React, { useState } from "react";
import { UpIcon } from "../../../../public/icons";
import { DownIcon } from "../../../../public/icons";
const Packages = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

 // Toggle logic: If clicked FAQ is already active, close it (set to null), otherwise set to the clicked FAQ's index
 const toggleFAQ = (index: number) => {
setActiveFAQ(activeFAQ === index ? null : index);
};

  const packages = ["Premium", "Standard", "Basic"];
  const features: Record<string, string[]> = {
    premium: ["Feature 1", "Feature 2", "Feature 3"],
    standard: ["Standard1", "Standard2", "Standard3"],
    basic: ["Basic1", "Basic2", "Basic3"],
  };

  return (
    <div>
      <section id="packages" className="container">
        <h2>Packages</h2>
        <h3 className="text-center font-normal mb-12">
          Pick the plans that right for you!
        </h3>
        <div className="flex flex-wrap justify-center items-start m-auto gap-10">
          {packages.map((pack, index) => (
            <div key={index} className="bg-blue-gray-50 rounded-md p-3 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="packages">
                <p className="package bg-red-500 hover:bg-red-400 p-5 rounded-md text-center text-white font-light text-2xl">
                  {pack}
                </p>
                <div className="">
                  {/* Accordion Header */}
                  <div
                    className="packages flex justify-between items-center my-2 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5 className="font-semibold">Features</h5>
                    <span className="text-xl">
                      {activeFAQ === index ? <DownIcon /> : <UpIcon />}
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
