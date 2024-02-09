import React from 'react';
import { useSelector } from 'react-redux';
import Stripe from './Stripe';

export default function OrderSummary(props) {
  //   const { cartItems } = useSelector((state) => state.cart);
  //   let amount = cartItems.reduce(
  //     (acc, item) => (acc += item.price * item.quantity),
  //     0
  //   );

  const { amount } = props;
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          <Stripe total={amount} />
        </div>
      </div>
    </div>
  );
}
