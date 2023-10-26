import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Select from './Select'

function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams()
    const sortBy = searchParams.get('sortBy') || ''

    function handleClick(e) {
        e.preventDefault()
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams)
    }
  return (
      <Select options={options} onChange={handleClick} value={sortBy}/>
          
  )
}

export default SortBy