import React, { useEffect} from 'react'
import { API_OPTIONS } from '../utils/constant'
import { useDispatch} from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

function useBackVedio(movieId) {

    const dispatch=useDispatch()
    //fetch trailer
  
    const getMovietrailer=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"
        +movieId+
        "/videos?language=en-US",API_OPTIONS);
        const json=await data.json();
        // setmovietrailer(json.data);
        const filterData=json.results.filter((video)=>video.type==="Trailer")
        const trailer=filterData.length?filterData[0]:json.results[0];
        // settrailerId(trailer.key)
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=>{
        getMovietrailer();
    },[])
  
}

export default useBackVedio;
