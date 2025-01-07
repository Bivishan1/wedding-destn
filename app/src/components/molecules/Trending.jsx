'use client';
import React from 'react'
import { Carousel}  from '../../../MTailwind';


const Trending = () => {
    console.log('hTrending component rendered');  

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