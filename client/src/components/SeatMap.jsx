import React from 'react';

function SeatMap({ layout, selectedSeats, onSeatClick }) {
  return (
    <div className="glass-panel seat-map-panel">
      <h3>Theater Seating</h3>
      <div className="seat-map-grid">
        {layout.map((row) => (
          <div key={row.row} className="seat-row">
            <span className="seat-row-label">{row.row}</span>
            {row.seats.map((seat) => {
              const isSelected = selectedSeats.includes(seat.id);
              const isBooked = seat.status === 'booked';
              return (
                <button
                  key={seat.id}
                  type="button"
                  disabled={isBooked}
                  className={`seat-button ${isBooked ? 'booked' : isSelected ? 'selected' : 'available'}`}
                  onClick={() => onSeatClick(seat.id)}
                >
                  {seat.number}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <div className="seat-legend">
        <span><span className="legend-dot available" /> Available</span>
        <span><span className="legend-dot selected" /> Selected</span>
        <span><span className="legend-dot booked" /> Booked</span>
      </div>
    </div>
  );
}

export default SeatMap;