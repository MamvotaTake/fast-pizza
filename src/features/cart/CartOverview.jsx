import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from '../../utils/helpers'
import { BsCartCheck } from 'react-icons/bs'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { TbSettingsStar } from 'react-icons/tb'
import Address from "../../ui/Address";
import OrderMenu from "./OrderMenu";
import Button from "../../ui/Button";
import CreateUser from "../user/CreateUser";
import Modal from "../../ui/Modal";
import Notifications from "../../ui/Notifications";
import AboutDeveloper from "../../ui/AboutDeveloper";
import take01 from '../../../public/take01.png'


function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity)
  const totalCartPrice = useSelector(getTotalCartPrice)
  const username = useSelector(state => state.user.username)

  // if (!totalCartQuantity) return null;
  
  return (
    <div className="bg-white flex-col text-stone-500 uppercase px-4 py-3 sm:px-6 text-sm md:text-base flex">
      <div className="relative flex py-4 items-center justify-between">
        <div className="flex items-center justify-between gap-4">
          <Link to='/cart'>
            <BsCartCheck className="relative text-2xl text-gray-950" />
            <span className="absolute left-3 bottom-5 bg-yellow-500 text-white font-semibold px-1.5 rounded-full">
              {totalCartQuantity}
            </span>
          </Link>
          <Modal>
            <Modal.Open opens='notifications'>
              <span className=" flex relative cursor-pointer">
                <IoIosNotificationsOutline className="relative text-2xl text-gray-950" />
                <span className="absolute right-0 top-0 bg-yellow-400 w-2 h-2 rounded-full"></span>
              </span>
            </Modal.Open>
            <Modal.Window name="notifications">
              <Notifications/>
            </Modal.Window>
          </Modal>

          <Modal>
            <Modal.Open opens='settings'>
              <span className=" flex relative cursor-pointer">
                <TbSettingsStar className="relative text-2xl text-gray-950" />
                <span className="absolute right-0 top-0 bg-red-400 w-2 h-2 rounded-full"></span>
              </span>
            </Modal.Open>
            <Modal.Window name="settings">
              <h2 className='font-bold text-xl'>Settings</h2>
            </Modal.Window>
          </Modal>
          
        </div>
        <Modal>
          <Modal.Open opens='notifications'>
            <span className="cursor-pointer w-10 bg-yellow-500 rounded-full"><img className="rounded-full" src={take01} alt="placeholder" /></span>
          </Modal.Open>
          <Modal.Window name="notifications">
            <AboutDeveloper />
          </Modal.Window>
        </Modal>
        
      </div>
      <Address />
      <OrderMenu />
      
      <p className="text-stone-900 font-bold py-6 space-x-4 sm:space-x-6 flex justify-between">
        Total Price:
        <span className="flex justify-between"> {formatCurrency(totalCartPrice)}</span>
      </p>

      <div>
        {username ?  <Button type="primary" to="/order/new">Order Now</Button> : <CreateUser/> }
      </div>
    </div>
  );
}

export default CartOverview;
