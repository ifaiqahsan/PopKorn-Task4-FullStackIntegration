import React from 'react';

const SeatPicker = ({ layout, selectedSeats, onToggleSeat }) => {
  return (
    <div className="seat-container" style={{ display: 'grid', gap: '10px', justifyContent: 'center' }}>
      {layout.map((row, rIndex) => (
        <div key={rIndex} style={{ display: 'flex', gap: '5px' }}>
          {row.map((seat) => (
            <button
              key={seat.id}
              disabled={seat.status === 'booked'}
              onClick={() => onToggleSeat(seat.id)}
              style={{
                width: '40px', height: '40px',
                backgroundColor: selectedSeats.includes(seat.id) ? '#e50914' : 
                                 seat.status === 'booked' ? '#333' : '#fff',
                color: selectedSeats.includes(seat.id) ? '#fff' : '#000',
                border: 'none', borderRadius: '4px', cursor: seat.status === 'booked' ? 'not-allowed' : 'pointer'
              }}
            >
              {seat.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SeatPicker;