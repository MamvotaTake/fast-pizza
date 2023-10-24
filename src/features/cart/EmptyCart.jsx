import React from 'react';
import LinkButton from '../../ui/LinkButton';
function EmptyCart() {
  return (
    <div className='px-4 py-6 space-y-5'>
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p>Your cart is still empty. Start adding some pizzas :)</p>
    </div>
  );
}

export default EmptyCart;
