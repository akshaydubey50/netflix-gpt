import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion'
import { NetFlix_Banner } from '../utils/constant'

export default function GptSearch() {
  return (
    <>
          <div className="absolute -z-10">
              <img src={NetFlix_Banner} alt="netflix_banner" className="h-screen w-screen " />
          </div>
            <GptSearchBar />
            <GptSuggestion />
    </>
  )
}
