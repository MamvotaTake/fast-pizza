import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'

function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (!query) return;
        navigate(`/order/${query}`)
        setQuery("")
    }

  return (
      <form onSubmit={handleSubmit} className='relative'>
          <input
              placeholder='Search order #'
              value={query}
              onChange={e => setQuery(e.target.value)}
              className='rounded-md px-4 py-2.5 text-sm bg-gray-100
              placeholder:text-stone-400 w-56 sm:w-96 
              focus:outline-none sm:focus:w-96 transition-all 
              duration-300 focus:ring focus:ring-yellow-500 
              focus:ring-opacity-50'
          />
          <span className='absolute right-2 top-3'><BiSearch className='text-xl'/></span>
          
    </form>
  )
}

export default SearchOrder