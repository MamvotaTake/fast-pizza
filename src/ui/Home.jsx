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
    <div className='text-center my-2 md:my-2 px-4'>
      <Banner />
      <div className='relative flex flex-col items-start space-y-3'>
        <div className=' flex items-center justify-between space-x-8'>
          <h1 className='font-bold text-2xl'>Popular Dishes</h1>
          <FilterOperations/>
          <Link to='/menu'><span className='absolute right-0 text-sm text-yellow-500 cursor-pointer hover:text-yellow-600 transition-all duration-150'>See More</span></Link>
        </div>
        <div className='grid grid-cols-4 gap-y-4 gap-x-6'>
          {menu.map(item => <MenuItem key={item.id} item={item}/>).slice(0,8)}
        </div>

      </div>
    
    </div>
  );
}

export default Home;
