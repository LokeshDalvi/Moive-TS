import { useState, useEffect } from "react";
import { getPopularMovies, getSearchMovies } from "../services/api.ts";
import type { Movie } from "../services/api.ts";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";

function Home() {
  const [search, setSearch] = useState<string>("");

  const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPoppularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to Load Movies");
      } finally {
        setLoading(false);
      }
    };
    loadPoppularMovies();
  }, []);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await getSearchMovies(search);
      setMovies(searchResults);
      setError("");
    } catch (err) {
      console.log(err);
      setError("Failed to Load Movies");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search Movies"
          className="search-input"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="spinner-overlay">
          <div className="spinner" />
        </div>
      ) : error ? (
        <div className="error">{error}</div>
      ) : movies.length === 0 ? (
        <div className="no-results">
          No movies found. Try a different search.
        </div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
