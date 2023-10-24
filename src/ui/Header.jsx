import React from 'react'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'

function Header() {
  return (
    <header className='flex items-center justify-between uppercase px-4 py-3 border-b-1 border-stone-500 sm:px-6'
    >
          
          <SearchOrder/>
          <Username />
          
    </header>
  )
}

export default Header