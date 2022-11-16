import React from 'react';
import { GrFavorite } from 'react-icons/gr';

const MovieCard = ({ movie }) => {
    
    var amount = 0;

    const addToFavorites = () => {
        movie.amount = movie.amount + 1;
    }
    
    return (
    
    <div className="movie">

        <div>
            <p>{movie.Year}</p>
        </div>

        <div>
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title}/>        
        </div>

        <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <button className="btn" onClick={addToFavorites}>
                <GrFavorite />
            </button>
        </div>
        
    </div>

    );
}

export default MovieCard;