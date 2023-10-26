import React from 'react'
import { MdOutlineNotificationsOff } from 'react-icons/md'
import { useSelector } from 'react-redux'
import Button from './Button'

function Notifications() {
    const username = useSelector(state => state.user.username)
  return (
      <div className='flex flex-col items-center space-y-6 px-6 py-3'>
          <h1 className='font-extrabold text-2xl'>Notifications</h1>
          {username && <p className='text-sm font-semibold'>Welcome {username}</p>}
          <div className='flex flex-col items-center'>
              <span>
                  <MdOutlineNotificationsOff className='w-48 h-48 text-yellow-500'/>
              </span>
              <h1 className='text-lg font-black mb-7'>You haven&apos;t yet recieved any notifications. Enjoy our Fast Pizza</h1>
              <Button to='/menu' type="outline">Explore Our Menu</Button>
              
          </div>

    </div>
  )
}

export default Notifications