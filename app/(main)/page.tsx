"use client";
import Image from "next/image";
// import  "@/styles/global.css";
// import Heart from "@/components/atoms/Heart";
import CarouselC from "@/components/molecules/CarouselC";
import Packages from "@/components/molecules/Packages";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import YourDestination from "@/components/molecules/YourDest";
import Selection from "@/components/molecules/Selection";

export default function Home() {
  const yourDestinationData = [
    {
      icon: "/icons/natural.png",
      alt: "Natural Beauty",
      heading: "Natural Wonders",
      description:
        "Nepal is home to stunning landscapes, from the snow-capped peaks of the Himalayas to lush green valleys and serene lakes.",
      extraClass: "natural", // optional additional class if needed
    },
    {
      icon: "/icons/location.png",
      alt: "Location",
      heading: "A Wedding Wonderland",
      description:
        "Nepal is an enchanting and unique destination for a wedding, offering a blend of natural beauty, rich culture, and spiritual significance.",
      extraClass: "location",
    },
    {
      icon: "/icons/ring.png",
      alt: "Ring",
      heading: "Complete Wedding Package",
      description:
        "We offer full wedding packages, venues, vendors, travel support and 24/7 support to make your wedding unforgettable.",
      extraClass: "ringg",
    },
  ];

  const venues = ["Chandragiri Resort", "Venue 1", "Venue 2", "Venue 3"];

  // const venueDescriptions:Record<string, string> = {
  //   "Chandragiri Resort": "Experience luxury at Chandragiri Resort with breathtaking views and top-notch amenities.",
  //   "Venue 1": "A beautiful event space perfect for weddings, conferences, and celebrations.",
  //   "Venue 2": "A cozy retreat with modern facilities, ideal for corporate gatherings and private events.",
  //   "Venue 3": "A scenic getaway featuring lush greenery and state-of-the-art event spaces.",
  // };

  const imageMap: Record<string, string[]> = {
    "Chandragiri Resort": [
      "/img/trending2.jpg",
      "/img/trending1.jpg",
      "/img/trending3.jpg",
    ],
    "Venue 1": [
      "/img/trending1.jpg",
      "/img/trending2.jpg",
      "/img/trending3.jpg",
    ],
    "Venue 2": [
      "/img/trending3.jpg",
      "/img/trending2.jpg",
      "/img/trending1.jpg",
    ],
    "Venue 3": ["/img/venue3.png", "/img/venue2.png", "/img/venue1.png"],
  };

  return (
    <div className="">
      <main
        id="home"
        className="relative w-full h-[124vh] bg-hero bg-no-repeat bg-center 
        bg-cover flex flex-col 
        justify-center items-center text-center py-12 lg:py-20"
      >
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-6xl mb-5 sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-samarKan">
              Plan Your Destination Wedding
            </h2>
            <button className="text-red-900 hover:bg-red-900 hover:text-white transition-all duration-300 transform font-semibold border-none px-3 py-3 rounded-2xl cursor-pointer  bg-white">
              <Link href="#packages" className="text-lg font-sans">
                {" "}
                See Plans
              </Link>
            </button>
          </div>
        </div>
      </main>

      <section className="your-destination container mb-20 relative">
        {/* Base gradient background */}
        <div
          className="absolute -inset-x-[30%] -inset-y-[30%] "
          style={{
            background: `linear-gradient(
      to bottom,
      transparent,
      #e76363 30%,
      #e76363 70%,
      transparent
    )`,
            opacity: 0.3,
          }}
        />

        {/* Grid with vertical fade effect */}
        <div
          className="absolute -inset-x-[30%] -inset-y-[30%]"
          style={{
            background: `
            linear-gradient(to right, #2b2b4a 1px, transparent 1px),
            linear-gradient(to bottom, #2b2b4a 1px, transparent 1px)
          `,
            backgroundSize: "20px 20px",
            mask: `
            linear-gradient(
              to bottom,
              transparent,
              black 20%,
              black 80%,
              transparent
            )
          `,
            WebkitMask: `
            linear-gradient(
              to bottom,
              transparent,
              black 20%,
              black 80%,
              transparent
            )
          `,
            opacity: 0.07,
            zIndex: 2,
          }}
        />

        <h3 className="my-16 text-4xl relative z-10">Your Destination</h3>

        <div className="your-destination-info flex flex-col md:flex-row gap-10 relative z-10">
          {yourDestinationData.map((data, index) => (
            <YourDestination key={index} {...data} />
          ))}
        </div>
      </section>

      <div id="destination" className="container h-2/4 py-12">
        <div className="trendingg">
          <div className="header mb-5 flex justify-between items-center">
            <h2 className="text-4xl">Top Trending Wedding Destinations</h2>
          </div>
          <div className="trending-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {venues.map((venue, index) => (
              <CarouselC key={index} title={venue} imageMap={imageMap} />
            ))}
          </div>
        </div>

        <h2 className="text-4xl">Top selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg-plus:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-5 mb-10">
          <Selection />
        </div>
      </div>
      <div className="container">
        <Packages />
      </div>
      <div className="customize container border-y-gray-600 border-y-2 my-20">
        <div className="customize-info flex flex-col-reverse lg:flex-row sm:flex-col-reverse gap-4 items-center p-9">
          <div className="customize-text flex flex-col gap-6 md:gap-20 justify-center items-center">
            <h1
              className="text-6xl text-center font-thin sm:text-8xl font-samarKan"
              style={{ color: "rgba(130, 2, 13, 0.4)" }}
            >
              Customize yours
            </h1>
            <button className="plan-button w-[70%] sm:w-[50%] hover:shadow-2xl text-xl sm:text-2xl bg-[#82020D] text-white py-[4px] sm:py-[12px] px-[30px] rounded-md border-none">
              Plan With Us
            </button>
          </div>
          <div className="images flex gap-7 items-stretch">
            <div className="customize-image w-full">
              <Image
                className="w-full h-full object-cover"
                src="/img/customize.png"
                alt="Customize 3"
                width={300}
                height={300}
              />
            </div>
            <div className="customize-two-images flex flex-col sm:flex-col w-full relative gap-8">
              <Image
                className="w-full h-full object-cover"
                src="/img/customize1.png"
                alt="Customize 1"
                width={300}
                height={200}
              />
              <Image
                className="w-full h-full object-cover"
                src="/img/customize2.png"
                alt="Customize 1"
                width={300}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}

      <div className="container plan-info mt-7">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12 py-10 h-auto">
          <div className="text-info w-full sm:w-3/4 md:w-2/5 text-2xl overflow-hidden break-words">
            <p className="text-3xl text-gray-800">
              Plan your wedding with sweeter memories and better view. We
              intertwine tradition and adventure.
            </p>
          </div>

          <Image
            className="w-full md:w-1/3 lg:w-1/3 sm:w-2/4 "
            src="/img/coswed.png"
            alt="Customized Wedding"
            width={450}
            height={250}
          />
        </div>
        <div className="faq-section mt-20 flex flex-col md:flex-row flex-wrap gap-4 md:gap-0  items-start md:items-center">
          <div className="faq-1 flex-1">
            <h3 className="text-4xl">
              Frequently <br /> Asked <br /> Questions
            </h3>
            <small>cause our website is transparent</small>
          </div>
          <div className="faq-item flex-1 border-b border-b-white mb-5">
            <div className="">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
