import { Link } from "react-router-dom";
function Game({ hra }) {
  return (
    <div className=" opacity-80 hover:opacity-100 ">
      <Link to={`/details/${hra.id}`}>
        <h2 className="text-center text-lg font-bold">{hra.title}</h2>
        <img
          src={hra.thumbnail}
          alt={hra.title}
          className=" mx-auto rounded-lg"
        />
      </Link>
    </div>
  );
}

export default Game;
