import { useQuery } from "@tanstack/react-query";

const fetchGamesByGenre = async (genre) => {
  const response = await fetch(
    `https://www.freetogame.com/api/games?category=${genre}`
  );

  if (!response.ok) {
    throw new Error(`details/${genre} not ok`);
  }
  return response.json();
};

export const useFetchGamesByGenre = (genre) =>
  useQuery(["filteredGames", genre], () => fetchGamesByGenre(genre), {
    enabled: !!genre,
  });
