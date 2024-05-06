import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addTrendingMovies } from '../utils/movieSlice';

const useTrendingMovies=()=>{

  const dispatch=useDispatch();
  
  const getTrendingMovies=async()=>{
    const data = await fetch(
        'https://api.themoviedb.org/3/trending/movie/day?language=en-US',API_OPTIONS)
    const json=await data.json();
    const result=json.results
    dispatch(addTrendingMovies(result))
  };
  
  useEffect(()=>{
    getTrendingMovies();
  })
}

export default useTrendingMovies;

