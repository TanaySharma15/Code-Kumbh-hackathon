import Ticket from "../models/ticket.model.js";
import User from "../models/user.model.js";


const bookTickets = async (req, res) => {
    const { userId, destination, date, seatType } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const ticket = await Ticket.create({
            userId,
            destination,
            date,
            seatType
        });
        res.status(201).json({ message: "Ticket booked successfully", ticket });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
}

const getUserTicket = async (req, res) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });

        }
        const tickets = await Ticket.find({ userId });
        res.status(200).json({ tickets });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }

}