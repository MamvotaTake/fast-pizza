import React from 'react'
import CardItem from '../features/menu/MenuItem'


function Card({ item }) {
  return (

    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <CardItem item={item} />
    </div>

  )
}

export default Card