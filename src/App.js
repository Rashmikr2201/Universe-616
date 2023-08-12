import { useState, useEffect } from 'react';
import MovieCard from './MovieCard.jsx';
import './App.css';
import SearchIcon from './search.svg';
//API_KEY=af90f55f

const API_URL = 'http://www.omdbapi.com?apikey=af90f55f';


const App = () => {
    const [searchTerm, setSearchTerm] = useState([]);
    const [movies, setMovies]= useState([]);
    
    useEffect(() => {
        // searchMovies();
    }, [searchTerm]);

const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

    }
    
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            searchMovies(searchTerm);
        }
    };

    return (
        <div className="app">
            <h1>UNIVERSE - 616</h1>

            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value); }}
                    onKeyDown={handleKeyPress}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {searchMovies(searchTerm);}}
                />
            </div>

            {
                movies?.length > 0
                ? (
                    <div className="container">
                {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
            </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found yet</h2>
                    </div>
                )
            }

        </div>
    );
};

export default App;