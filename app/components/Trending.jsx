'use client';
import React, {useState} from 'react'
import Heart from './Heart'
import Image from 'next/image'
import { Carousel}  from '../MTailwind';

const Trending = () => {
    console.log('Trending component rendered');  

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