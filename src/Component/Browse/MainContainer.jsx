import React from 'react'
import VedioBack from './VedioBack'
import Vediotitle from './Vediotitle'
import { useSelector } from 'react-redux'

function MainContainer() {
  
 const movies=useSelector(store=>store.movies?.nowPlayingMovies);
 if(!movies) return null
 const mainMovie=movies[0]

 const {original_title,overview,id}=mainMovie;
  return (
    <div>
     <Vediotitle title={original_title} overview={overview}/>
     <VedioBack movieId={id}/>
    </div>
  )
}

export default MainContainer
