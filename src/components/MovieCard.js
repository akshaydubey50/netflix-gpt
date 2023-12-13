import React from 'react'

export default function MovieCard({title,imageId}) {
  return (
    <>
              <div className="cursor-pointer hover:scale-110 transition-all w-48 py-4">
              <img src={"http://image.tmdb.org/t/p/w500/" + imageId} alt={title} className='rounded-2xl  object-cover' />
              </div>
    </>
    )
}
