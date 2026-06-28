const mongoose = require('mongoose');

const showtimeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    screen: { type: String, required: true },
    price: { type: Number, default: 0 }
}, { _id: false });

const movieSchema = new mongoose.Schema({
    tmdbId: { type: Number, unique: true, sparse: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, required: true },
    language: { type: String, default: 'English' },
    duration: { type: Number, default: 120 },
    rating: { type: Number, default: 7.5 },
    posterUrl: { type: String, required: true },
    pricePerSeat: { type: Number, default: 500 },
    tags: { type: [String], default: [] },
    releaseDate: { type: String, default: '' },
    showtimes: { type: [showtimeSchema], default: [] },
    featured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);