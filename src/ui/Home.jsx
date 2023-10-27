import React, { useEffect } from 'react';
import Banner from './Banner';
import { Link, useFetcher } from 'react-router-dom';
import Loader from './Loader';
// import { BiArrowToRight } from 'react-icons/bi';
import MenuItem from '../features/menu/MenuItem';
import FilterOperations from '../features/menu/FilterOperations';

function Home() {
  const fetcher = useFetcher();
  useEffect(function () {
    if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu')
  }, [fetcher])
  
  const menu = fetcher.data ?? []
  
  if (fetcher.state === 'loading') return <Loader/>
  return (
    <div className='flex flex-col text-center my-2 md:my-2 px-4'>
      <Banner />
      <div className='relative flex flex-col  space-y-3'>
        <div className=' flex items-center gap-4 sm:gap-2 md:justify-between'>
          <h1 className='font-bold text-xs md:text-2xl'>Popular Dishes</h1>
          <div className='flex sm:gap-4 items-center justify-between'>
            <FilterOperations />
            <Link to='/menu'><span className=' hidden md:flex items-center text-sm cursor-pointer bg-yellow-400 text-stone-50 py-2 px-1 border border-yellow-400 hover:text-stone-0 transition-all duration-300'>See More</span></Link>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-3'>
          {menu.map(item => <MenuItem key={item.id} item={item}/>).slice(0,8)}
        </div>

      </div>
    
    </div>
  );
}

export default Home;
