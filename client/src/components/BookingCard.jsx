function BookingCard({ booking }) {
    const { movieTitle, moviePoster, showtime, seats, totalPrice, reference, status, bookedAt } = booking

    const formattedDate = new Date(showtime.date).toLocaleDateString('en-PK', {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    const bookedDate = new Date(bookedAt).toLocaleDateString('en-PK', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    })

    return (
        <div className="booking-card">
            <div className="booking-card__poster-wrap">
                <img src={moviePoster} alt={movieTitle} className="booking-card__poster" />
            </div>

            <div className="booking-card__details">
                <div className="booking-card__top">
                    <h3 className="booking-card__title">{movieTitle}</h3>
                    <span className={`booking-card__status ${status}`}>{status}</span>
                </div>

                <div className="booking-card__info-grid">
                    <div className="booking-card__info-item">
                        <span className="info-label">Date</span>
                        <span className="info-value">{formattedDate}</span>
                    </div>
                    <div className="booking-card__info-item">
                        <span className="info-label">Time</span>
                        <span className="info-value">{showtime.time}</span>
                    </div>
                    <div className="booking-card__info-item">
                        <span className="info-label">Screen</span>
                        <span className="info-value">{showtime.screen}</span>
                    </div>
                    <div className="booking-card__info-item">
                        <span className="info-label">Seats</span>
                        <span className="info-value">{seats.join(', ')}</span>
                    </div>
                    <div className="booking-card__info-item">
                        <span className="info-label">Total</span>
                        <span className="info-value highlight">PKR {totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="booking-card__info-item">
                        <span className="info-label">Booked On</span>
                        <span className="info-value">{bookedDate}</span>
                    </div>
                </div>

                <div className="booking-card__ref">
                    <span className="info-label">Booking Reference</span>
                    <code className="booking-card__ref-code">{reference}</code>
                </div>
            </div>
        </div>
    )
}

export default BookingCard