'use client';
import React from 'react'
import { Carousel}  from '../../../src/MTailwind';
import Image from "next/image";

const Trending = () => {


  return (
   
      <Carousel 
      className='h-96'
      placeholder="placeholder" onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <Image
        src=
        "/img/venue1.jpg"
        alt="image 1"
 width={1920}
          height={1080}
        className="h-full w-full object-cover rounded-3xl"
      />
       <div className="">
      <Image
        src=
        "/img/venue2.jpg"
        alt="image 2"
 width={1920}
          height={1080}
        className="h-96 w-full object-cover rounded-3xl"
      /></div>
      <Image
        src=
         "/img/venue3.jpg"
        alt="image 3"
         width={1920}
          height={1080}
        className="h-full w-full object-cover rounded-3xl"
      />
    </Carousel>


    
  )
}

export default Trending