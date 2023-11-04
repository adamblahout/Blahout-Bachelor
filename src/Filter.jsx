import { useEffect, useState } from "react";
import { useFetchAllGames } from "./fetchAllGames";
import { useFetchGamesByGenre } from "./fetchGamesByGenre";

const GENRES = [
  "mmorpg",
  "shooter",
  "strategy",
  "moba",
  "racing",
  "sports",
  "social",
  "sandbox",
  "open-world",
  "survival",
  "pvp",
  "pve",
  "pixel",
  "voxel",
  "zombie",
  "turn-based",
  "first-person",
  "third-Person",
  "top-down",
  "tank",
  "space",
  "sailing",
  "side-scroller",
  "superhero",
  "permadeath",
  "card",
  "battle-royale",
  "mmo",
  "mmofps",
  "mmotps",
  "3d",
  "2d",
  "anime",
  "fantasy",
  "sci-fi",
  "fighting",
  "action-rpg",
  "action",
  "military",
  "martial-arts",
  "flight",
  "low-spec",
  "tower-defense",
  "horror",
  "mmorts",
];

function Filter(props) {
  const { setFilter, setAllGames } = props;
  const [genre, setGenre] = useState("");

  const { data: allGames, isLoading: isAllGamesLoading } = useFetchAllGames();
  const { data: gamesByGenre, isLoading: isGamesByGenreLoading } =
    useFetchGamesByGenre(genre);

  console.log(genre);

  console.log(isGamesByGenreLoading, "I am loading");

  useEffect(() => {
    if (genre) {
      setAllGames(gamesByGenre);
    } else {
      setAllGames(allGames);
    }
  }, [genre, allGames, gamesByGenre, setAllGames]);
  if (isAllGamesLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="  mb-12 mt-12">
      <div className="block text-center">
        <div className="mb-4">
          <label htmlFor="game" className="mr-4">
            Game
          </label>
          <input
            className=" rounded-lg border-2 border-black"
            name="game"
            id="game"
            type="text"
            placeholder="název hry"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <label htmlFor="genre" id="genre" name="genre" className="mr-4">
          Genre
        </label>
        <select
          className=" rounded-lg border-2 border-black"
          name="genre"
          value={genre}
          onChange={(e) => {
            setGenre(e.target.value);
          }}
        >
          <option value="">All</option>
          {GENRES.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
/*useEffect(() => {
    async function requestFilteredGames() {
      if (genre) {
        const response = await fetch(
          `https://www.freetogame.com/api/games?category=${genre}`
        );

        const data = await response.json();
        setAllGames(data);
      } else {
        const response = await fetch("https://www.freetogame.com/api/games");
        const data = await response.json();
        setAllGames(data); // = hry
      }
    }
    requestFilteredGames();
  }, [genre, setAllGames]);

  return (
    <div className="search-params">
      <label htmlFor="game">Game</label>
      <input
        type="text"
        placeholder="název hry"
        onChange={(e) => setFilter(e.target.value)}
      />
      <label htmlFor="genre" id="genre" name="genre">
        Genre
      </label>
      <select
        name="genre"
        id="genre"
        value={genre}
        onChange={(e) => {
          setGenre(e.target.value);
        }}
      >
        <option value="">All</option>
        {GENRES.map((genre) => (
          <option key={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );*/

export default Filter;
