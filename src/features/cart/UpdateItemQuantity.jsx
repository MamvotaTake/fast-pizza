import React from 'react'
import Button from '../../ui/Button'
import { useDispatch } from 'react-redux'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice'

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
    const dispatch = useDispatch()
  return (
      <div className='hidden gap-2 items-center md:gap-3 md:flex '>
          <Button type="round" onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
          <span className='text-sm font-medium'>{currentQuantity}</span>
          <Button type="round" onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
      </div>
  )
}

export default UpdateItemQuantity