const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your actual Stripe secret key
const app = express();
const port = 5000;

app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON requests

// Mock clothes data
const clothes = [
  { id: 1, name: "Men's Shirt", image: "/images/mens-shirt.jpg" },
  { id: 2, name: "Women's Dress", image: "/images/womens-dress.jpg" },
];

// Route to get clothes
app.get('/api/clothes', (req, res) => {
  res.json(clothes);
});

// Payment route to create a payment intent
app.post('/api/payment', async (req, res) => {
  const { amount } = req.body; // The amount for the payment in cents
  try {
    // Create payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount, // Amount in cents (for example, $10.00 = 1000 cents)
      currency: 'usd', // Currency code (e.g., 'usd', 'eur', etc.)
    });
    // Respond with the client secret needed for the frontend
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
