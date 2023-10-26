import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import { formatCurrency } from '../../utils/helpers';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import DeleteItems from '../cart/DeleteItems';
// import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
// import { addToWish,      removeItem } from '../wishlist/wishSlice';

function MenuItem({ item }) {
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = item;

    const dispatch = useDispatch()

    const currentQuantity = useSelector(getCurrentQuantityById(id))
    // const wishlist = useSelector(getWish);
    

    const isInCart = currentQuantity > 0;

    function handleAddToCart() {
        const newItem = {
            pizzaId: id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1
        }
        dispatch(addItem(newItem))
    }

    // function handleAddToWish() {
    //     const newItem = {
    //         imageUrl,
    //         ingredients,
    //         pizzaId: id,
    //         name,
    //         quantity: 1,
    //         unitPrice,
    //         totalPrice: unitPrice * 1
    //     }
    //     dispatch(addToWish(newItem))
    // }

    // function handleRemoveFromWish() {
    //     dispatch(removeItem(id))
    // }

    return (
        <div className=" relative flex flex-col w-auto  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className=" flex rounded-lg  w-full" src={imageUrl} alt="product" />
            {/* {!currentWish ? (
                <MdFavoriteBorder onClick={handleAddToWish} className='absolute top-3 right-2 text-2xl backdrop-blur-sm cursor-pointer hover:text-yellow-500 transition-all duration-300' />
            ) : <MdFavorite onClick={handleRemoveFromWish} className="absolute text-yellow-500 text-xl top-3 right-3" />} */}
            <div className="px-5 pb-5">
                <Link>
                    <h5 className="mt-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </Link>
                <span className='flex capitalize text-sm font-light  mb-4'>{ingredients.join(', ')}</span>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                </div>

                <div className="flex flex-grow items-center justify-between">
                    {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p>
                        :
                        (
                            <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>
                        )}

                    {isInCart && <div className="flex items-center gap-3 sm:gap-8">
                        <UpdateItemQuantity pizzaId={id} currentQuantity={currentQuantity} />
                        <DeleteItems pizzaId={id} />
                    </div>}
                    {!soldOut && !isInCart && <Button type="small" onClick={handleAddToCart}>Add to cart</Button>}
                </div>
            </div>
        </div>
    )
}

export default MenuItem