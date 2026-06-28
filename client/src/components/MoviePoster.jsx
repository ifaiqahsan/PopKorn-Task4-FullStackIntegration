import React, { useState } from 'react';

function MoviePoster({ src, alt, style = {}, className = '' }) {
  const fallback = 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80';
  const [imageSrc, setImageSrc] = useState(src || fallback);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => setImageSrc(fallback)}
      style={style}
      className={className}
    />
  );
}

export default MoviePoster;
