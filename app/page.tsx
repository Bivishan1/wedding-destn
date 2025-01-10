import Image from "next/image";
import Heart from "./src/components/atoms/Heart";
import Trending from "./src/components/molecules/Trending";
import NavBar from "./src/components/molecules/NavBar";
import Packages from "./src/components/molecules/Packages";
import Footer from "./src/components/organisms/Footer";
import GoToTop from "./src/components/atoms/GoToTop";
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
        className="hero-section relative top-0 bg-hero bg-no-repeat bg-center bg-cover h-[120vh] mt-16 pt-16 text-white flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-6xl font-light mb-5">
          Plan Your Destination Wedding
        </h2>
        <button className="text-white border-none px-5 py-4 rounded cursor-pointer hover:bg-red-500 bg-red-900">
          <a href="#packages"> See Plans</a>
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

      <Packages />
      <section className="cta">
        <div className="cta-content">
          <h1>Customize yours</h1>
          <button className="plan-button">Plan With Us</button>
        </div>
      </section>

      <div className="section p-10 mt-7">
        <div className="flex gap-[20%] justify-center items-center h-80">
          <div className="text-info w-2/5 text-4xl">
              <p>Plan your wedding with sweeter memories and better view.
          We intertwine tradition and adventure.</p>
          </div>
       
          <Image
          className="w-2/5 h-[120%]"
            src="/img/coswed.png"
            alt="Customized Wedding"
            width={450} height={350}
          />
        </div>
        <div className="faq-section mt-20">
          <h3 className="mb-10">Commonly asked questions</h3>
          <div className="faq-item border-b border-b-white mb-5">
            <div className="faq-question faq-question py-4 flex justify-between items-center cursor-pointer">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
<GoToTop/>
      <Footer/>
    </div>
  );
}
