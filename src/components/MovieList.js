import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList({ title, movie }) {
    return (
        <div className='px-6'>
            <h1 className='py-4 text-3xl text-white font-semibold'>{title}</h1>
            <div className="flex overflow-x-scroll overflow-y-hidden ">
                 <div className="flex gap-4 ">
                    {movie?.map((item) => {
                        const { id, poster_path } = item
                        return (
                            <MovieCard title={"Now Playing"} imageId={poster_path} key={id} />
                        )
                    })}
                 </div>
            </div>
        </div>
    )
}
