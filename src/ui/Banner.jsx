import React from 'react'
import bannerImage from '../../public/banner.png'
// import pizza from '../../public/pizza.png'
import Button from './Button'


function Banner() {
  return (
    <div className=' flex px-0 sm:px-10  justify-between  bg-yellow-500 rounded-md text-white mb-8'>
      <div className='flex flex-col relative space-y-1 md:px-9 px-2 md:space-y-4 mb-5'>
        <h1 className='text-sm items-center md:text-3xl text-black-900  mt-3 md:w-full font-bold md:font-extrabold '>Get Discount Voucher Up To 20% </h1>
        <p className='text-xs md:text-base font-medium'>Hurry up, buy your lovely pizza whilst on discount</p>
        <span className=''>
          <Button to='/menu' type="medium">Order Now</Button>
        </span>
      </div>
      <img src={bannerImage} className=' hidden md:flex relative right-7 md:right-3 w-32 h-20' alt="" />
    </div>
  )
}

export default Banner