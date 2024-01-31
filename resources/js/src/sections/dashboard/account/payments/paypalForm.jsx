import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
const PayPalButton = paypal.Buttons.driver('react', { React, ReactDOM });
import toast from 'react-hot-toast';
import { getUserProfile } from '@/actions';
import { connect, useDispatch } from 'react-redux';
const PaypalForm = () => {
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState('');
  const [orderID, setOrderID] = useState(false);
  const email = JSON.parse(localStorage.getItem('email'));
  const dispatch = useDispatch();

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
      // alert('Payment successful!!');
      axios
        .post('/api/update_paydate', {
          email: email,
          currency: '$',
          totalAmount: '99.99'
        })
        .then((response) => {
          toast.success('Payment successfuly done and upgraded plan.');
          dispatch(
            getUserProfile({ email: JSON.parse(localStorage.getItem('email')) })
          );
        })
        .catch((error) => {
          console.error('Error getting payment', error);
        });
      console.log('Order successful . Your order id is--', orderID);
    }
  }, [success]);

  return (
    // <PayPalScriptProvider options={{ clientId: cid }}>
    <div className="container">
      <div className="row my-3">
        <div className="col-md-6">
          <PayPalButton
            style={{ layout: 'vertical' }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        </div>
      </div>
    </div>

    // </PayPalScriptProvider>
  );
};

export default PaypalForm;
