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
      <h1 className='font-bold text-2xl mb-4'>Our Dishes</h1>
      <FilterOperations />
    </div>
    <div className='grid grid-cols-4 gap-2 sm:grid-cols-4 sm:grid'>
      {menu.map(item => <MenuItem item={item} key={item.id} />)}
    </div>
  </>
}

export async function loader() {
  const menu = await getMenu()
  return menu;
}

export default Menu;
