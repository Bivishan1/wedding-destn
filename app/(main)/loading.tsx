'use client';
import React from 'react'
import { Spinner } from "@material-tailwind/react";


const Loading = () => {
  return (
    <div>

        <Spinner color="red" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
        <div>loading....</div>
    </div>
  )
}

export default Loading