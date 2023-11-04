import { useEffect, useState } from "react";
import Game from "./game";
import Filter from "./Filter";

const HomePage = () => {
  const [hry, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    if (hry) {
      const vyfiltrovane = hry?.filter((hra) =>
        hra.title.toLowerCase().includes(filter.toLowerCase())
      );

      setFilteredGames(vyfiltrovane);
    }
  }, [filter, hry]);
  return (
    <div>
      <Filter setFilter={setFilter} setAllGames={setAllGames} />
      <div className="grid gap-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredGames.map((hra) => (
          <Game key={hra.id} hra={hra} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
