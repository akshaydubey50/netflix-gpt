import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

export default function SecondaryContainer() {
  const nowPlayingMovieData = useSelector((store) => store.movie?.nowPlaying)
  const popularMovieData = useSelector((store) => store.movie?.popularMovie)
  const upcomingMovieData = useSelector((store) => store.movie?.upcomingMovie)
  const topRatedMovieData = useSelector((store) => store.movie?.topRatedMovie)

  // console.log('nowPlayingMovieData::', nowPlayingMovieData)
  console.log('topRatedMovieData:-', topRatedMovieData)
  return (
    <>
      {/* 
        MovieList
          - MovieCard * n 
            - Popular
            - Now Playing
            - Trending
            - Horror
      
       */}
      <div className="bg-black">
        <div className="-mt-[12rem] relative z-20">
          <MovieList title={"Now Playing"} movie={nowPlayingMovieData} />
          <MovieList title={"Popular"} movie={popularMovieData} />
          <MovieList title={"Upcoming Movies"} movie={upcomingMovieData} />
          <MovieList title={"Top Rated"} movie={topRatedMovieData} />
          <MovieList title={"Horror"} movie={nowPlayingMovieData} />
        </div>
      </div>

    </>
  )
}
