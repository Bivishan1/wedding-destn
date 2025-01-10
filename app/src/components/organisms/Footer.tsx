'use client';
import Link from "next/link";
import React from "react";
import  {LinkedInIcon}  from "../../icons";
import { FacebookSharpIcon } from "../../icons";
import { InstagramIcon } from "../../icons";

const Footer = () => {
    const quickLinks = ['Home', 'About', 'Contact', 'Plan', 'Login', 'Get Started'];
  return (
    
      <div id="contact" className="footer-section px-24 py-7 ">
        <div className="footer-info flex gap-48">
          <div className="footer-desc flex-1">
            <div className="text-2xl mb-10 font-medium"><i>Destination Weeding</i> </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
              fuga qui illum nemo quam! Ad enim totam accusamus voluptate sequi,
              ex laborum repudiandae iure placeat officia quia necessitatibus
              odio voluptatum.
            </p>
          </div>
          <div className="get-touch mt-[-30px]">
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
          <div className="quick-links mt-[-60px]">
            <h3 className="mb-8">Quick Links</h3>
            {quickLinks.map((link, index) => (
                <h4 key={index} className="mb-6 font-medium"><Link href={`/${link.toLowerCase()}`}>{link}</Link></h4>
                    ))}
          </div>
        </div>
        <div className="footer-bottom px-11">
            <div className="bottom-one">
                <h3>Connect With Us</h3>
            <div className="icons flex gap-8">
                <button className="">
                <LinkedInIcon/> </button>
                <button className="btn"><FacebookSharpIcon/>
                 </button>
                <button className="btn btn"><InstagramIcon/>
                 </button>
                
            </div>
            </div>
            <p className="text-center font-medium">Podhaa @ All right reserve</p>

        </div>
      </div>
   
  );
};

export default Footer;
