"use client";
import { useState, useEffect } from "react";
import React from "react";

const GoToTop = () => {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {showGoToTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-5 right-5 bg-red-900 text-white p-3 rounded-full shadow-xl hover:bg-red-500 animate-bounce transition-all duration-300 ${
            showGoToTop ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7-7-7 7m7 12V3"
            ></path>
          </svg>
        </button>
      )}
    </div>
  );
};

export default GoToTop;
