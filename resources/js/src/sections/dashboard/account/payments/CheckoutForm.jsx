import { PaymentElement } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { getUserProfile } from '@/actions';
import { connect, useDispatch } from 'react-redux';
export default function CheckoutForm(props) {
  const { amount } = props;
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const email = JSON.parse(localStorage.getItem('email'));
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);

    const response = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
      },
      redirect: 'if_required'
    });

    if (
      (response.error && response.error.type === 'card_error') ||
      (response.error && response.error.type === 'validation_error')
    ) {
      setMessage(response.error.message);
    } else if (response.paymentIntent.id) {
      console.log('called', response.paymentIntent.id);
      //display success message or redirect user
      axios
        .post('/api/update_paydate', {
          email: email,
          currency: '$',
          totalAmount: amount
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
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button disabled={isProcessing || !stripe || !elements} id="submit">
        <span id="button-text">
          {isProcessing ? 'Processing ... ' : 'Pay now'}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
