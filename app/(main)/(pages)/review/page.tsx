import ImageGrid from "@/components/organisms/ImageGrid";
import React from "react";


const images = [
    { id: 1, title: "Chandragiri Resort", src: "/img/review1.jpg" },
    { id: 2, title: "Mountain Trek", src: "/img/review2.jpg" },
    { id: 3, title: "City Lights", src: "/img/review3.jpg" },
    { id: 4, title: "Desert Safari", src: "/img/review4.jpg" },
    { id: 5, title: "Snowy Peak", src: "/img/review1.jpg" },
    { id: 6, title: "Jungle Adventure", src: "/img/review2.jpg" },
    { id: 7, title: "Cultural Fest", src: "/img/review3.jpg" },
    { id: 8, title: "Island Retreat", src: "/img/review4.jpg" },
  ];

  const customImageStyle: React.CSSProperties = {
    borderRadius: '20px',
    height: '350px',
    objectFit: 'fill',
  };

const Review: React.FC = () => {
  return (
    <div className="container my-8">
      <h1 className="text-3xl my-8">Review Your Packages</h1>
    <div className="images-section">
        <ImageGrid images={images} borderStyle="rounded-xl" buttonStyle="pointer-events-none" buttonText="Rs. 130k" imageStyle={customImageStyle} />
    </div>
    <div className="total-budget flex justify-end relative mt-10">
      <div className="total-budget-info border border-[#F1DDB2] h-[263px] w-[611px] rounded-md p-6 shadow-md">
      <p>Total Budget = 982k</p>
      <button className="bg-red-800 absolute bottom-3 right-3 rounded-md text-white p-2">Confirm Booking</button>
      </div>
    </div>
    </div>
  );
};

export default Review;
