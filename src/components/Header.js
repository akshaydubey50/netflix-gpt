import React from 'react'
import { NetFlix_Logo } from '../utils/constant'

export default function Header() {
  return (
      <div className='absolute px-8 py-2 bg-gradient-to-b from-black/40 left-96 z-10 ' >
        <img src={NetFlix_Logo}  className="w-44   " alt="logo" />
    </div>
  )
}
