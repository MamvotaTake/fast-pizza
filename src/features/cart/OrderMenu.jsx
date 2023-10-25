import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from './cartSlice'
import OrderMenuItem from './OrderMenuItem';

function OrderMenu() {

    const cart = useSelector(getCart);
    const selectedItems = cart.slice(0, 3);
  return (
      <div className='py-6 border-b'>
          <h1 className='mb-4 text-sm font-bold text-stone-950'>Order Menu</h1>
          {selectedItems.map(item => <OrderMenuItem item={item} key={item.id} />)}
    </div>
  )
}

export default OrderMenu