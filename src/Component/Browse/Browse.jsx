import React, { useEffect, useState } from 'react'
import Header from '../Login Page/Header';
import useNowplaying from '../../hooks/useNowPlaying';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovie from '../../hooks/usePopularMovie';
import useTrendingMovies from '../../hooks/useTrendingMovie';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import useHorrorMovies from '../../hooks/useHorrorMovies';
import GptSearch from '../GPT-Search/GptSearch';
import { useSelector } from 'react-redux';
const Browse=()=>{
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  useNowplaying();
  usePopularMovie();
  useTrendingMovies();
  useUpcomingMovies();
  useHorrorMovies();
  return (
    <>
      <Header/>
      {
        showGptSearch ?(<GptSearch/>):(
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>   
      )}
    </>
  )
}

export default Browse;
