/* eslint-disable no-unused-vars */

import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovie } from "../hooks/useNowPlayingMovie"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovie } from '../hooks/usePopularMovie';
import { useUpcomingMovie } from '../hooks/useUpcomingMovie';
import { useTopRatedMovie } from '../hooks/useTopRatedMovie';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

export default function Browse() {

  const showSearchGpt = useSelector((store) => store.gpt.showGptSearch);


  useNowPlayingMovie();
  usePopularMovie();
  useUpcomingMovie();
  useTopRatedMovie();

  return (
    <>
      <Header />
      {showSearchGpt ?
        <GptSearch />
        : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      {/* 
    MainContainer
      - Video Background
      - Video Title
    SecondaryContainer
      - MovieItemList * n
        - Movie Cards * n
   */}
    </>
  )
}
