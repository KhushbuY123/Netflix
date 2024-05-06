import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';

const usePopularMovie=()=>{

//   const[nowplaying,setnowplaying]=useState([])
  const dispatch=useDispatch();
  
  // Playing Now Movie
  const getPopularMovies=async()=>{
    const data = await fetch(
   'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1' ,API_OPTIONS)
    const json=await data.json();
    // console.log(json.results);
    const result=json.results
    // setnowplaying(result)
    dispatch(addPopularMovies(result))
  };
  
  useEffect(()=>{
    getPopularMovies();
  })
  
  return (
    <>
    </>
  )
}

export default usePopularMovie;
