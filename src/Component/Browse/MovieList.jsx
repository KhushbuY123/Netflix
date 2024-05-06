import React from 'react'
import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  console.log(movies)
  return (
    <>
    <div className='p-6'>
    <h1 className='text-2xl py-6 text-white'>{title}</h1>
    <div className='flex overflow-x-scroll'>
        <div className='flex gap-3'>
           {movies?.map(movie=>
             <MovieCard key={movie.id} posterPath={movie.poster_path}/>
           )}
        </div>
        </div>
    </div>
    </>
  )
}

export default MovieList
