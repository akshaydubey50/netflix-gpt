import React, { useEffect } from 'react'
import Header from './Header'
import {useNowPlayingMovie} from "../hooks/useNowPlayingMovie"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

export default function Browse() {

  useNowPlayingMovie();
  return (
<>
  <Header />
  <MainContainer />
  <SecondaryContainer />
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
