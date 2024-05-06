import React from 'react'

function Vediotitle({title,overview}) {
  return (
    <div className='w-screen  pt-[18%] px-24 absolute text-white '>
      <h1 className='font-bold absolute '>{title}</h1>
      <p className='py-6 w-1/4'>{overview}</p>
      <div className='flex gap-6'>
        <button className='bg-white hover:bg-opacity-90 w-24 text-black p-3'>Play</button>
        <button  className='bg-gray-600 w-24 text-white bg-opacity-30 p-3'>More Info</button>
      </div>
    </div>
  )
}

export default Vediotitle
