import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies=useSelector((store)=>store.movies);
  return (
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
      <div className='-mt-32 relative z-20 pl-12'>
      <MovieList  title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular Moives"} movies={movies.popularMovies}/>
      <MovieList title={"Trending Movies"} movies={movies.trendingMovies}/>
      <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
      <MovieList title={"Horror Movies"} movies={movies.horrorMovies}/>
      </div></div>
    ))
}

export default SecondaryContainer
