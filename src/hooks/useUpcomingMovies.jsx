import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addUpcomingMovies } from '../utils/movieSlice';

const useUpcomingMovies=()=>{

  const dispatch=useDispatch();
  
  const getUpcomingMovies=async()=>{
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS)
    const json=await data.json();
    const result=json.results
    dispatch(addUpcomingMovies(result))
  };
  
  useEffect(()=>{
    getUpcomingMovies();
  })
}

export default useUpcomingMovies;


