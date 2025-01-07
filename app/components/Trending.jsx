'use client';
import React, {useState} from 'react'
import Heart from './Heart'
import Image from 'next/image'
import { Carousel, IconButton}  from '../MTailwind';

const Trending = () => {
    console.log('Trending component rendered');  

    const slides = [
        "/img/venue1.jpg",
        "/img/venue2.jpg",
        "/img/venue3.jpg",
      ];
    
      const [activeIndex, setActiveIndex] = useState(0);
    
      const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      };
    
      const handlePrev = () => {
        setActiveIndex((prevIndex) =>
          (prevIndex - 1 + slides.length) % slides.length
        );
      };

  return (
   
      <Carousel>
      <img
        src=
        "/img/venue1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
       <div className="">
      <img
        src=
        "/img/venue2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      /></div>
      <img
        src=
         "/img/venue3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>


    
  )
}

export default Trending