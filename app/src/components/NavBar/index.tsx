"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PersonIcon from "public/icons/PersonIcon";
import { useCloseOnOutsideClick } from "@/hooks/useOutsideClick";
import { useUI } from "@/context/PopUpContext";
import Image from "next/image";

function NavBar() {
  const { isProfileOpen, setIsProfileOpen } = useUI();
  const desktopButtonRef = useRef<HTMLButtonElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const loginMenuRef = useRef<HTMLDivElement>(
    null as unknown as HTMLDivElement
  );
  // State to manage the visibility of the navbar (hide on scroll down, show on scroll up)
  const [showNavbar, setShowNavbar] = useState(true);
  //current page active or not active
  // const [isActive, setIsActive] = useState(false);//optional for future change
  // Ref to store the last scroll position
  const lastScrollY = useRef(0);
  // Threshold (in pixels) before toggling the navbar
  const SCROLL_DELTA_THRESHOLD = 250;

  // storing router of page
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isPlans = pathname === "/plans";
  const isDestination = pathname === "/destination";

  useCloseOnOutsideClick(
    isProfileOpen,
    loginMenuRef,
    [
      desktopButtonRef as React.RefObject<HTMLElement>,
      mobileButtonRef as React.RefObject<HTMLElement>,
    ],
    () => setIsProfileOpen(false)
  );

  // Helper function to toggle menu
  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsProfileOpen(!isProfileOpen);
  };

  // screen scrolling handlers
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set background change if any scrolling has occurred
      setIsScrolled(currentScrollY > 0);

      // If near the top, always show the navbar and reset the baseline
      if (currentScrollY < SCROLL_DELTA_THRESHOLD) {
        setShowNavbar(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Calculate the difference from the last baseline
      const diff = currentScrollY - lastScrollY.current;

      if (diff > SCROLL_DELTA_THRESHOLD) {
        // If the user scrolled down by more than the threshold, hide the navbar
        setShowNavbar(false);
        lastScrollY.current = currentScrollY; // reset baseline
      } else if (diff < -SCROLL_DELTA_THRESHOLD) {
        // If the user scrolled up by more than the threshold, show the navbar
        setShowNavbar(true);
        lastScrollY.current = currentScrollY; // reset baseline
      }
      // If the difference is less than the threshold, do nothing
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative mb-[64px]`}>
      <nav
        className={`font-semibold bg-[#e1306c] border-b-2 border-b-gray-600 ${
          isHomePage ? "text-black" : "text-black"
        } fixed top-0 left-0 w-screen z-50 transition-all duration-500 ease-in-out
        ${
          isScrolled
            ? "bg-[rgb(200,130,130)]/95 shadow-lg backdrop-blur-sm"
            : "bg-transparent"
        }
            ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* translate-y-0 (visible) and -translate-y-full (hidden) */}
        <div className="container xl: lg-plus:pl-[29px]">
          <div className="flex justify-between items-center h-16">
            {/* Branch Section */}
            <div className="flex items-center">
              {/* <span className="text-2xl font-bold font-workSans">
                Destination Wedding
              </span> */}
              <Image
                alt="nav-logo"
                className="object-center bg-cover"
                src={`${isHomePage? `/icons/nav-icon.png`:`/icons/nav-icon.svg`}`}
                width={40}
                height={40}
              />
            </div>

            {/* Centered Menu Links */}
            <div className="hidden md:flex justify-center flex-1 space-x-8 text-[#f8f5f1]">
              <Link href="/" className=" relative group active">
                Home
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AD1616] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>

              <Link href="/plans" className="relative group">
                Plans
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AD1616] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
              <Link href="#destination" className="relative group">
                Destination
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AD1616] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
              <Link href="#contact" className="relative group">
                Contact Us
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#AD1616] group-hover:w-full transition-all duration-300 ease-in-out"></span>
              </Link>
            </div>

            {/* Profile Section */}
            <div className="hidden md:flex items-center gap-6">
              <div
                className="favorite-icon font-semibold cursor-pointer"
                title="Favourites"
              >
                <span className={`${isHomePage || isPlans ? `md:hidden lg:block`:`hidden`}`}>
                  <Image
                    src="/icons/fav-list.png"
                    alt="fav-list"
                    width={30}
                    height={30}
                  />
                  {/* <FavIcon fontSize={"large"} className="hover:text-red-800"/> */}
                </span>
              </div>
              <button
                className={`${
                  isHomePage
                    ? "bg-white text-red-900 rounded-2xl hover:bg-red-900 hover:text-white transition-all duration-300"
                    : "bg-black text-white rounded-lg hover:bg-gray-800"
                } px-2 py-2  font-medium  transition shadow-sm lg:block hidden`}
              >
                Get Started
              </button>

              <button
                ref={desktopButtonRef}
                className={` border  shadow-md relative flex justify-center items-center gap-2 h-[29px] rounded-2xl text-red-900 bg-white transition-all duration-200 transform hover:scale-95 lg:block ${
                  isProfileOpen ? "rounded-b-none" : "rounded-2xl"
                }`}
                onClick={toggleMenu}
              >
                <PersonIcon />

                {isProfileOpen && (
                  <div
                    ref={loginMenuRef}
                    className="absolute text-xs right-0 top-[50px] w-[65px] bg-white text-black rounded-none shadow-lg transition rounded-t-none rounded-b-md"
                  >
                    {" "}
                    <Link
                      href="/signup"
                      className="block px-1 py-4 text-sm hover:bg-red-900 hover:text-white"
                    >
                      Sign up
                    </Link>
                    <div className="border-b border-gray-300"></div>
                    <Link
                      href="/login"
                      className="block px-1 py-4 text-sm hover:bg-red-900 hover:text-white"
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
                ref={mobileButtonRef}
                onClick={toggleMenu}
                className={`inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-600 focus:outline-none`}
              >
                <span className="sr-only">Open main menu</span>
                {isProfileOpen ? (
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
            isProfileOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="bg-gray-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                // onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                href="#packages"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                // onClick={() => setIsOpen(false)}
              >
                Plans
              </a>
              <a
                href="#destination"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                // onClick={() => setIsOpen(false)}
              >
                Destination
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                // onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
              <Link
                href="/login"
                className="block px-3 py-2 text-white text-base font-medium hover:bg-gray-700 rounded-md"
                // onClick={() => setIsOpen(false)}
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
