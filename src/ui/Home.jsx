import React, { useEffect } from 'react';
import Banner from './Banner';
import { Link, useFetcher } from 'react-router-dom';
import Card from './Card';
import Loader from './Loader';
import { BiArrowToRight } from 'react-icons/bi';

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
        <div className=' flex items-center justify-between'>
          <h1 className='font-bold text-2xl'>Popular Dishes</h1>
          <Link to='/menu'><span className='absolute right-0 text-2xl text-yellow-500 cursor-pointer hover:text-yellow-300 transition-all duration-150'><BiArrowToRight /></span></Link>
        </div>
        <div className='grid grid-cols-3 gap-2'>
          {menu.map(item => <Card key={item.id} item={item}/>).slice(0,6)}
        </div>

      </div>
    
    </div>
  );
}

export default Home;
