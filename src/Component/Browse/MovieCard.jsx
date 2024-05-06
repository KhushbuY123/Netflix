import React from 'react'
import { IMG_CDN_URL } from '../../utils/constant'

function MovieCard({posterPath}) {
  return (
    <div className='w-48'>
        <img src={IMG_CDN_URL+posterPath}
        alt='img-url'/>
    </div>
  )
}

export default MovieCard
