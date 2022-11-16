import React from "react";
import MovieCard from "./MovieCard";
import movies from "./App";
import movie from "./MovieCard";
import amount from "./MovieCard"

const Favorites = () => {
    {
        movie.amount > 0 
        ? (
            <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))};
        </div>
    ) :(
            <h2>Niste dodali nijedan film u omiljene</h2>
    )

    }
};

export default Favorites;
