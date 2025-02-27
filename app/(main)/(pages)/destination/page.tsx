import ImageGrid from "@/components/organisms/ImageGrid";
import React from "react";


const images = [
    { id: 1, title: "Beach View", src: "/img/destination.jpeg" },
    { id: 2, title: "Mountain Trek", src: "/img/destination.jpeg" },
    { id: 3, title: "City Lights", src: "/img/destination.jpeg" },
    { id: 4, title: "Desert Safari", src: "/img/destination.jpeg" },
    { id: 5, title: "Snowy Peak", src: "/img/destination.jpeg" },
    { id: 6, title: "Jungle Adventure", src: "/img/destination.jpeg" },
    { id: 7, title: "Cultural Fest", src: "/img/destination.jpeg" },
    { id: 8, title: "Island Retreat", src: "/img/destination.jpeg" },
  ];

const Destination: React.FC = () => {
  return (
    <div className="container my-8">
      <h1 className="text-6xl my-8 ">Destination</h1>
    <div className="images-section flex flex-wrap gap-4 justify-center">
        <ImageGrid images={images} buttonText="Add +" info='info...' />
    </div>
    </div>
  );
};

export default Destination;
