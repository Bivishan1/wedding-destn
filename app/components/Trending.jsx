import React from 'react'
import Heart from './Heart'
import Image from 'next/image'
import { Carousel}  from '../MTailwind';

const Trending = () => {
    console.log('Trending component rendered');

  return (
    <div>
      <Carousel className="rounded-xl">
      <img
        src=
        "/img/venue1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src=
        "/img/venue2.jpg"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src=
         "/img/venue3.jpg"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>


    </div>
  )
}

export default Trending