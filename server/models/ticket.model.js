import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    destination: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    seatType: {
        type: String,
        enum: ["window", "middle", "extra-legroom"]
    },
    qrCode: {
        type: String
    }
})

const Ticket = mongoose.model("Ticket", ticketSchema);
export default Ticket