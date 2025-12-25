import Razorpay from "razorpay";

export default async function handler(req, res) {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: 50000, // ₹500 (amount in paise)
      currency: "INR",
    });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
