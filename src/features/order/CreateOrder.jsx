import React, { useState } from "react";
import { Form,  redirect,  useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import EmptyCart from '../cart/EmptyCart'
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { createOrder } from "../../services/apiRestaurant";
import store from '../../store'
import { formatCurrency } from '../../utils/helpers'
import { BiCurrentLocation } from 'react-icons/bi'
import { fetchAddress } from "../user/userSlice";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );


function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'
  const { username, status: addressStatus, position, address, error: errorAddress } = useSelector(state => state.user)
  
  const isLoadingAddress = addressStatus === 'loading';
  const dispatch = useDispatch()

  const formErrors = useActionData();
  const cart = useSelector(getCart)


  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0 ;
  const totalPrice = totalCartPrice + priorityPrice

  if (!cart.length) return <EmptyCart />;

  

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let&apos;s go!</h2>

      
      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input grow"
            type="text"
            name="customer"
            defaultValue={username}
            disabled={username}
            required
          />
        </div>

        <div className="mb-5 flex  flex-col gap-2 sm:flex-row sm:items-center">
          <label  className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          {formErrors?.phone && <p className="bg-red-100 text-sm mt-2 p-2 text-red-700">{ formErrors.phone}</p>}
          </div>
        </div>

        <div className="relative mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
            {addressStatus === 'error' && <p className="bg-red-100 text-sm mt-2 p-2 text-red-700">{errorAddress}</p>}
          </div>
          {!position.latitude && !position.longitude && 
            <span
              disabled={isLoadingAddress}
              className="absolute right-5 top-4 cursor-pointer md:right-3 md:top-4"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchAddress())
              }}>
              <BiCurrentLocation
                className="text-yellow-800 text text-lg 
              hover:text-yellow-500 transition-all duration-300" />
            </span>}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring 
            focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude}, ${position.longitude} ` : ""} />
          <Button
            type="primary"
            disabled={isSubmitting}>
            {isSubmitting ? `Placing order...` : `Order now from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function actions({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData)


  const order = {
    ...data, 
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  }

  const errors = {}
  if (!isValidPhone(order.phone))
    errors.phone =
      "please give us your correct phone number. We might need it to contact you"

  if (Object.keys(errors).length > 0) return errors



  const newOrder = await createOrder(order);

  store.dispatch(clearCart())

  return redirect(`/order/${newOrder.id}`)

}

export default CreateOrder;
