import React from 'react'
import Header from './Header'
import { Outlet, useNavigation} from 'react-router-dom'
import CartOverview from '../features/cart/CartOverview'
import Loader from './Loader'
import Sidebar from './Sidebar'

function AppLayout() {
    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading';

    return (
        <div className=' overflow-hidden grid grid-cols-[13rem_minmax(600px,_1fr)_250px] gap-4 h-screen'>
            {isLoading && <Loader />}  
            <Sidebar/>
            
            <div className='overflow-y-scroll bg-zinc-200'>
                <main className=' mx-auto px-4'>
                    <Header />
                    <Outlet />
                </main>
            </div>
            <CartOverview />

        </div>
    )
}

export default AppLayout