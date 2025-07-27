// import React from "react";
import "../css/Favorites.css";
import { useMovieContext } from "../contexts/useMovieContext";
import MovieCard from "./../components/MovieCard";

function Favorite() {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <div className="favorites">
        <h2>Favorite Movies</h2>
        <div className="favorites-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="favorites-empty">
      <h2>No Favorite Movies</h2>
      <p>Try Adding Favortie Movies</p>
    </div>
  );
}

export default Favorite;
