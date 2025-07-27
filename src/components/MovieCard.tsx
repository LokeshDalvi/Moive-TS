interface MovieCardProps {
  movie: {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
  };
}
import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/useMovieContext.ts";

function MovieCard({ movie }: MovieCardProps) {
  const { addToFavorites, removefromFavorites, isFavorites } =
    useMovieContext();
  const favorite = isFavorites(movie.id);

  const onFavouriteClick = (e:React.MouseEvent) => {
    e.preventDefault();
    if (favorite) {
      removefromFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  };
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button
            className={`favorite-btn ${favorite ? "active" : ""}`}
            onClick={onFavouriteClick}
          >
            <i className="fa fa-heart"></i>
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
