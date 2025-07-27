import { useState, useEffect} from "react";
import { MovieContext } from "./MovieContext";
import type { ReactNode } from "react";
import type { Movie } from "../services/api.ts";

// Define context shape
export interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removefromFavorites: (movieId: number) => void;
  isFavorites: (movieId: number) => boolean;
}

// export const MovieContext = createContext<MovieContextType | undefined>(undefined);

// export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }:{children:ReactNode}) => {
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    const storeFavs = localStorage.getItem("favorites");
    if (storeFavs) {
      setFavorites(JSON.parse(storeFavs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (movie: Movie) => {
    setFavorites((prev) => [...prev, movie]);
  };

  const removefromFavorites = (movieId: number) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  const isFavorites = (movieId: number) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removefromFavorites,
    isFavorites,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
