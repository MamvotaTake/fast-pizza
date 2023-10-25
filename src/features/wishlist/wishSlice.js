import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    wishlist: [],

}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWish(state, action) {
            state.wishlist.push(action.payload);
        },

        removeItem(state, action) {
            state.wishlist = state.wishlist.filter(item => item.pizzaId !== action.payload)
        }
    }
})

export const {
    addToWish,
    removeItem
} = wishlistSlice.actions
export default wishlistSlice.reducer


export const getWish = (state) => state.wishlist.wishlist;



