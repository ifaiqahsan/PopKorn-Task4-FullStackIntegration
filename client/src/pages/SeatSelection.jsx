import { useLocation, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'
import SeatMap from '../components/SeatMap'
import MoviePoster from '../components/MoviePoster'
import api from '../services/api'

function SeatSelection() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state?.movie || !state?.showtime) {
    navigate('/movies')
    return null
  }

  const { movie, showtime } = state
  const [selectedSeats, setSelectedSeats] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const seatLayout = useMemo(() => {
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const booked = new Set(showtime.bookedSeats || [])
    return rows.map((row) => ({
      row,
      seats: Array.from({ length: 12 }, (_, index) => {
        const number = index + 1
        const id = `${row}${number}`
        return {
          id,
          row,
          number,
          status: booked.has(id) ? 'booked' : 'available'
        }
      })
    }))
  }, [showtime])

  const toggleSeat = (seatId) => {
    setSelectedSeats((prev) => {
      if (prev.includes(seatId)) {
        return prev.filter((s) => s !== seatId)
      }
      return [...prev, seatId]
    })
  }

  const totalPrice = selectedSeats.length * Number(movie.pricePerSeat || 0)

  const handleConfirm = async () => {
    if (selectedSeats.length === 0) return

    const userId = localStorage.getItem('userId')
    if (!userId) {
      setError('Please login before confirming your booking.');
      return
    }

    try {
      setLoading(true)
      setError('')
      const bookingPayload = {
        userId,
        movieId: movie._id,
        movieTitle: movie.title,
        moviePoster: movie.posterUrl,
        showtime,
        seats: selectedSeats,
        totalPrice,
        reference: `PK-${Math.random().toString(36).substring(2, 8).toUpperCase()}`
      }

      const response = await api.post('/bookings', bookingPayload)
      const booking = response.data
      const existing = JSON.parse(localStorage.getItem('popkorn_bookings') || '[]')
      localStorage.setItem('popkorn_bookings', JSON.stringify([...existing, booking]))
      navigate('/checkout', { state: { booking } })
    } catch (error) {
      setError(error.response?.data?.message || 'Unable to confirm booking right now.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page seat-selection-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <div className="seat-selection__layout">
          <div className="seat-selection__map-col">
            <h2 className="seat-selection__heading">Choose Your Seats</h2>
            <SeatMap
              layout={seatLayout}
              selectedSeats={selectedSeats}
              onSeatClick={toggleSeat}
            />
          </div>

          <div className="seat-selection__summary">
            <div className="summary-card">
              <MoviePoster src={movie.posterUrl} alt={movie.title} className="summary-card__poster" />
              <h3 className="summary-card__title">{movie.title}</h3>

              <div className="summary-card__row">
                <span>Date</span>
                <span>{showtime.date}</span>
              </div>
              <div className="summary-card__row">
                <span>Time</span>
                <span>{showtime.time}</span>
              </div>
              <div className="summary-card__row">
                <span>Screen</span>
                <span>{showtime.screen}</span>
              </div>
              <div className="summary-card__row">
                <span>Seats</span>
                <span>{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Select seats'}</span>
              </div>

              <div className="summary-card__divider" />

              <div className="summary-card__row total">
                <span>Total</span>
                <span>PKR {totalPrice.toLocaleString()}</span>
              </div>

              {error && <p className="error-text">{error}</p>}
              <button
                className="btn-primary confirm-btn"
                disabled={selectedSeats.length === 0 || loading}
                onClick={handleConfirm}
              >
                {loading ? 'Processing...' : selectedSeats.length > 0 ? `Confirm ${selectedSeats.length} Seat${selectedSeats.length > 1 ? 's' : ''}` : 'Select seats to continue'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatSelection