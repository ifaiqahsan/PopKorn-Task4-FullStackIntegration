const Booking = require('../models/Booking');

exports.getBookings = async (req, res, next) => {
  try {
    const { userId } = req.query;
    if (!userId) {
      return res.status(400).json({ message: 'Missing userId query parameter' });
    }

    const bookings = await Booking.find({ userId }).sort({ bookedAt: -1 });
    res.status(200).json(bookings);
  } catch (err) {
    next(err);
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    const { userId, movieId, showtime, seats, totalPrice, movieTitle, moviePoster, reference } = req.body;

    if (!userId || !movieId || !showtime || !seats?.length) {
      return res.status(400).json({ message: 'Invalid booking payload' });
    }

    const existingBooking = await Booking.findOne({
      movieId,
      'showtime.id': showtime.id,
      seats: { $in: seats },
      status: 'confirmed'
    });

    if (existingBooking) {
      return res.status(409).json({ message: 'Seats already taken' });
    }

    const newBooking = await Booking.create({
      userId,
      movieId,
      movieTitle,
      moviePoster,
      showtime,
      seats,
      totalPrice,
      reference,
      status: 'confirmed'
    });

    res.status(201).json(newBooking);
  } catch (err) {
    next(err);
  }
};

exports.cancelBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (booking.status === 'cancelled') {
      return res.status(400).json({ message: 'Booking is already cancelled' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.status(200).json(booking);
  } catch (err) {
    next(err);
  }
};