import Image from "next/image";
import Heart from "@/components/atoms/Heart";
import Trending from "@/components/molecules/Trending";
import Packages from "@/components/molecules/Packages";
import GoToTop from "@/components/atoms/GoToTop";
import FAQ from "@/components/FAQ";
import Link from "next/link";
import YourDestination from "@/components/molecules/YourDest";
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

  return (
    <div>
      <main
        id="home"
        className="relative top-0 bg-hero bg-no-repeat bg-center 
        bg-cover h-[120vh] flex flex-col 
        justify-center items-center text-center py-12 lg:py-20"
      >
        <div className="container">
          <div className="text-center space-y-6">
            <h2 className="text-6xl mb-5 sm:text-4xl lg:text-5xl font-bold leading-tight text-white font-samarKan">
              Plan Your Destination Wedding
            </h2>
            <button className="text-red-800 font-semibold border-none px-3 py-4 rounded cursor-pointer hover:bg-gray-400 bg-white">
              <Link href="#packages"> See Plans</Link>
            </button>
          </div>
        </div>
      </main>

      <section className="your-destination container m mb-20">
        <h3 className="my-16 text-4xl">Your Destination</h3>
        <div className="your-destination-info flex flex-col md:flex-row gap-10">
          {yourDestinationData.map((data, index) => (
            <YourDestination key={index} {...data} />
          ))}
        </div>
      </section>

      <div id="destination" className="container h-2/4 py-12">
        <div className="trending">
          <div className="header mb-5 flex justify-between items-center">
            <h2 className="text-4xl">Top Trending Wedding Destinations</h2>
          </div>

          <div className="trending-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Chandragiri Resort", "Venue 1", "Venue 2", "Venue 3"].map(
              (title, index) => (
                <div
                  key={index}
                  className="destination-card flex flex-col rounded-lg overflow-hidden shadow-md bg-white"
                >
                  <div className="destination w-full relative bg-[#f0f0f0] rounded-2xl">
                    <Trending />
                    <Heart className="cursor-pointer" />
                  </div>
                  <div className="card-content my-4">
                    <h3>{title}</h3>
                    <p>
                      Description: this is a description part Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Dolore repellendus
                      assumenda eveniet asperiores sint sunt, esse, vero
                      veritatis dolores dolorem, perferendis.
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <h2 className="text-4xl">Top selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-5 mb-10">
          {["Destination", "Decoration", "Food", "Mocktail/Cocktail"].map(
            (category, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 rounded-lg"
              >
                <div className="w-full h-[230px] flex flex-col justify-center items-center">
                <Image
                  className="h-full w-full object-cover rounded-lg mb-2 "
                  src={`/img/venue${index + 1}.png`}
                  alt={category}
                  width={300}
                  height={310}
                /></div>
                <p className="font-bold">{category}</p>
              
              </div>
            )
          )}
        </div>
      </div>
      <div className="container">
        <Packages />
      </div>
      <div className="customize container border-y-gray-600 border-y-2 my-20">
        <div className="customize-info flex gap-4 items-center p-9">
          <div className="customize-text flex flex-col gap-20 justify-center items-center">
            <h1 className="text-2xl text-center font-thin md:text-8xl font-samarKan" style={{color:'rgba(130, 2, 13, 0.4)'}}>
              Customize yours
            </h1>
            <button className="plan-button w-[50%] hover:shadow-2xl text-3xl md:text-2xl bg-darkRed text-white py-[12px] px-[30px] rounded-md border-none">
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
            <div className="customize-two-images flex flex-row md:flex-col w-full relative gap-8">
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
            <p className="text-3xl">
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
        <div className="faq-section mt-20 flex flex-wrap items-center">
          <div className="faq-1 flex-1">

          <h3 className="text-4xl">Frequently <br/> Asked <br/> Questions</h3>
          <small>cause our website is transparent</small>
          </div>
          <div className="faq-item flex-1 border-b border-b-white mb-5">
            <div className="">
              <FAQ />
            </div>
          </div>
        </div>
        
      </div>
      <GoToTop />
    </div>
  );
}
