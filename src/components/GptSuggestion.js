import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

export default function GptSuggestion() {
  const { movieName ,movieResult}= useSelector((store)=>store.gpt)

  if(!movieName) return;

  return (
    <div className="p-4 m-4 bg-black/80 text-white z-50 absolute left-0 right-0 overflow-hidden">
      <div className="">
        {
          movieName.map((movieNames,index)=>{
            return(
              <MovieList
                key={movieNames}
                title={movieNames}
                movie={movieResult[index]}
              />
            )
          })
        }
      </div>
    </div>
  )
}
