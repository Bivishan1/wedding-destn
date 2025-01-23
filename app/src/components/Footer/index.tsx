'use client';
import Link from "next/link";
import React from "react";
import  {LinkedInIcon}  from "../../../../public/icons";
import { FacebookSharpIcon } from "../../../../public/icons";
import { InstagramIcon } from "../../../../public/icons";

const Footer = () => {
    const quickLinks = ['Home', 'About', 'Contact', 'Plan', 'Login', 'Get Started'];
  return (
    
      <div id="contact" className="container py-7 ">
        <div className="footer-info flex flex-wrap gap-36">
          <div className="footer-desc w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <div className="text-2xl mb-10 font-medium"><i>Destination Weeding</i> </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              fuga qui illum nemo quam! Ad enim totam accusamus voluptate sequi,
              ex laborum repudiandae iure placeat officia quia necessitatibus
              odio voluptatum.
            </p>
          </div>
          <div className="get-touch mt-[-30px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3>Get In Touch</h3>
            <div className="get-touch-contact py-10">
            <p>Call: +977 9841234567</p>
            <p>Email:support@podhaa.com</p>

            </div>
            <h3>
              <Link href="/privacy"><u>Privacy</u></Link>
            </h3>
            <h3 className="py-5">
              <Link href="/terms"><u>Terms Of Use</u></Link>
            </h3>
            <h3>
              <Link href="/accessibility"><u>Accessibility</u></Link>
            </h3>
          </div>
          <div className="quick-links mt-[-60px] w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <h3 className="mb-8">Quick Links</h3>
            {quickLinks.map((link, index) => (
                <h4 key={index} className="mb-6 font-medium"><Link href={`/${link.toLowerCase()}`}>{link}</Link></h4>
                    ))}
          </div>
        </div>
        <div className="footer-bottom flex flex-col md:flex-row md:justify-start justify-center items-center">
            <div className="bottom-one text-center md:text-left">
                <h3>Connect With Us</h3>
            <div className="icons flex flex-wrap justify-center md:justify-start gap-8">
                <button className="">
                <LinkedInIcon/> </button>
                <button className="btn"><FacebookSharpIcon/>
                 </button>
                <button className="btn btn"><InstagramIcon/>
                 </button>
                
            </div>
            </div>

        </div>
        <p className="text-center lg:text-center font-medium mt-4 md:mt-0 md:ml-4 lg:mx-auto">
        Podhaa @ All right reserve
    </p>      </div>
   
  );
};

export default Footer;
