import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../services/api'
import MoviePoster from '../components/MoviePoster'

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [movie, setMovie] = useState(null)
  const [selectedShowtime, setSelectedShowtime] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await api.get(`/movies/${id}`)
        setMovie(response.data)
      } catch (error) {
        console.error('Error fetching movie:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [id])

  if (loading) {
    return <div className="page container"><h2>Loading movie details...</h2></div>
  }

  if (!movie) {
    return (
      <div className="page container not-found">
        <h2>Movie not found.</h2>
        <button className="btn-primary" onClick={() => navigate('/movies')}>Back to Movies</button>
      </div>
    )
  }

  const { title, description, genre, language, duration, rating, posterUrl, pricePerSeat, showtimes = [], reviews = [] } = movie

  const handleProceed = () => {
    if (!selectedShowtime) return
    navigate('/book/' + selectedShowtime.id, { state: { movie, showtime: selectedShowtime } })
  }

  const grouped = (showtimes || []).reduce((acc, st) => {
    acc[st.date] = acc[st.date] || []
    acc[st.date].push(st)
    return acc
  }, {})

  return (
    <div className="page movie-details-page">
      <div className="container">
        <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>

        <div className="movie-details__layout">
          <div className="movie-details__poster-col">
            <MoviePoster src={posterUrl} alt={title} className="movie-details__poster" />
          </div>

          <div className="movie-details__info-col">
            <h1 className="movie-details__title">{title}</h1>

            <div className="movie-details__badges">
              <span className="badge">{genre}</span>
              <span className="badge badge-outline">{language}</span>
              <span className="badge badge-outline">{duration} min</span>
            </div>

            <div className="movie-details__rating-row">
              <div className="movie-details__rating-badge">⭐ {rating.toFixed(1)}</div>
              <div className="movie-details__info-pill">PKR {pricePerSeat.toLocaleString()} / seat</div>
            </div>

            <p className="movie-details__desc">{description}</p>

            <div className="movie-details__showtimes">
              <h3 className="showtimes__heading">Available Showtimes</h3>
              {showtimes.length === 0 ? (
                <p className="no-showtimes">No showtimes are available at the moment.</p>
              ) : (
                Object.entries(grouped).map(([date, times]) => (
                  <div key={date} className="showtime-group">
                    <p className="showtime-date">
                      {new Date(date).toLocaleDateString('en-PK', {
                        weekday: 'long', month: 'long', day: 'numeric',
                      })}
                    </p>
                    <div className="showtime-pills">
                      {times.map((st) => (
                        <button
                          key={st.id}
                          className={`showtime-pill ${selectedShowtime?.id === st.id ? 'active' : ''}`}
                          onClick={() => setSelectedShowtime(st)}
                        >
                          <span>{st.time}</span>
                          <span>{st.screen}</span>
                          <span>{st.bookedSeats?.length || 0} booked</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            <button className="btn-primary proceed-btn" disabled={!selectedShowtime} onClick={handleProceed}>
              {selectedShowtime ? 'Choose Seats →' : 'Pick a showtime first'}
            </button>
          </div>
        </div>

        <div className="reviews-section">
          <h2>Audience Reviews</h2>
          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div key={idx} className="review-card">
                <div className="review-header">
                  <strong>{review.name}</strong>
                  <span>{review.rating.toFixed(1)}</span>
                </div>
                <p>{review.comment}</p>
                <small>{review.date}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails