import React from 'react'
import { FaPlay } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

export default function VideoTitle({ title, description }) {
  return (
    <>
      <div className="px-24 pt-[20%] absolute  w-screen aspect-video bg-gradient-to-r from-black text-white">
        <h1 className='font-extrabold text-6xl'>{title}</h1>
        <p className='w-1/4 text-lg font-semibold py-6'>{description}</p>
        <div className="flex gap-6 items-center">
          <button className='text-black bg-white rounded-md px-10 py-4 font-semibold text-lg shadow-md flex items-center gap-2'>
            <span><FaPlay /></span><span>Play</span></button>
          <button className='rounded-md px-10 py-4 font-semibold text-lg shadow-md flex items-center gap-4 text-white bg-gray-400/50'>
            <span ><GoInfo className='font-extrabold  text-2xl' /></span>
          <span>More Info</span></button>
        </div>
      </div>
    </>
  )
}
