import React, { useState, useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PaypalForm = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);
  const [cid, setCid] = useState('');
  axios.post('/api/get_paypal_info', {}).then((response) => {
    setCid(response.data.client_id);
  });
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: 'Social Vex',
            amount: {
              currency_code: 'USD',
              value: 99.99
            }
          }
        ]
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage('An Error occured with your payment ');
  };

  useEffect(() => {
    if (success) {
      alert('Payment successful!!');
      console.log('Order successful . Your order id is--', orderID);
    }
  }, [success]);

  return (
    <PayPalScriptProvider options={{ clientId: cid }}>
      <PayPalButtons
        style={{ layout: 'vertical' }}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalForm;
