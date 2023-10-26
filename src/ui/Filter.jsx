import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Filter({filterField, options}) {

    const [searchParams, setSearchParams] = useSearchParams()
    const currentFilter = searchParams.get(filterField) || options.at(0).value;

    function handleClick(value) {
        searchParams.set(filterField, value)
        setSearchParams(searchParams)
    }
  return (
      <div className=' bg-yellow-500 text-white shadow-sm rounded-sm px-3 flex gap-4'>
          {options.map(option =>
              <button className='bg-gray-0  cursor-pointer font-medium text-sm py-2 px-1 transition-all duration-300 hover:text-yellow-100'
                  key={option.value}
                  onClick={() => handleClick(option.value)}
                //   active={option.value === currentFilter}
                  disabled={option.value === currentFilter}
              >
              
                {option.label}
          </button>
          )}
      </div>
  )
}

export default Filter