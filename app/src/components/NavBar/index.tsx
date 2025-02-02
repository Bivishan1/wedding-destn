"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { FavIcon, MenuIcon } from "public/icons";

// import PopUpHandle from "../../../../config/PopUpHandle";
// import { usePopup } from "@/context/PopUpContext";

function NavBar() {
  // const { openPopup, closePopup } = usePopup();

  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // For profile dropdown
  const [isScrolled, setIsScrolled] = useState(false);
  // const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const loginMenuRef = useRef<HTMLDivElement>(null);

  // storing router of page
  // const router = useRouter();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  //closing popup events
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (buttonRef.current?.contains(e.target as Node)) return;
      if (
        loginMenuRef.current &&
        !loginMenuRef.current.contains(e.target as Node)
      ) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("resize", () => setIsProfileOpen(false));
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", () => setIsProfileOpen(false));
    };
  }, [isProfileOpen]);
  // <PopUpHandle firstRef={buttonRef} secondRef={loginMenuRef} isOpen={isProfileOpen} setIsOpen={setIsProfileOpen}/>

  // screen scrolling handlers
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <nav
        className={`font-semibold ${
          isHomePage ? "text-white" : "text-black"
        } text-black fixed top-0 left-0 w-screen z-50 border border-red-600 transition-all duration-300
        ${
          isScrolled
            ? "bg-[rgb(220,130,130)]/95 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Branch Section */}
            <div className="flex items-center">
              <span className="text-2xl font-bold font-workSans">
                Destination Wedding
              </span>
            </div>

            {/* Centered Menu Links */}
            <div className="hidden md:flex justify-center flex-1 space-x-8">
              <Link href="/" className=" relative group text-lg active">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>

              <Link href="/plans" className="  text-lg relative group">
                Plans
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
              <Link href="#destination" className="  text-lg relative group">
                Destination
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
              <Link href="#contact" className="  text-lg relative group">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </div>

            {/* Profile Section */}
            <div className="hidden md:flex items-center gap-6">
              <div className="favorite-icon font-semibold cursor-pointer" title="Favourites">
                <FavIcon fontSize={'large'} className="hover:text-red-800"/>
              </div>
              <button className="text-red-900 bg-white px-3 py-2 rounded-md font-semibold hover:bg-gray-400 transition shadow-sm">
                Get Started
              </button>

              <button
                ref={buttonRef}
                className={`bg-red-900 px-3 py-2 rounded-md shadow-md text-white relative flex gap-2 ${
        isProfileOpen ? 'rounded-t-md rounded-b-none' : 'rounded-md'}`} 
        onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <MenuIcon />
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
                  <div
                    ref={loginMenuRef}
                    className="absolute right-0 top-[41px] w-[80px] bg-white text-black rounded-none shadow-lg transition rounded-t-none rounded-b-md"
                  >   <Link
                      href="/signup"
                      className="block px-5 py-2 text-sm hover:bg-red-900 hover:text-white"
                    >
                      Signup
                    </Link>
                    <div className="border-b border-gray-300"></div>
                    <Link
                      href="/login"
                      className="block px-4 py-2 text-sm hover:bg-red-900 hover:text-white"
                    >
                      Login
                    </Link>
                 
                  </div>
                )}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-600 focus:outline-none"
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
        <div
          className={`md:hidden fixed top-16 left-0 w-full transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="bg-gray-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#packages"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Plans
              </a>
              <a
                href="#destination"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Destination
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
              <Link
                href="/login"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
