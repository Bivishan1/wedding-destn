'use client';
import React from 'react'
import { Carousel}  from '../../../src/MTailwind';
import Image from "next/image";

const imageMap: Record<string, string[]> = {
  "Chandragiri Resort": ["/img/trending2.jpg", "/img/trending1.jpg", "/img/trending3.jpg"],
  "Venue 1": ["/img/trending1.jpg", "/img/trending2.jpg", "/img/trending3.jpg"],
  "Venue 2": ["/img/trending3.jpg", "/img/trending2.jpg", "/img/trending1.jpg"],
  "Venue 3": ["/img/venue3.png", "/img/venue2.png", "/img/venue1.png"],
};

const Trending = ({title}: { title: string }) => {
  const images = imageMap[title] || ["/img/default.png"]; // Fallback to a default image if no match

  return (
   
      <Carousel 
      className='h-96'
      placeholder="placeholder" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {images.map((src, index) => (
         <Image
         key={index}
         src={src}
         alt={`Image ${index + 1} for ${title}`}
         width={1920}
         height={1080}
         className="h-full w-full object-cover rounded-3xl"
       />
     ))}
    </Carousel>


    
  )
}

export default Trending