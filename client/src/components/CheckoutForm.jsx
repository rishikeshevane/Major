import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return; // Make sure Stripe.js has loaded

    setLoading(true);

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      'your-client-secret-from-backend',  // This is the client secret received from backend
      {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      }
    );

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      if (paymentIntent.status === 'succeeded') {
        // Handle successful payment
        alert('Payment Successful!');
        setLoading(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Card details</label>
      <CardElement />
      {error && <div className="error">{error}</div>}
      <button type="submit" disabled={loading || !stripe}>
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
};

export default CheckoutForm;
