'use client';
import React, { useState } from 'react'
import { HeartProps } from '../types/heart.types';

const Heart: React.FC<HeartProps> = ({
  initialState = Array(4).fill(false), // Default to 4 hearts, all unliked
  onClick,
  className = '',
}) => {
  const [heartState, setHeartState] = useState<boolean[]>(initialState);
//   const [activeFAQ, setActiveFAQ] = useState(null); // For FAQ accordion

  const toggleHeart = (index: number) => {
    // console.log(`toggleLike ${index} called, now the state is : ${state}`);
    const newHeartState = [...heartState];
    newHeartState[index] = !newHeartState[index];
    setHeartState(newHeartState);

     // Trigger the optional onClick callback
     if (onClick) {
      onClick(index, newHeartState[index]);
    }
    
  };

  return (
    <>
          {heartState.map((state, index) => (
                <button
                    key={index}
                    className={`heart-btn absolute top-2 right-2 bg-none border-none text-white ${className} text-4xl`}
                    onClick={() => toggleHeart(index)} // Pass index to the handler
                >
                    {state ? '♥' : '♡'}
                </button>
            ))}
    </>
  )
}

export default Heart