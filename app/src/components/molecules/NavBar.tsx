"use client";
import Link from "next/link";
import React, { useState, useEffect ,useRef } from "react";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile dropdown
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: { target: unknown; }) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }  ,[])

  return (
    <div>
      <nav className="bg-gray-500 font-normal text-black fixed top-0 left-0 w-full z-50 border border-red-600 rounded-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Branch Section */}
            <div className="flex items-center">
              <span className="text-2xl font-bold">Destination Wedding</span>
            </div>

            {/* Centered Menu Links */}
            <div className="hidden md:flex justify-center flex-1 space-x-8">
              <a
                href="#home"
                className=" relative group text-lg active"
              >
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
              <a
                href="#packages"
                className="  text-lg relative group"
              >
                Plans
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
              <a
                href="#destination"
                className="  text-lg relative group"
              >
                Destination
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
              <a
                href="#contact"
                className="  text-lg relative group"
              >
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </a>
            </div>

            {/* Profile Section */}
            <div className="hidden md:flex items-center space-x-7">
              <button className="text-red-900 bg-white px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition shadow-sm">
                Get Started
              </button>

              <button
                className="bg-white px-3 py-2 rounded-md shadow-md text-black relative"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                {isProfileOpen && (
                  <div className="absolute right-0 mt-4 w-48 bg-gray-800 rounded-md shadow-lg transition" ref={dropdownRef}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Account
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      Settings
                    </a>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      LogIn
                    </Link>
                  </div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                href="#home"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700"
              >
                Home
              </a>
              <a
                href="#packages"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700"
              >
                Plans
              </a>
              <a
                href="#destination"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700"
              >
                Destination
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700"
              >
                Contact Us
              </a>
              <button className="block w-full text-left px-3 py-2 bg-gray-800 text-white text-base font-medium hover:bg-gray-700">
                Profile
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
