const Movie = require('../models/Movie');

const seedMovies = [
  {
    tmdbId: 157336,
    title: 'Interstellar',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival and the future of the human race.',
    genre: 'Sci-Fi',
    language: 'English',
    duration: 169,
    rating: 8.7,
    posterUrl: 'https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
    pricePerSeat: 590,
    tags: ['Space', 'Drama', 'Adventure'],
    releaseDate: '2014-11-07',
    featured: true,
    reviews: [
      { name: 'Ayesha Khan', rating: 9.0, comment: 'Beautifully shot and emotionally powerful.', date: '2026-06-14' },
      { name: 'Ali Asghar', rating: 8.5, comment: 'The science drama balance feels mature and timeless.', date: '2026-06-15' }
    ],
    showtimes: [
      { id: 'is-1', date: '2026-07-25', time: '13:00', screen: 'IMAX 1', bookedSeats: ['A1','A2','A7','B5','C3'] },
      { id: 'is-2', date: '2026-07-25', time: '18:30', screen: 'IMAX 2', bookedSeats: ['A4','B1','B3','D8','E2'] },
      { id: 'is-3', date: '2026-07-26', time: '21:00', screen: 'Premium 1', bookedSeats: ['A5','A6','B8','C9','F1'] }
    ]
  },
  {
    tmdbId: 524434,
    title: 'Oppenheimer',
    description: 'A portrait of J. Robert Oppenheimer and the team who developed the atomic bomb during World War II.',
    genre: 'Drama',
    language: 'English',
    duration: 180,
    rating: 8.9,
    posterUrl: 'https://image.tmdb.org/t/p/w500/7Ray2mi58vjO6w5bP7qzgnpHpxJ.jpg',
    pricePerSeat: 640,
    tags: ['History', 'Biography', 'Thriller'],
    releaseDate: '2023-07-21',
    featured: true,
    reviews: [
      { name: 'Sana Malik', rating: 9.3, comment: 'Strong performances and an intense historical vision.', date: '2026-06-12' },
      { name: 'Hassan Raza', rating: 8.8, comment: 'Outstanding direction and a memorable cast.', date: '2026-06-18' }
    ],
    showtimes: [
      { id: 'op-1', date: '2026-07-25', time: '14:00', screen: 'Premium 2', bookedSeats: ['A3','A4','B2','C7','D1'] },
      { id: 'op-2', date: '2026-07-25', time: '20:00', screen: 'Signature 1', bookedSeats: ['B6','C2','C3','E5','F6'] },
      { id: 'op-3', date: '2026-07-26', time: '22:30', screen: 'IMAX 1', bookedSeats: ['A8','B7','D3','F4','G1'] }
    ]
  },
  {
    tmdbId: 447365,
    title: 'Dune: Part Two',
    description: 'Paul Atreides returns to claim the desert planet he is destined to rule in this epic continuation of the saga.',
    genre: 'Sci-Fi',
    language: 'English',
    duration: 166,
    rating: 8.5,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8l3ltz0YB8YTi7eMMhdU0UAr0ut.jpg',
    pricePerSeat: 700,
    tags: ['Epic', 'Adventure', 'Fantasy'],
    releaseDate: '2024-03-01',
    featured: true,
    reviews: [
      { name: 'Mariam Shah', rating: 8.9, comment: 'Spectacular visuals and a gripping story.', date: '2026-06-16' },
      { name: 'Zain Ali', rating: 8.3, comment: 'Feels like a grand cinematic experience.', date: '2026-06-11' }
    ],
    showtimes: [
      { id: 'du-1', date: '2026-07-26', time: '16:00', screen: 'Premium 3', bookedSeats: ['A9','A10','B1','B10','C5'] },
      { id: 'du-2', date: '2026-07-26', time: '21:00', screen: 'IMAX 2', bookedSeats: ['A1','A12','B2','C4','D6'] },
      { id: 'du-3', date: '2026-07-27', time: '19:00', screen: 'Signature 2', bookedSeats: ['B5','C3','D1','E2','G7'] }
    ]
  },
  {
    tmdbId: 550988,
    title: 'The Batman',
    description: 'Bruce Wayne uncovers corruption in Gotham City while pursuing a ruthless killer known as the Riddler.',
    genre: 'Action',
    language: 'English',
    duration: 176,
    rating: 8.1,
    posterUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    pricePerSeat: 620,
    tags: ['Action', 'Noir', 'Superhero'],
    releaseDate: '2022-03-01',
    reviews: [
      { name: 'Kiran Sohail', rating: 8.4, comment: 'Dark, atmospheric, and full of tension.', date: '2026-06-10' },
      { name: 'Asim Faraz', rating: 8.0, comment: 'A fresh style of Batman storytelling.', date: '2026-06-19' }
    ],
    showtimes: [
      { id: 'bt-1', date: '2026-07-25', time: '11:30', screen: 'Action 1', bookedSeats: ['A2','A3','B4','C7','E1'] },
      { id: 'bt-2', date: '2026-07-25', time: '19:15', screen: 'Action 2', bookedSeats: ['A5','B5','C6','D8','F2'] },
      { id: 'bt-3', date: '2026-07-27', time: '22:00', screen: 'IMAX 1', bookedSeats: ['A7','C1','D3','E4','G2'] }
    ]
  },
  {
    tmdbId: 634649,
    title: 'Spider-Man: No Way Home',
    description: 'Peter Parker seeks help from Doctor Strange after his identity is revealed, triggering chaos across realities.',
    genre: 'Action',
    language: 'English',
    duration: 148,
    rating: 8.2,
    posterUrl: 'https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    pricePerSeat: 610,
    tags: ['Superhero', 'Adventure', 'Family'],
    releaseDate: '2021-12-17',
    featured: false,
    reviews: [
      { name: 'Bilal Iqbal', rating: 8.5, comment: 'Nostalgic and wildly entertaining.', date: '2026-06-13' },
      { name: 'Sara Bilal', rating: 8.1, comment: 'A great treat for fans of the MCU.', date: '2026-06-17' }
    ],
    showtimes: [
      { id: 'sp-1', date: '2026-07-25', time: '10:00', screen: 'Family 1', bookedSeats: ['A1','A2','B1','C3','D5'] },
      { id: 'sp-2', date: '2026-07-25', time: '17:30', screen: 'Family 2', bookedSeats: ['A10','B8','C2','D9','F3'] },
      { id: 'sp-3', date: '2026-07-28', time: '20:45', screen: 'IMAX 2', bookedSeats: ['B2','C5','D7','E8','H1'] }
    ]
  },
  {
    tmdbId: 880355,
    title: 'The Witcher: Nightmare of the Wolf',
    description: 'A young witcher must confront his past as he explores war, magic, and a dangerous legacy.',
    genre: 'Fantasy',
    language: 'English',
    duration: 102,
    rating: 7.6,
    posterUrl: 'https://image.tmdb.org/t/p/w500/xvXrHe5hpt85jJ1Nn1aSEYhloEB.jpg',
    pricePerSeat: 580,
    tags: ['Fantasy', 'Adventure', 'Action'],
    releaseDate: '2021-08-23',
    reviews: [
      { name: 'Nadia Zeeshan', rating: 7.8, comment: 'A rich fantasy world with striking action scenes.', date: '2026-06-09' },
      { name: 'Faisal Ahmed', rating: 7.5, comment: 'Fun and darker than expected in the best way.', date: '2026-06-20' }
    ],
    showtimes: [
      { id: 'wt-1', date: '2026-07-26', time: '13:30', screen: 'Fantasy 1', bookedSeats: ['A6','B6','C10','E4','G9'] },
      { id: 'wt-2', date: '2026-07-26', time: '18:20', screen: 'Fantasy 2', bookedSeats: ['A8','B7','D4','F7','H5'] }
    ]
  },
  {
    tmdbId: 505642,
    title: 'Everything Everywhere All at Once',
    description: 'An exhausted woman is pulled into an insane multiverse adventure that reconnects her with herself and her family.',
    genre: 'Adventure',
    language: 'English',
    duration: 140,
    rating: 7.3,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8BE1XHnyeuW9InA0mn9wsTSnCkp.jpg',
    pricePerSeat: 620,
    tags: ['Comedy', 'Sci-Fi', 'Drama'],
    releaseDate: '2022-03-25',
    reviews: [
      { name: 'Aliyah Hussain', rating: 7.6, comment: 'Wild, emotional, and completely unforgettable.', date: '2026-06-08' },
      { name: 'Omar Sheikh', rating: 7.2, comment: 'A visual and narrative roller coaster that sticks.', date: '2026-06-21' }
    ],
    showtimes: [
      { id: 'ee-1', date: '2026-07-27', time: '15:15', screen: 'Avant 1', bookedSeats: ['A1','A3','B4','C5','D2'] },
      { id: 'ee-2', date: '2026-07-27', time: '20:00', screen: 'Avant 2', bookedSeats: ['A4','B8','C1','E6','F5'] }
    ]
  },
  {
    tmdbId: 352881,
    title: 'Venom: Let There Be Carnage',
    description: 'Eddie Brock tries to reignite his career while dealing with the violent and unpredictable Carnage.',
    genre: 'Action',
    language: 'English',
    duration: 97,
    rating: 6.2,
    posterUrl: 'https://image.tmdb.org/t/p/w500/3psGC5gE3o7Q8vYpb1jqle6gXyp.jpg',
    pricePerSeat: 560,
    tags: ['Action', 'Superhero'],
    releaseDate: '2021-10-01',
    reviews: [
      { name: 'Samira Kaleem', rating: 6.3, comment: 'Entertaining but not as strong as the first.', date: '2026-06-07' },
      { name: 'Tariq Javed', rating: 6.0, comment: 'Solid action set pieces and charismatic lead.', date: '2026-06-22' }
    ],
    showtimes: [
      { id: 'vn-1', date: '2026-07-28', time: '12:00', screen: 'Action 3', bookedSeats: ['A5','B7','C8','E1','G3'] },
      { id: 'vn-2', date: '2026-07-28', time: '18:45', screen: 'Action 4', bookedSeats: ['A2','B3','C4','D2','F9'] }
    ]
  },
  {
    tmdbId: 11,
    title: 'Star Wars: Episode IV - A New Hope',
    description: 'Luke Skywalker begins his journey as a Jedi Knight in a battle against the evil Empire.',
    genre: 'Sci-Fi',
    language: 'English',
    duration: 121,
    rating: 8.6,
    posterUrl: 'https://image.tmdb.org/t/p/w500/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
    pricePerSeat: 600,
    tags: ['Classic', 'Adventure', 'Sci-Fi'],
    releaseDate: '1977-05-25',
    reviews: [
      { name: 'Leila Khan', rating: 9.0, comment: 'A masterpiece that never gets old.', date: '2026-06-06' },
      { name: 'Irfan Mir', rating: 8.4, comment: 'Timeless story and iconic world-building.', date: '2026-06-23' }
    ],
    showtimes: [
      { id: 'sw-1', date: '2026-07-29', time: '14:30', screen: 'Legacy 1', bookedSeats: ['A1','A4','B2','C6','D8'] },
      { id: 'sw-2', date: '2026-07-29', time: '20:15', screen: 'Legacy 2', bookedSeats: ['A3','B5','C2','D1','F4'] }
    ]
  },
  {
    tmdbId: 497582,
    title: 'The Gray Man',
    description: 'A shadowy CIA agent becomes the target of a global manhunt after uncovering agency secrets.',
    genre: 'Thriller',
    language: 'English',
    duration: 129,
    rating: 6.4,
    posterUrl: 'https://image.tmdb.org/t/p/w500/8cX0gniGsmJEv6Lz7ft0GtF0n8B.jpg',
    pricePerSeat: 610,
    tags: ['Thriller', 'Action'],
    releaseDate: '2022-07-22',
    reviews: [
      { name: 'Naveed Shah', rating: 6.7, comment: 'Fast-paced and intense, with strong action choreography.', date: '2026-06-05' },
      { name: 'Huma Tariq', rating: 6.1, comment: 'A good thriller for a weekend watch.', date: '2026-06-24' }
    ],
    showtimes: [
      { id: 'gm-1', date: '2026-07-30', time: '16:45', screen: 'Thrill 1', bookedSeats: ['A8','B9','C10','D3','E7'] },
      { id: 'gm-2', date: '2026-07-30', time: '21:00', screen: 'Thrill 2', bookedSeats: ['A2','B1','C4','D5','F6'] }
    ]
  },
  {
    tmdbId: 155,
    title: 'The Dark Knight',
    description: 'Batman must stop the Joker, who aims to tear Gotham apart through chaos and moral tests.',
    genre: 'Action',
    language: 'English',
    duration: 152,
    rating: 9.0,
    posterUrl: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    pricePerSeat: 650,
    tags: ['Action', 'Thriller', 'Superhero'],
    releaseDate: '2008-07-18',
    reviews: [
      { name: 'Dania Rehman', rating: 9.4, comment: 'One of the best comic book films ever made.', date: '2026-06-04' },
      { name: 'Bilal Akram', rating: 8.9, comment: 'Heath Ledger is unforgettable.', date: '2026-06-25' }
    ],
    showtimes: [
      { id: 'dk-1', date: '2026-07-31', time: '15:00', screen: 'Classic 1', bookedSeats: ['A1','A5','B4','C8','E2'] },
      { id: 'dk-2', date: '2026-07-31', time: '20:30', screen: 'Classic 2', bookedSeats: ['A3','B7','C1','D2','F8'] }
    ]
  }
];

exports.getAllMovies = async (req, res, next) => {
  try {
    const { search, genre, language } = req.query;
    const filter = {};

    if (search) {
      filter.title = { $regex: search, $options: 'i' };
    }

    if (genre && genre !== 'All') {
      filter.genre = { $regex: `^${genre}$`, $options: 'i' };
    }

    if (language && language !== 'All') {
      filter.language = { $regex: `^${language}$`, $options: 'i' };
    }

    const movies = await Movie.find(filter).sort({ featured: -1, rating: -1, title: 1 });
    res.status(200).json(movies);
  } catch (err) {
    next(err);
  }
};

exports.getMovieById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findOne({ _id: id });

    if (!movie) {
      return res.status(404).json({ message: 'Movie not found' });
    }

    res.status(200).json(movie);
  } catch (err) {
    next(err);
  }
};

exports.seedMoviesIfNeeded = async () => {
  try {
    await Movie.deleteMany({});
    await Movie.insertMany(seedMovies);
    console.log('Database seeded!');
  } catch (err) {
    console.error('Seed error:', err);
  }
};