// contexts/useMovieContext.tsx
import { useContext } from "react";
import { MovieContext } from "./MovieContext.ts";
import type { MovieContextType } from "./MovieContext"; // or from a separate types file

export const useMovieContext = (): MovieContextType => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("useMovieContext must be used within a MovieProvider");
  }
  return context;
};
