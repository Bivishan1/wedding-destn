import Image from "next/image";
import Heart from "@/components/atoms/Heart";
import Trending from "@/components/molecules/Trending";
import Packages from "@/components/molecules/Packages";
import GoToTop from "@/components/atoms/GoToTop";
import FAQ from "@/components/FAQ";
export default function Home() {
  const info_text = [
    'With its combination of natural wonders, natural beauty cultural richness,affordability, and hospitality, Nepal ffers a wedding experience like no other, making it the perfect destination for couples seeking a unique and unforgettable celebration of love'
  ]
  return (
    <div>

      <main
        id="home"
        className="relative top-0 bg-hero bg-no-repeat bg-center 
        bg-cover h-[120vh] flex flex-col 
        justify-center items-center text-center mx-auto 
        px-4 sm:px-6 lg:px-8 py-12 lg:py-20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6">
            <h2 className="text-6xl mb-5 sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
              Plan Your Destination Wedding
            </h2>
            <button className="text-white border-none px-5 py-4 rounded cursor-pointer hover:bg-red-500 bg-red-900">
              <a href="#packages"> See Plans</a>
            </button>
          </div>
        </div>
      </main>

      <section className="info flex flex-col md:flex-row w-[93%] gap-10 mx-auto mt-20">
        
          {/* text-info-first */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-gray-500 px-5 py-3 rounded-lg">
               <p className="text-sm text-justify flex">
              <span className="mr-3"> ● </span>
              {info_text[0]}
            </p>
            </div>
           
          ))}
      </section>

      <div id="destination" className="container h-2/4 mx-auto px-4 sm:px-6 lg:px-5 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="header mb-5 flex justify-between items-center">
          <h2 className="text-4xl">Top Trending Wedding Destinations</h2>
          <button className="view-all bg-none border-none text-red-800 cursor-pointer">
            View all
          </button>
        </div>

        <div className="trending-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {["Chandragiri Resort", "Venue 1", "Venue 2", "Venue 3"].map(
            (title, index) => (
              <div
                key={index}
                className="destination-card flex flex-col items-center rounded-lg overflow-hidden shadow-md bg-white"
              >
                <div className="destination w-full relative bg-[#f0f0f0] rounded-2xl">
                  <Trending />
                  <Heart className="cursor-pointer" />
                </div>
                <div className="card-content">
                  <h3>{title}</h3>
                  <p>Description</p>
                </div>
              </div>
            )
          )}
        </div>
        </div>

        <h2 className="text-4xl">Top selection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-10">
          {["Destination", "Decoration", "Food", "Mocktail/Cocktail"].map(
            (category, index) => (
              <div key={index} className="bg-gray-200 p-4 rounded-lg text-center h-[fit-content]">
                <Image className="w-full object-cover rounded-lg mb-2"
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
      <div id="packages">

      <Packages />
      </div>
      <section className="cta">
        <div className="cta-content">
          <h1>Customize yours</h1>
          <button className="plan-button">Plan With Us</button>
        </div>
      </section>

      <div className="container plan-info mt-7">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 py-10 h-auto">
          <div className="text-info w-full sm:w-3/4 md:w-2/4 lg:w-2/4 text-2xl overflow-hidden break-words">
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
        <div className="faq-section mt-20">
          <h3 className="mb-10">Commonly asked questions</h3>
          <div className="faq-item border-b border-b-white mb-5">
            <div className="faq-question faq-question py-4 flex justify-between items-center cursor-pointer">
              <FAQ />
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </div>
  );
}
