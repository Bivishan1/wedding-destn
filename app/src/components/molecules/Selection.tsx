import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Selection = () => {
  return (
    <>
      {["Destination", "Decoration", "Food", "Mocktail/Cocktail"].map(
        (category, index) => (
          <motion.div
            key={index}
            className="group relative bg-white shadow-lg p-4 rounded-lg hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="w-full h-[230px] flex flex-col justify-center items-center relative overflow-hidden rounded-lg">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={`/img/venue${index + 1}.png`}
                  alt={category}
                  width={300}
                  height={310}
                />
              </motion.div>

              {/* Gray Blur Overlay (appears on hover) */}
              <motion.div
                className="absolute inset-0 bg-gray-200"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.3 }}
                transition={{ duration: 0.2 }}
              />

              {/* Hover Arrow Indicator */}
              <motion.button
                className="absolute bottom-4 right-4 p-1.5 bg-white rounded border border-gray-200 shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
            <motion.p
              className="font-bold mt-2"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              {category}
            </motion.p>
          </motion.div>
        )
      )}
    </>
  );
};

export default Selection;
