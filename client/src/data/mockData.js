// src/data/mockData.js

// 1. Core Movie Catalogue with Direct Official Theatrical Poster URLs
export const movies = [
  {
    id: '1',
    title: 'Interstellar',
    rating: '8.7',
    genre: 'Sci-Fi',
    language: 'English',
    duration: '169 min',
    tags: 'Sci-Fi • English • 169 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg'
  },
  {
    id: '2',
    title: 'Joker',
    rating: '8.4',
    genre: 'Thriller',
    language: 'English',
    duration: '122 min',
    tags: 'Thriller • English • 122 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb3fJ69StIaVyw3z5.jpg'
  },
  {
    id: '3',
    title: 'Dune: Part Two',
    rating: '8.5',
    genre: 'Sci-Fi',
    language: 'English',
    duration: '166 min',
    tags: 'Sci-Fi • English • 166 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/8l3ltz0YB8YTi7eMMhdU0UAr0ut.jpg'
  },
  {
    id: '4',
    title: 'Oppenheimer',
    rating: '8.9',
    genre: 'Drama',
    language: 'English',
    duration: '180 min',
    tags: 'Drama • English • 180 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/7Ray2mi58vjO6w5bP7qzgnpHpxJ.jpg'
  },
  {
    id: '5',
    title: 'Spider-Man: No Way Home',
    rating: '8.2',
    genre: 'Action',
    language: 'English',
    duration: '148 min',
    tags: 'Action • English • 148 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'
  },
  {
    id: '6',
    title: 'The Batman',
    rating: '7.8',
    genre: 'Action',
    language: 'English',
    duration: '176 min',
    tags: 'Action • English • 176 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg'
  },
  {
    id: '7',
    title: 'The Legend of Maula Jatt',
    rating: '8.6',
    genre: 'Action',
    language: 'Punjabi',
    duration: '153 min',
    tags: 'Action • Punjabi • 153 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/0hJtMNhNvCcAR5T37uj8s5h9Ot.jpg'
  },
  {
    id: '8',
    title: 'Sherdil',
    rating: '7.2',
    genre: 'Drama',
    language: 'Urdu',
    duration: '135 min',
    tags: 'Drama • Urdu • 135 min',
    posterUrl: 'https://image.tmdb.org/t/p/w500/9l0oaG5xXnHsoN76UHf6V4H9gvG.jpg'
  }
];

// 2. Interactive Seating Layout Generator Engine
export const generateSeats = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 8;
  const seatList = [];

  rows.forEach((row) => {
    for (let i = 1; i <= seatsPerRow; i++) {
      seatList.push({
        id: `${row}${i}`,
        row: row,
        number: i,
        isBooked: Math.random() < 0.2,
        price: row === 'E' || row === 'F' ? 800 : 650
      });
    }
  });

  return seatList;
};

// 3. Centralized Electronic Booking Passes Data
export const bookings = [
  { 
    id: '1', 
    title: 'Interstellar', 
    date: 'Tue, 14 Jul 2026', 
    time: '13:00', 
    screen: 'Screen 1', 
    seats: 'B3, B4', 
    total: 'PKR 1,300', 
    ref: 'PK-7F3A2C', 
    status: 'Confirmed', 
    posterUrl: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg' 
  },
  { 
    id: '2', 
    title: 'Oppenheimer', 
    date: 'Wed, 15 Jul 2026', 
    time: '20:30', 
    screen: 'Screen 2', 
    seats: 'D5', 
    total: 'PKR 750', 
    ref: 'PK-9B1E4F', 
    status: 'Confirmed', 
    posterUrl: 'https://image.tmdb.org/t/p/w500/7Ray2mi58vjO6w5bP7qzgnpHpxJ.jpg' 
  }
];