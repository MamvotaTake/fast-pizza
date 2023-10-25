import React from 'react'
import SearchOrder from '../features/order/SearchOrder'
import Username from '../features/user/Username'
import { MdFavoriteBorder } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getWish } from '../features/wishlist/wishSlice'

function Header() {
  const wishlist = useSelector(getWish)
  return (
    <div className='flex items-center justify-between uppercase px-4 py-8 border-b-1 border-stone-500 sm:px-6'
    >
          
      <SearchOrder />
      <span className='relative'>
        <Link to='/wishlist'><MdFavoriteBorder className=' relative text-2xl backdrop-blur-sm cursor-pointer hover:text-yellow-500 transition-all duration-300' /></Link>
        {!wishlist.length ? <span className="absolute right-0 top-0 bg-stone-900 w-2 h-2 rounded-full"></span> : <span className="absolute right-0 top-0 bg-yellow-500 w-2 h-2 rounded-full"></span>}
      </span>
      <Username />
          
          
    </div>
  )
}

export default Header