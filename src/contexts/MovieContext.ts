// contexts/MovieContext.ts
import { createContext } from "react";
import type { Movie } from "../services/api";

export interface MovieContextType {
  favorites: Movie[];
  addToFavorites: (movie: Movie) => void;
  removefromFavorites: (movieId: number) => void;
  isFavorites: (movieId: number) => boolean;
}

export const MovieContext = createContext<MovieContextType | undefined>(undefined);
