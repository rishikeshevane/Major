import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';  // The actual form component for processing payments

// Stripe public key
const stripePromise = loadStripe('your-publishable-key-from-stripe'); // Replace with your Stripe public key

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // Fetch the client secret from the backend (this will be provided by your server)
    fetch('http://localhost:5000/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 20 })  // The amount passed can be dynamic based on the user's cart
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error('Error fetching client secret:', error));
  }, []);

  return (
    <div>
      <h1>Payment Page</h1>
      {clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
