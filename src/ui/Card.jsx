import React from 'react'
import MenuItem from '../features/menu/MenuItem'


function Card({ item }) {
  return (

    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <MenuItem item={item} />
    </div>

  )
}

export default Card