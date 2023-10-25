import { configureStore } from "@reduxjs/toolkit";

import userReducer from './features/user/userSlice'
import cartReducer from './features/cart/cartSlice.js'
import wishlistReducer from './features/wishlist/wishSlice'

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        wishlist: wishlistReducer, 
    }
})

export default store;