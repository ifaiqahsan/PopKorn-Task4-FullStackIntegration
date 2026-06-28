const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    movieId: { type: String, required: true },
    movieTitle: { type: String, required: true },
    moviePoster: { type: String, required: true },
    showtime: {
        id: { type: String, required: true },
        time: { type: String, required: true },
        screen: { type: String, required: true }
    },
    seats: [{ type: String, required: true }],
    totalPrice: { type: Number, required: true },
    status: { type: String, enum: ['confirmed', 'cancelled'], default: 'confirmed' },
    reference: { type: String, unique: true },
    bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);