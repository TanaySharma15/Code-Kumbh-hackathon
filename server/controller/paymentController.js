import stripe from "../config/stripe.js";

export const checkout = async (req, res) => {
    const { amount, currency, ticketDetails } = req.body;

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
                {
                    price_data: {
                        currency,
                        product_data: { name: "Ticket Booking" },
                        unit_amount: amount * 100,
                    },
                    quantity: 1,
                },
            ],
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/success?ticketId=${ticketDetails.id}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};