import React from 'react'
import bannerImage from '../../public/banner.png'
// import pizza from '../../public/pizza.png'
import Button from './Button'
import Tooltip from './Tooltip'
import { BiInfoCircle } from 'react-icons/bi'

function Banner() {
  return (
    <div className=' flex md:w-full justify-between items-center bg-yellow-500 rounded-md text-white mb-8'>
      <Tooltip message="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat 🚀">
          <BiInfoCircle className='cursor-pointer text-2xl' />
      </Tooltip>
      
      
      <div className='relative space-y-3 px-6 md:px-4 md:space-y-4'>
        <h1 className='text-3xl text-black-900 font-extrabold'>Get Discount Voucher Up To 20% </h1>
        <p className='text-sm font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat.</p>
        <span className='md:mt-2 bg-white'>
          <Button to='/menu' type="medium">Order Now</Button>
        </span>
      </div>
      <img src={bannerImage} className='relative right-3' alt="" />
    </div>
  )
}

export default Banner