function FilterBar({ selectedGenre, selectedLanguage, onGenreChange, onLanguageChange, genres, languages }) {
    return (
        <div className="filter-bar">
            <div className="filter-group">
                <label className="filter-label">Genre</label>
                <div className="filter-pills">
                    {genres.map(genre => (
                        <button
                            key={genre}
                            className={`filter-pill ${selectedGenre === genre ? 'active' : ''}`}
                            onClick={() => onGenreChange(genre)}
                        >
                            {genre}
                        </button>
                    ))}
                </div>
            </div>

            <div className="filter-group">
                <label className="filter-label">Language</label>
                <div className="filter-pills">
                    {languages.map(lang => (
                        <button
                            key={lang}
                            className={`filter-pill ${selectedLanguage === lang ? 'active' : ''}`}
                            onClick={() => onLanguageChange(lang)}
                        >
                            {lang}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FilterBar