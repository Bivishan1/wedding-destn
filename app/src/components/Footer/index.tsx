"use client";
import Link from "next/link";
import React from "react";
import { LinkedInIcon } from "../../../../public/icons";
import { FacebookSharpIcon } from "../../../../public/icons";
import { InstagramIcon } from "../../../../public/icons";

const Footer = () => {
  const quickLinks = [
    "Home",
    "About",
    "Contact",
    "Plan",
    "Login",
    "Get Started",
  ];
  return (
    <footer id="contact" className="pt-24 pb-20 bg-gray-200">
      <div className="footer container">
        <div className="footer-info grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-36">
          <div className="footer-desc w-full">
            <div className="text-2xl mb-10 font-medium">
              <i>Destination Weeding</i>{" "}
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              fuga qui illum nemo quam! Ad enim totam accusamus voluptate sequi,
              ex laborum repudiandae iure placeat officia quia necessitatibus
              odio voluptatum.
            </p>
          </div>
          <div className="get-touch w-full">
            <h3>Get In Touch</h3>
            <div className="get-touch-contact py-10">
              <p>Call: +977 9841234567</p>
              <p>Email:support@podhaa.com</p>
            </div>
            <h3>
              <Link href="/privacy">
                <u>Privacy</u>
              </Link>
            </h3>
            <h3 className="py-5">
              <Link href="/terms">
                <u>Terms Of Use</u>
              </Link>
            </h3>
            <h3>
              <Link href="/accessibility">
                <u>Accessibility</u>
              </Link>
            </h3>
          </div>
          <div className="quick-links w-full">
            <h3 className="mb-8">Quick Links</h3>
            {quickLinks.map((link, index) => (
              <h4 key={index} className="mb-6 font-medium hover:underline">
                <Link href={`/${link.toLowerCase()}`}>{link}</Link>
              </h4>
            ))}
          </div>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row lg:justify-start justify-center items-center mt-5">
          <div className="bottom-one text-center md:text-left">
            <h3>Connect With Us</h3>
            <div className="icons flex flex-wrap justify-center md:justify-start gap-8">
              <button className="">
                <LinkedInIcon />{" "}
              </button>
              <button className="btn">
                <FacebookSharpIcon />
              </button>
              <button className="btn btn">
                <InstagramIcon />
              </button>
            </div>
          </div>
        </div>
        <p className="text-center lg:text-center font-medium mt-4 md:mt-0 md:ml-4 lg:mx-auto">
          Podhaa @ All right reserve
        </p>
      </div>
    </footer>
  );
};

export default Footer
