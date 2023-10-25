import React from 'react'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
  return (
    <div className='flex items-center justify-between uppercase px-4 py-8 border-b-1 border-stone-500 sm:px-6'
    >
          
          <SearchOrder/>
          <Username />
          
          
    </div>
  )
}

export default Header