const fetchGameById = async ({ queryKey }) => {
  const id = queryKey[1];

  const response = await fetch(`https://www.freetogame.com/api/game?id=${id}`);

  if (!response.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return response.json();
};

export default fetchGameById;
