import React from 'react'
import { formatCurrency } from '../../utils/helpers'

function OrderMenuItem({item}) {
    const { imageUrl, name, quantity, totalPrice } = item
    
  return (
      <div className='flex justify-between py-4'>
          <div>
              <img src={imageUrl} alt="" />
              <span className='flex flex-col font-bold text-sm text-stone-950 capitalize'>{name} <span className='text-xsm font-light'>&times;{quantity}</span></span>
          </div>
          <p >{formatCurrency(totalPrice)}</p>
    </div>
  )
}

export default OrderMenuItem