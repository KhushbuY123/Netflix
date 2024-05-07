import React from 'react'
import { Banner_URL } from '../../utils/constant'
import lang from '../../utils/MutliLangGpt'
import { useSelector } from 'react-redux'

function GptSearchForm() {
const langkey=useSelector(store=>store.config.lang)
  return (
    <div className=''>
        <img
          src={Banner_URL}
          alt='banner'
          className='w-full h-full inset-0'
        />
      <form className=' bg-black  p-2 w-1/2 mt-20 rounded-md m-auto'>
        <input className='w-3/4 p-2' type='text' placeholder={lang[langkey].gptplaceholder}/>
        <button className='w-1/4 text-white bg-red-600 p-2'>{lang[langkey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchForm;
