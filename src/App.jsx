import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './ui/Home'
import Error from './ui/Error'
import Cart from './features/cart/Cart'
import Menu, {loader as menuLoader} from './features/menu/Menu'
import CreateOrder, {actions as createOrderAction} from './features/order/CreateOrder'
import Order,{loader as orderLoader} from './features/order/Order'
import Wishlist from './features/wishlist/Wishlist'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,

      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path: '/wishlist',
        element: <Wishlist/>
      },

      {
        path: '/order/new', element: <CreateOrder />,
        action: createOrderAction
      },
      {
        path: '/order/:orderId', element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      }

    ]
  }
])


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App