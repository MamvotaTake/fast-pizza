import React from 'react'
import { BiSolidLocationPlus } from 'react-icons/bi'
import Button from './Button'
import { useSelector } from 'react-redux'

function Address() {
    const { address, } = useSelector(state => state.user)
    if (!address) return null;
  return (
      <div className='space-y-4 md:spa-y-2.5'>
        <p className='text-md capitalize'>Your Address</p>
          <div className='flex items-center justify-between'>
              <BiSolidLocationPlus className='text-lg text-yellow-500' /> 
              <input defaultValue={address} className='flex items-center gap-3 text-sm capitalize font-light' />
              
              <Button type="outline" to='/order/new'>Change</Button>
          </div>
          <p className='text-sm capitalize'>Please enter the address where you want us to deliver your pizza. </p>
          <div className='flex gap-2'>
              <Button type="normal">Add details</Button>
              <Button type="normal">Add Note</Button>
          </div>
    </div>
  )
}

export default Address