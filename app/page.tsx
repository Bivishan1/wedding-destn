import Image from "next/image";
import Heart from "./src/components/atoms/Heart";
import Trending from "./src/components/molecules/Trending";
import NavBar from "./src/components/molecules/NavBar";
// import Button from '@mui/material/Button';
// import { Button } from "@material-tailwind/react";
// import {Button} from "./components/MyBtn";
// import { Button}  from './MTailwind';

// import Trending from "./components/Trending";
import FAQ from "./src/components/molecules/FAQ";
export default function Home() {
  return (
    <div>
      <NavBar />

      <section
        id="home"
        className="hero-section relative top-0 bg-[url('/img/wed.jpg')] bg-no-repeat bg-center bg-cover h-[120vh] mt-16 pt-16 text-white flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-6xl font-light mb-5">
          Plan Your Destination Wedding
        </h2>
        <button className="text-white border-none px-5 py-4 rounded cursor-pointer hover:bg-red-500 bg-red-900">
          See Plans
        </button>
      </section>

      <main className="info flex flex-col md:flex-row w-[90%] gap-16 mx-auto mt-20">
        <div className="info-first flex-1">
          {/* text-info-first */}
          <h3 className="font-semibold text-3xl mb-8">Your Destination</h3>

          <div className="text-info flex gap-16 ml-[-20px]">
            <p className="text-sm w-[50%] text-justify flex">
              <span className="mr-3"> ● </span>
              Nepal is home to stunning landscapes, from the snow-capped peaks
              of the Himalayas to lush green valleys and serene lakes.
            </p>

            <p className="text-sm w-[40%] text-justify flex">
              <span className="mr-3"> ● </span>
              Nepal is an enchanting and unique destination for a wedding,
              offering a blend of natural beauty, rich culture, and spiritual
              significance.
            </p>
          </div>
          {/* text-info-first end */}
        </div>
        <div className="info-second flex-1">
          <div className="flex mt-7 gap-16">
            <p className="text-sm w-[50%] text-justify flex">
              <span className="mr-3"> ● </span>
              With its combination of natural wonders, cultural richness,
              affordability, and hospitality, Nepal offers a wedding experience
              like no other, making it the perfect destination for couples
              seeking a unique and unforgettable celebration of love.
            </p>

            <p className="text-sm w-[50%] text-justify flex">
              <span className="mr-3"> ● </span>
              Our website provides everything for your dream wedding
              abroad—curated packages, beautiful venues, trusted vendors, travel
              support, and planning tools. Enjoy seamless coordination, legal
              guidance, and 24/7 customer support. Let us make your wedding
              unforgettable!
            </p>
          </div>
        </div>
      </main>

      <div id="destination" className="container h-2/4">
        <div className="header mb-5 flex justify-between items-center">
          <h2 className="text-4xl">Top Trending Wedding Destinations</h2>
          <button className="view-all bg-none border-none text-red-800 cursor-pointer">
            View all
          </button>
        </div>

        <div className="trending-grid">
          {["Chandragiri Resort", "Venue 1", "Venue 2", "Venue 3"].map(
            (title, index) => (
              <div
                key={index}
                className="destination-card flex flex-col items-center rounded-lg overflow-hidden shadow-md bg-white"
              >
                <div className="destination w-full relative bg-[#f0f0f0] rounded-2xl">
                  <Trending />
                  <Heart />
                </div>
                <div className="card-content">
                  <h3>{title}</h3>
                  <p>Description</p>
                </div>
              </div>
            )
          )}
        </div>

        {/* <div className="trending-grid">
          <Trending/>
        </div> */}

        <h2 className="text-4xl">Top selection</h2>
        <div className="selection-grid">
          {["Destination", "Decoration", "Food", "Mocktail/Cocktail"].map(
            (category, index) => (
              <div key={index} className="selection-card">
                <Image
                  src={`/img/venue${index + 1}.jpg`}
                  alt={category}
                  width={300}
                  height={200}
                />
                <p>{category}</p>
              </div>
            )
          )}
        </div>
      </div>

      <section id="packages" className="section container">
        <h2 >Packages</h2>
        <h3 className="text-center">Pick the plans that right for you!</h3>
        <div className="packages-info">
          <div className="package">Premium</div>
          <div className="package">Standard</div>
          <div className="package">Basic</div>
        </div>
      </section>
      <section className="cta">
        <div className="cta-content">
          <h1>Customize yours</h1>
          <button className="plan-button">Plan With Us</button>
        </div>
      </section>

      <div className="customize-section">
        <div className="customize-text">
          <h2>Plan your wedding with sweeter memories and better view.</h2>
          <p>We intertwine tradition and adventure.</p>

          <div className="faq-section mt-20">
            <h3 className="mb-10">Commonly asked questions</h3>
            <div className="faq-item border-b border-b-white mb-5">
              <div className="faq-question faq-question py-4 flex justify-between items-center cursor-pointer">
                <FAQ />
              </div>
            </div>
          </div>
        </div>
        <div className="customize-image">
          <Image
            src="/img/customize-wedding.jpg"
            alt="Customized Wedding"
            width={600}
            height={400}
          />
        </div>
      </div>

      <footer id="contact">
        <div className="footer-info">
          <div className="footer-column">
            <h4>LOGO</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="#">Home</a>
            <a href="#">Destination</a>
            <a href="#">Contact</a>
            <a href="#">Plan</a>
          </div>
          <div className="footer-column">
            <h4>Get in touch</h4>
            <p>Call: +977 9841234567</p>
            <p>Email: support@venue.com</p>
          </div>
          <div className="footer-column">
            <h4>Legal</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Accessibility</a>
          </div>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            borderTop: "1px solid #eee",
          }}
        >
          <p>Connect with us</p>
          <div className="social-links">
            <a href="#">
              <Image
                src="/img/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/img/instagram.jpg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a href="#">
              <Image
                src="/img/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
