'use client';
import React, { useState } from 'react'

const Heart = () => {
    const [heartState, setHeartState] = useState(Array(4).fill(false)); // For heart button toggle
//   const [activeFAQ, setActiveFAQ] = useState(null); // For FAQ accordion

  const toggleHeart = (index: number) => {
    console.log('toggleLike called');
    const newHeartState = [...heartState];
    newHeartState[index] = !newHeartState[index];
    setHeartState(newHeartState);
  };

  return (
    <>
          {heartState.map((state, index) => (
                <button
                    key={index}
                    className="heart-btn absolute top-2 right-2 bg-none border-none cursor-pointer text-white text-2xl"
                    onClick={() => toggleHeart(index)} // Pass index to the handler
                >
                    {state ? '♥' : '♡'}
                </button>
            ))}
    </>
  )
}

export default Heart