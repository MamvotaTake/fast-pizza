import React from "react";
import {getMenu} from '../../services/apiRestaurant'
import { useLoaderData } from "react-router-dom";
// import MenuItem from '../menu/MenuItem'
import MenuItem from "./MenuItem";
import FilterOperations from "./FilterOperations";

function Menu() {
  const menu = useLoaderData();
  return <>
    <div className="flex  items-center justify-between">
      <h1 className='font-bold  text-xs sm:text-2xl sm:flex sm:items-center sm:justify-between mb-4'>Our Dishes</h1>
      <FilterOperations />
    </div>
    <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 '>
      {menu.map(item => <MenuItem item={item} key={item.id} />)}
    </div>
  </>
}

export async function loader() {
  const menu = await getMenu()
  return menu;
}

export default Menu;
