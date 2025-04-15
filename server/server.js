const express = require('express');
const stripe = require('stripe')('your-secret-key-from-stripe'); // Replace with your Stripe secret key
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Route to create a Payment Intent
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;  // Amount should be passed from frontend (like cart total)

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount is in cents, so multiply by 100
      currency: 'usd',
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
