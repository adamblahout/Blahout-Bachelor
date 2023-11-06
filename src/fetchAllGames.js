import { useQuery } from "@tanstack/react-query";

const fetchAllGames = async () => {
  const response = await fetch(`https://www.freetogame.com/api/games`, { mode: 'no-cors'});

  if (!response.ok) {
    throw new Error(`details fetch not ok`);
  }

  return response.json();
};

export const useFetchAllGames = () => useQuery(["allGames"], fetchAllGames);
