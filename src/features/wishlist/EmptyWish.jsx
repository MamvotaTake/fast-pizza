import React from 'react'
import Button from '../../ui/Button'
import pizza from '../../../public/pizza.png'

function EmptyWish() {
  return (
      <div className='flex items-center flex-col gap-4 py-5'>
          <img className="w-48" src={pizza} alt="pizza" />
          <h1 className="text-center">You haven&apos;t yet added anything, view our menu.</h1>
          <Button to='/menu' type="outline">Explore Our Menu</Button>
    </div>
  )
}

export default EmptyWish