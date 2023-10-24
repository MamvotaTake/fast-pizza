import React from 'react'
import { useSelector } from 'react-redux'

function Username() {
  const username = useSelector(state => state.user.username);

  if (!username) return null;
  return (
    <h1 className='text-lg hidden font-semibold md:block'>Hello, {username}</h1>
  )
}

export default Username
