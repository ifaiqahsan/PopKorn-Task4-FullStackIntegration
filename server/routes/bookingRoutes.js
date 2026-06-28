const express = require('express');
const router = express.Router();
const { createBooking, getBookings, cancelBooking } = require('../controllers/bookingController');

router.get('/', getBookings);
router.post('/', createBooking);
router.patch('/:id/cancel', cancelBooking);

module.exports = router;