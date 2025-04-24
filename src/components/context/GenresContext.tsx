import { getGenres } from "../../api/tracks";
import { createContext, useContext, useEffect, useState } from "react";

export const GenresContext = createContext<string[]>([]);

export const GenresProvider = ({ children }: { children: React.ReactNode }) => {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    getGenres()
      .then((res) => setGenres(res.data))
      .catch((err) => console.error("Failed to fetch genres", err));
  }, []);

  return <GenresContext.Provider value={genres}>{children}</GenresContext.Provider>;
};

export const useGenres = () => useContext(GenresContext);
