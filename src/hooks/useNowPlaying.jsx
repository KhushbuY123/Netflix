import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const useNowplaying=()=>{

//   const[nowplaying,setnowplaying]=useState([])
  const dispatch=useDispatch();
  
  // Playing Now Movie
  const getNowPlayingMovie=async()=>{
    const data = await fetch(
   'https://api.themoviedb.org/3/movie/now_playing?page=1' ,API_OPTIONS)
    const json=await data.json();
    // console.log(json.results);
    const result=json.results
    // setnowplaying(result)
    dispatch(addNowPlayingMovies(result))
  };
  
  useEffect(()=>{
    getNowPlayingMovie();
  })
  
  return (
    <>
     {/* <div className='flex gap-4 p-4 flex-wrap'> */}
       {/* {nowplaying.map((item,index)=>(
        <div className='bg-red-600' key={index}>
            <img src='/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg' alt='movie'/>
          <p>{item.title}</p>
        </div>
       ))} */}
      {/* </div> */}
    </>
  )
}

export default useNowplaying;
