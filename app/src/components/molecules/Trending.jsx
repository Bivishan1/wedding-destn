'use client';
import React from 'react'
import { Carousel}  from '../../../src/MTailwind';


const Trending = () => {


  return (
   
      <Carousel className='h-96'>
      <img
        src=
        "/img/venue1.jpg"
        alt="image 1"
        className="h-full w-full object-cover rounded-3xl"
      />
       <div className="">
      <img
        src=
        "/img/venue2.jpg"
        alt="image 2"
        className="h-96 w-full object-cover rounded-3xl"
      /></div>
      <img
        src=
         "/img/venue3.jpg"
        alt="image 3"
        className="h-full w-full object-cover rounded-3xl"
      />
    </Carousel>


    
  )
}

export default Trending