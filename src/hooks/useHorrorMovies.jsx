import  { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import {addHorrorMovies } from '../utils/movieSlice';

const useHorrorMovies=()=>{

  const dispatch=useDispatch();
  
  const getHorrorMovies=async()=>{
    const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTIONS)
    const json=await data.json();
    const result=json.results
    dispatch(addHorrorMovies(result))
  };
  
  useEffect(()=>{
    getHorrorMovies();
  })
}

export default useHorrorMovies;


