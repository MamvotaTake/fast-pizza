import React from 'react'
import bannerImage from '../../public/banner.png'
// import pizza from '../../public/pizza.png'
import Button from './Button'


function Banner() {
  return (
    <div className=' flex px-10  justify-between items-center bg-yellow-500 rounded-md text-white mb-8'>
      <div className='flex flex-col relative space-y-2 md:px-9 px-4 md:space-y-4'>
        <h1 className='text-sm md:text-3xl text-black-900 font-extrabold '>Get Discount Voucher Up To 20% </h1>
        <p className='text-xs md:text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, fugiat.</p>
        <span className=''>
          <Button to='/menu' type="medium">Order Now</Button>
        </span>
      </div>
      <img src={bannerImage} className='relative right-3' alt="" />
    </div>
  )
}

export default Banner