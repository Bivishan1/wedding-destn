"use client";
import React from "react";
import { Carousel } from "../../MTailwind";
import Image from "next/image";
import Heart from "../atoms/Heart";

const CarouselC = ({
  title,
  venuesD,
  imageMap,
  button,
}: {
  title: string;
  venuesD?: string;
  imageMap: Record<string, string[]>;
  button?: string;
}) => {
  const images = imageMap[title] || ["/img/default.png"]; // Fallback to a default image if no match
  // const [activeIndex, setActiveIndex] = useState(0)
  // const [isPaused, setIsPaused] = useState(false)

  //automating image slideshow
  // const goToNextSlide = useCallback(() => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  // }, [images.length])

 

  // const handleMouseEnter = () => setIsPaused(true)
  // const handleMouseLeave = () => setIsPaused(false)

  return (
    <div className="destination-card flex flex-col rounded-lg overflow-hidden shadow-md bg-white">
      <div className="destination w-full relative bg-[#f0f0f0] rounded-2xl">
        <Carousel
          className="h-96"
          placeholder="placeholder"
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        autoplay={true}          // Add this
        autoplayDelay={2000}     // Add this (3000ms = 3 seconds)
        loop={true}              // Add this
        >
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`Image ${index + 1} for ${title}`}
              width={1920}
              height={1080}
              className="h-full w-full object-cover rounded-3xl bg-center"
            />
          ))}
        </Carousel>
        <Heart className="cursor-pointer" />
      </div>
      <div className="card-content mt-4">
        <div className="heading flex flex-row justify-between">
          <h3>{title}</h3>
          {button && (
            <button className="bg-red-900 text-white rounded-md px-3">
              {button}
            </button>
          )}
        </div>

        <p>{venuesD}</p>
      </div>
    </div>
  );
};

export default CarouselC;
