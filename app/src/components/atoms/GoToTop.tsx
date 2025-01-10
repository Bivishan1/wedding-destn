'use client';
import { useState, useEffect } from 'react';
import React from 'react'

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
          className={`fixed bottom-5 right-5 bg-red-900 text-white p-3 rounded-full shadow-lg hover:bg-red-500 transition-opacity duration-300 ${showGoToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
          ↑ Top
        </button>
      )}
    </div>
  )
}

export default GoToTop