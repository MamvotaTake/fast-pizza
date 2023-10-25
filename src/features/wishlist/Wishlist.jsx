import React from 'react'
// import { useDispatch } from 'react-redux'
// import Card from '../../ui/Card'
import { useSelector } from 'react-redux'
import { getWish } from './wishSlice'
import EmptyWish from './EmptyWish'
import MenuItem from '../menu/MenuItem'

function Wishlist() {
  const wishlist = useSelector(getWish)

  if (!wishlist.length) return <EmptyWish />


  return (

    <div className='grid grid-cols-3 gap-2'>
      {wishlist.map(item => <MenuItem item={item} key={item.id}/>)}
  </div>
  )
}

export default Wishlist