import React from 'react'
import { Link } from 'react-router-dom'
import { GiFullPizza } from 'react-icons/gi'
import { MdOutlineFavoriteBorder, MdOutlineMoreTime } from 'react-icons/md'
import { TbSettingsCog } from 'react-icons/tb'
import Button from './Button'
// import mask from '../../public/smallBanner.svg'
import vector from '../../public/vector.svg'


function Sidebar() {
    return (
        <div className="items-center space-y-2 uppercase px-4 py-6 border-b-1 border-stone-500 md:px-6">
            <Link to='/' className='tracking-widest font-bold'>Fast Pizza Cos<span className='font-bold text-[1.4rem] text-yellow-500'>.</span> </Link>
            <div className='flex flex-col h-full justify-between capitalize py-5'>
                <div className='space-y-3'>
                    <Link to='/menu'
                        className='flex items-center gap-2 hover:bg-yellow-500 py-2 px-2 hover:rounded hover:text-white transition-all duration-500'>
                        <span>
                            <GiFullPizza className='hover:text-white text-zinc-500 text-lg' />
                        </span> Menu
                    </Link>
                    <Link to='/cart'
                        className='flex items-center gap-2 hover:bg-yellow-500 py-2 px-2 hover:rounded hover:text-white transition-all duration-500'>
                        <span>
                            <MdOutlineMoreTime className='text-zinc-500 text-lg' />
                        </span> Order History
                    </Link>
                    <Link to='/wishlist'
                        className='flex items-center gap-2 hover:bg-yellow-500 py-2 px-2 hover:rounded hover:text-white transition-all duration-500'>
                        <span>
                            <MdOutlineFavoriteBorder className='text-zinc-500 text-lg' />
                        </span> Favourites
                    </Link>
                </div>
                <div className='flex flex-col justify-between mb-8'>
                    
                    <Link to='/order/new'
                        className='flex items-center gap-2 mb-8 hover:bg-yellow-500 py-2 px-2 hover:rounded hover:text-white transition-all duration-500'>
                        <span>
                            <TbSettingsCog className='text-zinc-500 text-lg' />
                        </span> Settings
                    </Link>
                    <div className="relative bg-yellow-400 px-2 py-3 rounded space-y-2">
                        <img src={vector} alt='mask' className="absolute right-0 top-0" />
                        <p className='items-center text-white text-base'>Upgrade your Account to Get Free Voucher</p>
                        {/* <img src={mask} alt='mask' className="absolute left-1 b-0" /> */}
                        <Button type="medium">Upgrade</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Sidebar